"use client";

import { useEffect, useRef, useState } from "react";
import DashboardLayout from "../Main";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import { setAssetPath as setCalciteComponentsAssetPath } from "@esri/calcite-components/dist/components";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import request from "@arcgis/core/request";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Field from "@arcgis/core/layers/support/Field";
import Graphic from "@arcgis/core/Graphic";

// Define interfaces for the feature collection data
interface FeatureSetFeature {
  geometry: {
    rings: number[][][];
    spatialReference: { wkid: number };
  };
  attributes: Record<string, unknown>;
}

// Add new interface for managing layers
interface ManagedLayer {
  id: string;
  name: string;
  layer: FeatureLayer;
  visible: boolean;
}

interface FeatureSet {
  features: FeatureSetFeature[];
  geometryType: string;
}

interface LayerDefinition {
  name: string;
  fields: {
    name: string;
    type: string;
    alias: string;
    length?: number;
  }[];
}

interface FeatureCollectionLayer {
  layerDefinition: LayerDefinition;
  featureSet: FeatureSet;
}

interface FeatureCollection {
  layers: FeatureCollectionLayer[];
}

interface GenerateResponse {
  data: {
    featureCollection: FeatureCollection;
  };
}

setCalciteComponentsAssetPath(
  "https://js.arcgis.com/calcite-components/2.13.2/assets",
);

const portalUrl = "https://www.arcgis.com";

export default function MineplanContent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapViewRef = useRef<MapView | null>(null);
  const uploadFormRef = useRef<HTMLFormElement>(null);
  const uploadStatusRef = useRef<HTMLSpanElement>(null);
  const [managedLayers, setManagedLayers] = useState<ManagedLayer[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      basemap: "dark-gray-vector",
    });

    const view = new MapView({
      container: mapRef.current,
      map: map,
      center: [119.42349223817132, -4.0473536857696075],
      zoom: 5,
      popup: {
        defaultPopupTemplateEnabled: true,
      },
    });

    mapViewRef.current = view;

    if (uploadFormRef.current) {
      const expand = new Expand({
        expandIcon: "upload",
        view: view,
        content: uploadFormRef.current,
      });

      view.ui.add(expand, "top-right");
    }

    return () => {
      if (mapViewRef.current) {
        mapViewRef.current.destroy();
      }
    };
  }, []);

  const generateFeatureCollection = async (fileName: string) => {
    if (
      !mapViewRef.current ||
      !uploadFormRef.current ||
      !uploadStatusRef.current
    )
      return;

    const name = fileName.split(".")[0].replace("c:\\fakepath\\", "");
    uploadStatusRef.current.innerHTML = "<b>Loading </b>" + name;

    const params = {
      name: name,
      targetSR: mapViewRef.current.spatialReference,
      maxRecordCount: 1000,
      enforceInputFileSizeLimit: true,
      enforceOutputJsonSizeLimit: true,
      generalize: true,
      maxAllowableOffset: 10,
      reducePrecision: true,
      numberOfDigitsAfterDecimal: 0,
    };

    const myContent = {
      filetype: "shapefile",
      publishParameters: JSON.stringify(params),
      f: "json",
    };

    try {
      const response = (await request(
        portalUrl + "/sharing/rest/content/features/generate",
        {
          query: myContent,
          body: uploadFormRef.current,
          responseType: "json",
        },
      )) as GenerateResponse;

      const layerName =
        response.data.featureCollection.layers[0].layerDefinition.name;
      uploadStatusRef.current.innerHTML = "<b>Loaded: </b>" + layerName;
      addShapefileToMap(response.data.featureCollection);
    } catch (error) {
      if (uploadStatusRef.current) {
        uploadStatusRef.current.innerHTML = `<p style='color:red;max-width: 500px;'>${error instanceof Error ? error.message : "Unknown error occurred"}</p>`;
      }
    }
  };

  const addShapefileToMap = (featureCollection: FeatureCollection) => {
    if (!mapViewRef.current) return;

    let sourceGraphics: Graphic[] = [];

    const newLayers = featureCollection.layers.map(
      (layer: FeatureCollectionLayer) => {
        const graphics = layer.featureSet.features.map(
          (feature: FeatureSetFeature) => {
            return Graphic.fromJSON(feature);
          },
        );
        sourceGraphics = sourceGraphics.concat(graphics);

        const featureLayer = new FeatureLayer({
          objectIdField: "FID",
          source: graphics,
          fields: layer.layerDefinition.fields.map((field) => {
            return Field.fromJSON(field);
          }),
        });

        // Create managed layer object
        const managedLayer: ManagedLayer = {
          id: crypto.randomUUID(), // Generate unique ID
          name: layer.layerDefinition.name,
          layer: featureLayer,
          visible: true,
        };

        return managedLayer;
      },
    );

    // Add layers to map and update state
    newLayers.forEach((managedLayer) => {
      mapViewRef.current?.map.add(managedLayer.layer);
    });

    setManagedLayers((prev) => [...prev, ...newLayers]);

    mapViewRef.current.goTo(sourceGraphics).catch((error: Error) => {
      if (error.name !== "AbortError") {
        console.error(error);
      }
    });

    if (uploadStatusRef.current) {
      uploadStatusRef.current.innerHTML = "";
    }
  };

  const toggleLayerVisibility = (layerId: string) => {
    setManagedLayers((prev) =>
      prev.map((layer) => {
        if (layer.id === layerId) {
          layer.layer.visible = !layer.visible;
          return { ...layer, visible: !layer.visible };
        }
        return layer;
      }),
    );
  };

  const removeLayer = (layerId: string) => {
    const layerToRemove = managedLayers.find((layer) => layer.id === layerId);
    if (layerToRemove && mapViewRef.current) {
      mapViewRef.current.map.remove(layerToRemove.layer);
      setManagedLayers((prev) => prev.filter((layer) => layer.id !== layerId));
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = event.target.value.toLowerCase();

    if (fileName.indexOf(".zip") !== -1) {
      generateFeatureCollection(fileName);
    } else if (uploadStatusRef.current) {
      uploadStatusRef.current.innerHTML =
        '<p style="color:red">Add shapefile as .zip file</p>';
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between">
        <h1 className="mb-5 text-2xl font-bold">Mineplan</h1>
        <div className="flex items-center gap-2">
          <label
            htmlFor="archive"
            className="cursor-pointer font-thin text-gray-400"
          >
            Archive
          </label>
          <select
            name="archive"
            id="archive"
            className="w-32 cursor-pointer rounded border-r-8 border-gray-100 bg-gray-100 px-2 py-2 text-sm text-gray-900 outline-none"
          >
            <option value="all">All Year</option>
            {[...Array(10)].map((_, i) => (
              <option key={2024 - i} value={2024 - i}>
                {2024 - i}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Layer control panel */}
        <div className="w-64 rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-4 text-lg font-semibold">Layers</h2>
          {managedLayers.length === 0 ? (
            <p className="text-gray-500">No layers added yet</p>
          ) : (
            <ul className="space-y-2">
              {managedLayers.map((layer) => (
                <li
                  key={layer.id}
                  className="flex items-center justify-between rounded bg-gray-50 p-2"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={layer.visible}
                      onChange={() => toggleLayerVisibility(layer.id)}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <span className="text-sm">{layer.name}</span>
                  </div>
                  <button
                    onClick={() => removeLayer(layer.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex-1">
          <div ref={mapRef} className="relative h-[calc(100vh-200px)] w-full">
            <form
              encType="multipart/form-data"
              method="post"
              className="space-y-2"
              ref={uploadFormRef}
            >
              <p>Add a zipped shapefile to the map.</p>
              <div className="field">
                <label className="file-upload cursor-pointer">
                  <span className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Add File
                  </span>
                  <input
                    type="file"
                    name="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <span ref={uploadStatusRef} className="mt-2 block"></span>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

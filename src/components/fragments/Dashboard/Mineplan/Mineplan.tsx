"use client";

import DashboardLayout from "../Main";

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-zoom";

import { ArcgisMap, ArcgisZoom } from "@arcgis/map-components-react";

import { setAssetPath as setCalciteComponentsAssetPath } from "@esri/calcite-components/dist/components";

setCalciteComponentsAssetPath(
  "https://js.arcgis.com/calcite-components/2.13.2/assets",
);

export default function MineplanContent() {
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
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>
        </div>
      </div>

      <ArcgisMap
        center={[119.42349223817132, -4.0473536857696075]}
        zoom={5}
        onArcgisViewReadyChange={(event: CustomEvent) => {
          console.log("MapView ready", event);
        }}
        className="relative text-gray-600"
      >
        <ArcgisZoom position="top-left"></ArcgisZoom>
      </ArcgisMap>
    </DashboardLayout>
  );
}

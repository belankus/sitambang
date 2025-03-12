"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture, Grid } from "@react-three/drei";
import { Suspense, useState } from "react";
import * as THREE from "three";

const StockpileModel = () => {
  const { scene } = useGLTF("/models/stockpile.glb");
  const texture = useTexture("/textures/coal_texture.jpg");

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      if (mesh.material && !Array.isArray(mesh.material)) {
        if (mesh.material instanceof THREE.MeshStandardMaterial) {
          mesh.material.map = texture;
          mesh.material.needsUpdate = true; // Ensure material updates
        }
      }
    }
  });

  return <primitive object={scene} scale={1.5} />;
};

const StockpileScene = () => {
  const [info, setInfo] = useState<string | null>(null);

  const handleClick = () => {
    setInfo("Stockpile ID: SP001 | Volume: 50,000 Ton | Kalori: 5.123 Kcal/kg");
  };

  return (
    <div className="relative h-screen">
      <Canvas camera={{ position: [0, -20, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 10]} intensity={1} castShadow />
        <spotLight position={[0, 5, 10]} angle={0.3} intensity={0.8} />

        <Suspense fallback={null}>
          {/* ✅ Grid untuk bidang XY */}
          <Grid
            position={[0, 0, 0]} // Pastikan grid di dasar model
            rotation={[Math.PI / 2, 0, 0]} // Rotasi agar sejajar bidang XY
            args={[50, 50]} // Ukuran grid (opsional)
            sectionColor="gray"
            cellColor="white"
            cellThickness={0.5}
          />

          <mesh onClick={handleClick} receiveShadow castShadow>
            <StockpileModel />
            <meshStandardMaterial color={"#3B3B3B"} />
          </mesh>
        </Suspense>

        <OrbitControls />
      </Canvas>

      {info && (
        <div className="absolute left-4 top-4 rounded bg-white p-4 shadow-md">
          <p>{info}</p>
        </div>
      )}
    </div>
  );
};

export default StockpileScene;

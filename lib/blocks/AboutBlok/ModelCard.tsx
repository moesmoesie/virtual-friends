import React, { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Card from "../../components/Card";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Gameboy";
const ModelCard: React.FC = () => {
  return (
    <Card className="overflow-hidden h-full w-full">
      <Canvas
        style={{
          backgroundColor: "#transparent",
          width: "100%",
          height: "100%",
        }}
        camera={{ position: [2, 0, 300], fov: 35 }}
      >
        <Scene />
      </Canvas>
    </Card>
  );
};

const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <ambientLight intensity={0.2} />
      <directionalLight />
      <Suspense fallback={null}>
        <group>
          <Model />
        </group>
      </Suspense>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={false}
      />
    </>
  );
};

export default ModelCard;

import React, { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Card from "../../components/Card";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Model } from "./Gameboy";
const ModelCard: React.FC = () => {
  return (
    <Card className="w-[600px]  overflow-hidden h-[370px]">
      <div className="flex h-full">
        <div className="flex-1">
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
        </div>

        <div className="w-[400px] gap-4 pr-14  justify-center items-stretch h-full flex flex-col">
          <div className="bg-dark-purple-100 h-8 border rounded-md border-purple-navy-100" />
          <div className="bg-dark-purple-100 h-8 border rounded-md border-purple-navy-100" />
          <div className="bg-dark-purple-100 h-8 border rounded-md border-purple-navy-100" />
          <div className="bg-dark-purple-100 h-8 border rounded-md border-purple-navy-100" />
        </div>
      </div>
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

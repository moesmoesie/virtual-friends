import { Card } from "../../components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsLight";
theme.plain.backgroundColor = "transparent";

const text = `import React, { Suspense, useRef, useState } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import Card from "../../components/Card";
import { Canvas } from "@react-three/fiber";
import { ModelProps } from "./types";

const ModelCard: React.FC = () => {
  const [action, setAction] = useState<"Stomp" | "Stand">("Stomp");
  return (
    <Card className="flex-1 overflow-hidden h-[371px]">
      <div className="flex h-full">
        <div className="flex-1">
          <Canvas
            camera={{ position: [2, 0, 8], fov: 15 }}
            style={{
              backgroundColor: "#transparent",
              width: "100%",
              height: "100%",
            }}
          >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <group position={[0.025, -0.9, 0]}>
                <Model actions={action} />
              </group>
            </Suspense>
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enableZoom={false}
            />
          </Canvas>
        </div>

        <div className="w-[400px] gap-4 pr-14  justify-center items-stretch h-full flex flex-col">
          <button
            onClick={() => setAction("Stand")}
            className="bg-dark-purple-100 h-8 border rounded-md border-purple-navy-100"
          />
          <div className="bg-dark-purple-100 h-8 border rounded-md border-purple-navy-100" />
          <div className="bg-dark-purple-100 h-8 border rounded-md border-purple-navy-100" />
          <div className="bg-dark-purple-100 h-8 border rounded-md border-purple-navy-100" />
          <div className="bg-dark-purple-100 h-8 border rounded-md border-purple-navy-100" />
        </div>
      </div>
    </Card>
  );
};

export default ModelCard;

export const Model: React.FC<ModelProps> = (props) => {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF("/player.glb") as any;

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions[props.actions].play();
  }, [props.actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload("/player.glb");
`;

const CodeCard: React.FC = () => {
  return (
    <Card className="h-full w-full overflow-hidden  max-w-full">
      <div className="flex relative overflow-hidden h-full flex-col">
        <div className="flex bg-dark-purple-200 w-full  absolute top-0 px-5 pb-2 gap-2 pt-4">
          <div className="w-3 h-3 bg-[#DE3663] rounded-full" />
          <div className="w-3 h-3 bg-[#E9A944] rounded-full" />
          <div className="w-3 h-3 bg-[#5EC56F] rounded-full" />
        </div>

        <div className="flex-1 px-5  mt-2 pt-8 pb-5 overflow-scroll">
          <Highlight {...defaultProps} theme={theme} code={text} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </Card>
  );
};

export default CodeCard;

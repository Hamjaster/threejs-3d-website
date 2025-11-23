import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

export default function StudioLights() {
  return (
    <group name="StudioLights">
      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={10}
          position={[-4, 0, 5]}
          scale={10}
        />
        <Lightformer
          form="rect"
          intensity={10}
          position={[4, 0, 5]}
          scale={10}
          rotation={Math.PI / 2}
        />

        <Lightformer
          form="rect"
          intensity={10}
          position={[4, 15, 5]}
          scale={10}
          rotation={Math.PI / 2}
        />

        <Lightformer
          form="rect"
          intensity={10}
          position={[-4, -10, 5]}
          scale={10}
          rotation-y={Math.PI / 2}
        />
      </Environment>
      <spotLight
        intensity={1}
        penumbra={0.1}
        position={[0, 10, 0]}
        decay={0.1}
      />
      <spotLight
        intensity={1}
        penumbra={0.1}
        position={[-10, 10, 0]}
        decay={0.1}
      />
      <spotLight
        intensity={1}
        penumbra={0.1}
        position={[10, 10, 0]}
        decay={0.1}
      />
    </group>
  );
}

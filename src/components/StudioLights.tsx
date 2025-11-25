import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

export default function StudioLights() {
  return (
    <group name="StudioLights">
      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={10}
          position={[-8, 14, 5]}
          scale={10}
        />

        {/* <Lightformer
          form="rect"
          intensity={10}
          position={[4, 15, 5]}
          scale={10}
          rotation={Math.PI / 2}
        /> */}

        <Lightformer
          form="rect"
          intensity={10}
          position={[-4, -10, 5]}
          scale={10}
          rotation-y={Math.PI / 2}
        />
        <Lightformer
          form="rect"
          intensity={10}
          position={[6, 10, -5]}
          scale={10}
          rotation-y={Math.PI / 2}
        />

        <Lightformer
          form="rect"
          intensity={10}
          position={[6, 10, -5]}
          scale={10}
          rotation-y={Math.PI / 2}
        />
        <Lightformer
          form="rect"
          intensity={10}
          position={[4, 5, -15]}
          scale={10}
          rotation-y={Math.PI / 2}
        />
        <Lightformer
          form="rect"
          intensity={1}
          position={[0, -2, -2]}
          scale={10}
        />
      </Environment>
    </group>
  );
}

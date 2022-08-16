import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Doggo(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/dogrig.glb");
  return (
    <group ref={group} {...props} dispose={null} position={[-4,0,-2]} scale={2} rotation={[0,-Math.PI/2,0]}>
      <group name="Scene">
        <group
          name="Light"
          position={[4.08, 5.9, -1.01]}
          rotation={[1.89, 0.88, -2.05]}
        />
        <group
          name="Camera"
          position={[7.36, 4.96, 6.93]}
          rotation={[1.24, 0.33, -0.76]}
        />
        <group
          name="metarig"
          position={[0.02, -0.02, -0.08]}
          rotation={[0, 1.54, 0]}
          scale={[0.46, 0.46, 0.44]}
        >
          <primitive object={nodes.spine004} />
          <skinnedMesh
            name="texturedMesh"
            geometry={nodes.texturedMesh.geometry}
            material={materials.TextureAtlas_0}
            skeleton={nodes.texturedMesh.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dogrig.glb");

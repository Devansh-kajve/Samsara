import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Grass1(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/grass1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group >
        <group scale={0.8}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mff_grass_patch_1_0.geometry}
            material={materials.medievalfantasyforest_unwrap}
            position={[  125 - (Math.random() * 40), Math.random()*60 - 30, 0]}
          />
        </group>
      </group>
    </group>
  );
}

export function Grass(props){
    const { nodes, materials } = useGLTF("./Low polygrass/grass.glb");
    const group = useRef();
    return(
        <group ref={group} {...props} dispose={null}>
        <mesh
      castShadow
      receiveShadow
      geometry={nodes.mff_grass_patch_0_0.geometry}
      material={materials.medievalfantasyforest_unwrap}
      scale={0.8}
      position={[  125 - (Math.random() * 40), Math.random()*60 - 30, 0]}
    />
     <mesh
      castShadow
      receiveShadow
      geometry={nodes.mff_grass_patch_0_0.geometry}
      material={materials.medievalfantasyforest_unwrap}
      scale={0.8}
      position={[  -85 - (Math.random() * 40), Math.random()*60 - 30, 0]}
    />
    </group>
    )
}


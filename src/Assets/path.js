import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Path(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/plant.glb");
  let path = [];
  for (let i = -30; i < 30; i++) {
    for (let j = 0; j < 3; j++) {
    path.push(
        <group rotation={[-Math.PI / 2, 0, 0]} position={[5+(i*70), 0, j*30 ]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Path_Material_#116_0"].geometry}
                material={nodes["Path_Material_#116_0"].material}
              
              />
            </group>
    )
  }
}
  return (
    <group ref={group} {...props} dispose={null}>
      <group >
        <group scale={0.05}>
        {path}
        </group>
      </group>
    </group>
  );
}

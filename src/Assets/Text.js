import React from "react";
import { useGLTF } from "@react-three/drei";

export function Text(props) {
  const { nodes, materials } = useGLTF("/Text.glb");
  return (
    <group {...props} dispose={null} scale={5} position={[-150,0,120]} rotation={[0, Math.PI*2/3, Math.PI / 2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_S"].geometry}
        material={materials.Aria}
        position={[-25.5, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_S_1"].geometry}
        material={materials.Aria}
        position={[-14.2, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_S_2"].geometry}
        material={materials.Aria}
        position={[22.5, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_A"].geometry}
        material={materials.Aria}
        position={[-22.5, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_A_1"].geometry}
        material={materials.Aria}
        position={[-11.5, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_A_2"].geometry}
        material={materials.Aria}
        position={[-5.5, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_A_3"].geometry}
        material={materials.Aria}
        position={[9.5, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_M"].geometry}
        material={materials.Aria}
        position={[-19, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_M_1"].geometry}
        material={materials.Aria}
        position={[0, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_R"].geometry}
        material={materials.Aria}
        position={[-8.5, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_R_1"].geometry}
        material={materials.Aria}
        position={[19, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_E"].geometry}
        material={materials.Aria}
        position={[4.5, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_E_1"].geometry}
        material={materials.Aria}
        position={[16, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_E_2"].geometry}
        material={materials.Aria}
        position={[25.5, 1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_T"].geometry}
        material={materials.Aria}
        position={[7, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_V"].geometry}
        material={materials.Aria}
        position={[12.8, 1,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload("/Text.glb");

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export default function Plant(props) {
  const group = useRef();

  const { nodes, materials } = useGLTF("/plant.glb");
  return (
    <group ref={group} {...props} dispose={null}  scale={0.025}>
      <group>
        <group >
          <group >
           
            
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Lilie_Red_Material_#150_0"].geometry}
                material={nodes["Lilie_Red_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Dandelion_Yellow_Material_#150_0"].geometry}
                material={nodes["Dandelion_Yellow_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Tulip_Purple_Material_#150_0"].geometry}
                material={nodes["Tulip_Purple_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Wild_Flower_Red_Material_#150_0"].geometry}
                material={nodes["Wild_Flower_Red_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["SnowDrop_Purple_Material_#150_0"].geometry}
                material={nodes["SnowDrop_Purple_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["SnowDrop_white_Material_#150_0"].geometry}
                material={nodes["SnowDrop_white_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Dandelion_Purple_Material_#150_0"].geometry}
                material={nodes["Dandelion_Purple_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Liliy_Purple_Material_#150_0"].geometry}
                material={nodes["Liliy_Purple_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Tulip_Red_Material_#150_0"].geometry}
                material={nodes["Tulip_Red_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Wild_flower_Yellow_Material_#150_0"].geometry}
                material={nodes["Wild_flower_Yellow_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Liliy_White_Material_#150_0"].geometry}
                material={nodes["Liliy_White_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Dandelion_White_Material_#150_0"].geometry}
                material={nodes["Dandelion_White_Material_#150_0"].material}
                position={[3500 - (Math.random() * 7000), 50 + (Math.random() * 4000),0]}
              />
            </group>
            </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/plant.glb");
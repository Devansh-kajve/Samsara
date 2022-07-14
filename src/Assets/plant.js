import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function Plant(props) {
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

export function Pond(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/plant.glb");
  return (
    <group scale={[0.02, 0.02, 0.02]}>
    <group position={[820.07, -447.5, 0]} scale={2} >
              <group
                position={[52.07, 47.99, 6.68]}
                rotation={[2.44, 0.04, -0.49]}
                scale={[0.79, 0.79, 0.79]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["Pond_Rocks_Material_#116_0"].geometry}
                  material={nodes["Pond_Rocks_Material_#116_0"].material}
                />
              </group>
              <group
                position={[-2.09, 2.61, 3.71]}
                rotation={[Math.PI, 0, 0]}
                scale={[1, 0.87, 1]}
              >
                <group position={[-0.76, -33.31, 9.74]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Duck_Material_#102_0"].geometry}
                    material={nodes["Duck_Material_#102_0"].material}
                  />
                </group>
              </group>
              <group
                position={[-2.26, -66.65, -1.86]}
                rotation={[0, 0, -0.87]}
                scale={[0.48, 0.48, 0.59]}
              >
                <group position={[0, 0, 49.19]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["bulrush_Material_#22_0"].geometry}
                    material={nodes["bulrush_Material_#22_0"].material}
                  />
                </group>
              </group>
              <mesh 
              position={[-5,0,1]}
                castShadow
                receiveShadow
                geometry={nodes["Pond_Material_#149_0"].geometry}
                material={nodes["Pond_Material_#149_0"].material}
              />
            </group>
            </group>
  );
}

useGLTF.preload("/plant.glb");
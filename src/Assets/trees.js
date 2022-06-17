import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {
  Physics,
  useBox,
  useCompoundBody,
  useContactMaterial,
  useCylinder,
  usePlane,
} from "@react-three/cannon";

export default function Trees(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/plant.glb");
  return (
    <group ref={group} {...props} dispose={null} scale={[0.05, 0.05, 0.05]}>
      <group>
        <group  >
          <group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Maple_Tree_Material_#45_0"].geometry}
                material={materials.Material_45}
                position={[2500 - (Math.random()*5000), 2500-(Math.random()*2000) ,0]}
                />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Willow_Tree_Material_#22_0"].geometry}
                material={nodes["Willow_Tree_Material_#22_0"].material}
                position={[2500 - (Math.random()*5000), -2500+(Math.random()*2000) ,0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Pinetree_V2_Material_#22_0"].geometry}
                material={nodes["Pinetree_V2_Material_#22_0"].material}
                position={[2500 - (Math.random()*5000), -2500+(Math.random()*2000) ,0]}
              />
            </group>
            <group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["PineTree_V3_Material_#22_0"].geometry}
                material={nodes["PineTree_V3_Material_#22_0"].material}
                position={[2500 - (Math.random()*5000), 2500-(Math.random()*2000) ,0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Maple_Tree_Material_#45_0"].geometry}
                material={materials.Material_45}
                position={[2500 - (Math.random()*5000), 2500-(Math.random()*2000) ,0]}
               />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Willow_Tree_Material_#22_0"].geometry}
                material={nodes["Willow_Tree_Material_#22_0"].material}
                position={[2500 - (Math.random()*5000), -2500+(Math.random()*2000) ,0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Pinetree_V2_Material_#22_0"].geometry}
                material={nodes["Pinetree_V2_Material_#22_0"].material}
                position={[2500 - (Math.random()*5000), -2500+(Math.random()*2000) ,0]}
              />
            </group>
            <group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["PineTree_V3_Material_#22_0"].geometry}
                material={nodes["PineTree_V3_Material_#22_0"].material}
                position={[2500 - (Math.random()*5000), 2500-(Math.random()*2000) ,0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["DeadTree2_Material_#149_0"].geometry}
                material={nodes["DeadTree2_Material_#149_0"].material}
                position={[2500 - (Math.random()*5000), -2500+(Math.random()*2000) ,0]}
              />
            </group>
            </group>
        </group>
        <group>
        
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["rock_Material_#116_0"].geometry}
                material={nodes["rock_Material_#116_0"].material}
                position={[2500 - (Math.random()*5000), 2500-(Math.random()*2000) ,0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Rock2_Material_#116_0"].geometry}
                material={nodes["Rock2_Material_#116_0"].material}
                position={[2500 - (Math.random()*5000), 2500-(Math.random()*2000) ,0]}
              />
            </group>
            <group >
              <group >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["Rocks_Material_#116_0"].geometry}
                  material={nodes["Rocks_Material_#116_0"].material}
                  position={[2500 - (Math.random()*5000), -2500+(Math.random()*2000) ,0]}
                />
              </group>
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["rock_Material_#116_0"].geometry}
                material={nodes["rock_Material_#116_0"].material}
                position={[2500 - (Math.random()*5000), -2500+(Math.random()*2000) ,0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Rock2_Material_#116_0"].geometry}
                material={nodes["Rock2_Material_#116_0"].material}
                position={[2500 - (Math.random()*5000), -2500+(Math.random()*2000) ,0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Tree1_Material_#22_0"].geometry}
                material={nodes["Tree1_Material_#22_0"].material}
                position={[2500 - (Math.random()*5000), -2500+(Math.random()*2000) ,0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Tree2_Material_#22_0"].geometry}
                material={nodes["Tree2_Material_#22_0"].material}
                position={[2500 - (Math.random()*5000), 2500-(Math.random()*2000) ,0]}
              />
            </group>
            <group >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Tree4_Material_#22_0"].geometry}
                material={nodes["Tree4_Material_#22_0"].material}
                position={[2500 - (Math.random()*5000), -2500+(Math.random()*2000) ,0]}
              />
            </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/plant.glb");
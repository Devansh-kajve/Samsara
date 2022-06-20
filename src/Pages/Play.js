import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Path } from "../Assets/path";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  PointerLockControls,
  Sky,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Player } from "../Assets/Player";
import {
  Physics,
  useBox,
  useCompoundBody,
  usePlane,
} from "@react-three/cannon";
import {House,House1,House2,House3,Mcdonald} from "../Assets/Property";
import Plant from "../Assets/plant";
import { Grass, Grass1 } from "../Assets/grass";
import Doggo from "../Assets/Doggo";
import Trees from "../Assets/trees";


const Nature = (props) => {
  const group = useRef();
  const nature = [];
  for (let i = 0; i < 100; i++) {
    nature.push(
      <group key={"object" + i}>
        <Grass />
        <Grass1 />
        <Plant />
      </group>
    );
  }
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>{nature}</group>
    </group>
  );
};

const Property = () => {
  const a=[<House/>,<House1/>,<House2/>,<House3/>,<Mcdonald/>]  
  return (
    <Suspense fallback={null}>
            <group >
       {a}
     </group>
    </Suspense>
  )
}

const Nature1 = (props) => {
  const group = useRef();
  const nature1 = [];
  for (let i = 0; i < 25; i++) {
    nature1.push(
      <group key={"object" + i}>
        <Trees/>
      </group>
    );
  }
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>{nature1}</group>
    </group>
  );
};


const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));
  return (
    <mesh receiveShadow ref={ref}>
      <planeBufferGeometry attach="geometry" args={[256, 256]} />
      <meshStandardMaterial attach="material" color="#66ff66" />
    </mesh>
  );
};

export default function Play() {
  return (
    <div>
      <Canvas shadows>
        <fog attach="fog" color="white" near={100} far={200} />
        <ambientLight intensity={0.5} />
        <pointLight castShadow position={[0, 100, 0]} intensity={0.3} />

        <Sky
          distance={450000}
          sunPosition={[10, 10, 3]}
          inclination={0}
          azimuth={0.25}
        />

        <Suspense fallback={null}>
          <Nature />
          <Path/>
          <Property/>
          <Doggo/>
          <Nature1/>
          <Physics gravity={[0, -30, 0]}>
            <Player />
            <Plane />
          </Physics>
        </Suspense>

        <PointerLockControls />
      </Canvas>
      <div style={{ position: 'absolute', top: 630, left: 615, color:'whitesmoke' }}>
        <pre>
          Please wait for all the models to load
          <br />
          WASD to move, space to jump
          <br />
        </pre>
      </div>
    </div>
  );
}

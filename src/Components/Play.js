import { Suspense, useRef, useCallback, useState, useEffect } from "react";
import * as THREE from "three";
import { Path } from "../Assets/path";
import { Canvas, useLoader } from "@react-three/fiber";
import { PointerLockControls, Sky } from "@react-three/drei";
import { Player } from "../Assets/Player";
import Navbar from "./Navbar";
import {
  Physics,
  useBox,
  useCompoundBody,
  usePlane,
} from "@react-three/cannon";
import {
  House,
  House1,
  House2,
  House3,
  Mcdonald,
  EmptyLand,
} from "../Assets/Property";
import Web3 from 'web3';
import Land from './../abis/Land.jsons'
import { Plant, Pond } from "../Assets/plant";
import { Grass, Grass1 } from "../Assets/grass";
import Doggo from "../Assets/Doggo";
import Trees from "../Assets/trees";
import "./Play.css";

const Nature = (props) => {
  const group = useRef();
  const nature = [<Pond />];
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

let arr1 = ["House", "House1", "House2", "House3", "Mcdonald"];

const position = [
  [420, -447, 0],
  [30, 3, 13],
  [-40, 0.1, 13],
  [-60, 0, 15],
  [50, 0.1, 8],
  [-24, 0.12, 12],
];

const scale = [
  [0.02, 0.02, 0.02],
  [5, 5, 5],
  [0.8, 0.8, 0.8],
  [0.01, 0.01, 0.01],
  [0.00125, 0.00125, 0.00125],
  [18, 13, 1],
];

const Property = () => {
  const a = [<House3 />, <EmptyLand />];
  return (
    <Suspense fallback={null}>
      <group>{a}</group>
    </Suspense>
  );
};

const Nature1 = (props) => {
  const group = useRef();
  const nature1 = [];
  for (let i = 0; i < 25; i++) {
    nature1.push(
      <group key={"object" + i}>
        <Trees />
      </group>
    );
  }
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>{nature1}</group>
    </group>
  );
};

// let color = '#66ff66';
// const onMove = () => {
//   color = 'blue';
// }
//   const onOut = () => {
//     color = '#66ff66';
//   }
// const onClick = useCallback((e) => {
//   e.stopPropagation()
// })

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

export default function Play({ web3Handler, account }) {

const [web3, setWeb3] = useState(null)
const [account, setAccount] = useState(null)
const [landContract ,setLandContract] = useState(null)
const [cost, setCost] = useState(0)
const [buildings, setBuildings] = useState(null)
const [landId, setLandId] = useState(null)
const [landName, setLandName] = useState(null)
const [landOwner, setLandOwner] = useState(null)
const [hasOwner, setHasOwner] = useState(false)

useEffect(() => {
  loadBlockchainData()
}, [account])

const loadBlockchainData = async() => {
  if(typeof window.ethereum !== 'undefined'){
    const web3 = new Web3(window.ethereum)
    setWeb3(web3)
  
    const accounts = await web3.eth.getAccounts()
    if (account.length > 0) {
      setAccount(accounts[0])
    }

    const networkId = await web3.eth.net.getId()

    const land = new web3.eth.Contract(Land.abi, Land.networks[networkId].address)
    setLandContract(land)

    const cost = await land.methods.cost().call()
    setCost(web3.utils.fromWei(cost.toString(), 'ether'))

    const buildings = await land.methods.getBuildings().call()
    setBuildings(buildings)

    window.ethereum.on('account changed', function (accounts){
      setAccount(accounts[0])
    })

    window.ethereum.on('chainChanged', function (chainId){
      window.location.reload();
    })
  }}

const web3Handler = async() =>{
  if(web3){
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
    setAccount(accounts[0])
  }
}

return (
    <>
      <Navbar />
      <Canvas className="main" shadows>
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
          <Path />
          {/* {arr1 && arr1.map((index) => {
          <Plot
										key={index}
										position={[building.posX, building.posY, 0.1]}
										size={[building.sizeX, building.sizeY]}
										landId={index + 1}
										landInfo={building}
										setLandName={setLandName}
										setLandOwner={setLandOwner}
										setHasOwner={setHasOwner}
										setLandId={setLandId}
									/>
                })} */}
          <Property />
          <Doggo />
          <Nature1 />
          <Physics gravity={[0, -30, 0]}>
            <Player />
            <Plane />
          </Physics>
        </Suspense>

        <PointerLockControls />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 630,
          left: 615,
          color: "whitesmoke",
        }}
      >
        <pre>
          Please wait for all the models to load
          <br />
          WASD to move, space to jump
          <br />
        </pre>
      </div>
      <div className="dot" />
    </>
  );
}

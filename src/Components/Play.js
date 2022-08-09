import { Suspense, useState, useEffect } from "react";
import { Path } from "../Assets/path";
import { Canvas, useLoader } from "@react-three/fiber";
import { Center, PointerLockControls, Sky, Stars } from "@react-three/drei";
import { Player } from "../Assets/Player";
import Navbar from "./Navbar";
import Plot from "./plot";
import Building from "./Property";
import {
  Physics,
  usePlane,
} from "@react-three/cannon";
import Web3 from 'web3';
import Land from './../abis/Land.json'
import Doggo from "../Assets/Doggo";
import "./Play.css";
import AllNature from "../Assets/AllNature";
import Loader from "./Loader";

const buildPosition = [
  [4.20, 0, 10.2],
  [30, 3, 13],
  [-40, 0.1, 13],
  [-60, 0, 15],
  [50, 0.1, 8],
  [-24, 0.12, 12],
];

const plotPosition = [
  [5, 0.12, 12],
  [30, 0.12, 12],
  [-40, 0.12, 12],
  [-60, 0.12, 12],
  [50, 0.12, 12],
  [-24, 0.12, 12],
];

const scale = [
  [0.02, 0.02, 0.02],
  [5, 5, 5],
  [0.8, 0.8, 0.8],
  [0.01, 0.01, 0.01],
  [0.00125, 0.00125, 0.00125],
  [15, 1, 13],
];

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
    if (accounts.length > 0) {
      setAccount(accounts[0])
    }

    const networkId = await web3.eth.net.getId()
    console.log(Land.networks[networkId].address)

    const land = new web3.eth.Contract(Land.abi, Land.networks[networkId].address)
    setLandContract(land)
    

    const cost = await land.methods.cost().call()
    console.log(web3.utils.fromWei(cost.toString(), 'ether'))
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

const buyHandler = async (_id) => {
  try {
    await landContract.methods.mint(_id).send({ from: account, value: '10000000000000000' })

    const buildings = await landContract.methods.getBuildings().call()
    setBuildings(buildings)

    setLandName(buildings[_id - 1].name)
    setLandOwner(buildings[_id - 1].owner)
    setHasOwner(true)
  } catch (error) {
    window.alert('Error occurred when buying')
  }
}

const removeMenu = () => {
  setLandName(null)
  setLandId(null)
  }

return (
    <div className="Page">
      <Navbar web3Handler={web3Handler} account={account}/>
      <Canvas className="main" shadows onDoubleClick={removeMenu}>
      <Suspense fallback={<Loader/>}>
        <fog attach="fog" color="white" near={100} far={200} />
        <ambientLight intensity={0.5} />
        <pointLight castShadow position={[0, 100, 0]} intensity={0.3} />

        <Sky
          distance={450000}
          sunPosition={[10, 10, 3]}
          inclination={0}
          azimuth={0.25}
        />
          <AllNature/>
          <Path />
          {account && buildings && buildings.map((building, index) => {
							if (building.owner === '0x0000000000000000000000000000000000000000') {
								return (
									<Plot
										key={index}
										position={plotPosition[index]}
										size={scale[index]}
										landId={index + 1}
										landInfo={building}
										setLandName={setLandName}
										setLandOwner={setLandOwner}
										setHasOwner={setHasOwner}
										setLandId={setLandId}
									/>
								)
							} else {
								return (
									<Building
										key={index}
										position={buildPosition[index]}
										size={scale[index]}
										landId={index + 1}
										landInfo={building}
										setLandName={setLandName}
										setLandOwner={setLandOwner}
										setHasOwner={setHasOwner}
										setLandId={setLandId}
									/>
								)
							}
						})}
          <Doggo />
          <Physics gravity={[0, -30, 0]}>
            <Player />
            <Plane />
          </Physics>
        <PointerLockControls />
        </Suspense>
      </Canvas>

      {landId && (
				<div className="info">
					<h1 className="flex">{landName}</h1>

					<div className='flex-left'>
						<div className='info--id'>
							<h2>ID</h2>
							<p>{landId}</p>
						</div>

						<div className='info--owner'>
							<h2>Owner</h2>
							<p>{landOwner}</p>
						</div>

						{!hasOwner && (
							<div className='info--owner'>
								<h2>Cost</h2>
								<p>{`${cost} ETH`}</p>
							</div>
						)}
					</div>

					{!hasOwner && (
						<button onClick={() => buyHandler(landId)} className='button info--buy'>Buy Property</button>
					)}
				</div>
			)}
          

      <div
        style={{
          position: "absolute",
          top: 630,
          left: 605,
          color: "black",
          fontSize: 15,
          textAlign: "center",
        }}
      >
        <pre>
          Please wait for all the models to load
          <br />
          WASD to move, space to jump
          <br />
          Click on a plot to buy it after connecting wallet
        </pre>
      </div>
        <div className="dot" />
      </div>
  );
}

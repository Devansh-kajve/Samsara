import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { AdventureHouse, Apartment, Mcdonald, ModernHouse, StoneHouse, EmptyLand } from '../Assets/Property';

const names = ["House", "House1", "House2", "Apartment", "Mcdonald"];

const Building = ({ position, size, landId, landInfo, setLandName, setLandOwner, setHasOwner, setLandId }) => {

    const property = [<AdventureHouse/>, <StoneHouse/>, <Apartment />, <Mcdonald/>, <ModernHouse/>, <EmptyLand />];
    
    return (
      <Suspense fallback={null}>
        <group>{property}</group>
      </Suspense>
    );

    // return (
    //     <mesh position={position} onClick={clickHandler} args={size}>
    //         <boxBufferGeometry  />
    //         <meshStandardMaterial map={color} normalMap={surface} metalness={0.25} />
    //     </mesh>
    // );
}

export default Building;
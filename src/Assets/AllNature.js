import React, { useRef } from "react";
import { Plant, Pond } from "../Assets/plant";
import { Grass, Grass1 } from "../Assets/grass";
import { Text } from "./Text";
import Trees from "../Assets/trees";

//  const AllNature = () => {

    const AllNature = (props) => {
    const nature = [<Pond />,<Text/>,];
    const group = useRef();
    for (let i = 0; i < 25; i++) {
      nature.push(
        <group key={"object" + i} {...props}>
          <Trees />
        </group>
      );
    }
    for (let i = 0; i < 100; i++) {
      nature.push(
        <group key={"object" + i} {...props}>
          <Grass />
          <Grass1 />
          <Plant />
        </group>
      );
    }

    return (
        <group ref={group} dispose={null} rotation={[-Math.PI / 2, 0, 0]}>
              {nature}
        </group>
        )
  };

export default AllNature
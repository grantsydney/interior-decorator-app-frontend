import React from 'react'
import { Card } from "semantic-ui-react";
import FurnitureCard from "./FurnitureCard";


const AllFurnitureContainer = (props) => {

return (
    <Card.Group itemsPerRow={6}>
      {props.allFurniture.map( f => {

        return <FurnitureCard key={f.id} furniture={f} />
      })}
    </Card.Group>
  )
}

export default AllFurnitureContainer;

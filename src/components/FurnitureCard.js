import React from "react";
import { Card } from "semantic-ui-react";

const FurnitureCard = props => {

  // console.log(props);
  return (
    <Card>
      <div>
      <span className="tooltip">
        <h3>FurnitureCard</h3>
          <p>{props.furniture.name}</p>
          <span className="tooltiptext">
            <div>
            <p>{props.furniture.name}</p>
            <p>Description: {props.furniture.description}</p>
            <p>Dimensions: {props.furniture.dimension1}, {props.furniture.dimension2}</p>
            <img src={`./images/furniture/${props.furniture.img}`} alt={props.furniture.name}/>
            </div>
          </span>
        <img src={`./images/furniture/${props.furniture.img}`} alt={props.furniture.name}/>
        </span>
      </div>
    </Card>
  )
}

export default FurnitureCard;

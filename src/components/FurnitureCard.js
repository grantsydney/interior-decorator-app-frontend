import React from "react";
import { Card, Image } from "semantic-ui-react";

const FurnitureCard = props => {



  // console.log(props);
  return (
    <Card>
      <div className="furniture-card" onClick={()=>props.getFurnitureId(props.furniture.id)}>
      <span className="tooltip">
          <span className="tooltiptext">
            <div>
            <p>{props.furniture.name}</p>
            <p>Description: {props.furniture.description}</p>
            <img src={`./images/furniture/${props.furniture.img}`} alt={props.furniture.name}/>
            </div>
          </span>
        <Image src={`./images/furniture/${props.furniture.img}`} alt={props.furniture.name}/>
        </span>
      </div>
    </Card>
  )
}

export default FurnitureCard;

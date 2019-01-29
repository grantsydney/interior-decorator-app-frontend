import React from "react";
import { Card, Image } from "semantic-ui-react";

const FurnitureCard = props => {


  return (
    <Card>
      <div className="furniture-card" onClick={()=>props.getFurnitureId(props.furniture.id)}>
        <span className="tooltip">
          <span className="tooltiptext" style={{marginLeft:'200px'}}>
            <div>
              <br/>
              <img src={`./images/furniture/${props.furniture.img}`} alt={props.furniture.name}/>
              <p>{props.furniture.description}</p>
            </div>
          </span>
        <Image src={`./images/furniture/${props.furniture.img}`} alt={props.furniture.name}/>
        </span>
      </div>
    </Card>
  )
}

export default FurnitureCard;

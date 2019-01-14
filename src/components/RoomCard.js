import React, { Component } from 'react'
import { Card } from "semantic-ui-react";

class RoomCard extends Component {

  onClick = (event) => {
      this.props.getRoomId(this.props.room.id);
      this.props.getUserRoomFurniture(this.props.room.id);
   }


render() {
  return(
    <div>


      <div>
      <Card onClick={this.onClick} key={this.props.room.id}>
      <h1>RoomCard</h1>
          <div>
          <h3>{this.props.room.name}</h3>
          </div>
      </Card>


      </div>
    </div>
  )
}


}

export default RoomCard;

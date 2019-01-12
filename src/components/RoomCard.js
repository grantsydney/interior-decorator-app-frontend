import React, { Component } from 'react'
import { Card } from "semantic-ui-react";

class RoomCard extends Component {

render() {
  return(
    <div>


      <div>
      <Card key={this.props.room.id}>
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

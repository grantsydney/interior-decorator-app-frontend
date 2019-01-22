import React, { Component } from 'react'
import { Card, Button } from "semantic-ui-react";

class RoomCard extends Component {

  onClick = (event) => {
      this.props.getRoomId(this.props.room.id);
      this.props.getUserRoomFurniture(this.props.room.id);
   }

   deleteRoom = (event) => {

     event.target.parentElement.parentElement.remove()
     let roomId = parseInt(event.target.dataset.id)
     fetch(`http://localhost:3000/api/v1/users/1/rooms/${roomId}`, { method: 'DELETE' })

   }


render() {
  return(
    <div>


      <div>

      <Card raised color='violet' onClick={this.onClick} key={this.props.room.id} style={{margin:'20px'}}>
        <Card.Content>
        <Card.Header className="room-card" style={{'fontSize':'2em'}}>{this.props.room.name}</Card.Header>
        <Card.Description>
          <strong>Width:</strong>{this.props.room.dimension1}
            <br/>
          <strong>Height:</strong>{this.props.room.dimension2}
        </Card.Description>
        <Button data-id={this.props.room.id} onClick={this.deleteRoom} basic color='violet'>
            X
          </Button>
      </Card.Content>

      </Card>



      </div>
    </div>
  )
}


}

export default RoomCard;

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
     fetch(`http://localhost:3000/api/v1/users/1/rooms/${roomId}`, { method: 'DELETE',
       headers: {
         Authorization: `Bearer ${localStorage.getItem('jwt')}`
       }
   })

   }


render() {
  return(



      <div>

      <Card raised color='violet' onClick={this.onClick} key={this.props.room.id}>
        <Card.Content>
        <Card.Header className="room-card" style={{'fontSize':'2em', 'textAlign':'center', fontFamily: `'Kalam', cursive`
}}>{this.props.room.name}</Card.Header>
        <Card.Description style={{'margin':'auto', 'textAlign':'center', fontFamily: `'Kalam', cursive`, fontSize:'1.2em'}}>
          <strong>Width:</strong>{this.props.room.dimension1}ft
            <br/>
          <strong>Height:</strong>{this.props.room.dimension2}ft
        </Card.Description>
        <br/>
        <Button data-id={this.props.room.id} onClick={this.deleteRoom} basic color='violet' style={{'marginLeft':'39%'}}>
            X
          </Button>
      </Card.Content>

      </Card>



      </div>

  )
}


}

export default RoomCard;

import React from "react";
import RoomCard from './RoomCard'
import { Card } from "semantic-ui-react";

const AllRooms = props => {


  return (
    <div>
      <div>
        <Card.Group centered itemsPerRow={2}>
          {props.rooms ?  props.rooms.map(r => {
            return <RoomCard
              key={r.id}
              room={r}
              getRoomId={props.getRoomId}
              getUserRoomFurniture={props.getUserRoomFurniture}
            />
          }): <p>No Rooms!</p>}</Card.Group>
      </div>
    </div>
  )
}

export default AllRooms;

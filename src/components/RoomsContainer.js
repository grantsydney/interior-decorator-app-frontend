import React, { Component } from 'react'

import Room from './Room';

class RoomContainer extends Component {


// findcurrentroom={this.props.findCurrentRoom(this.props.clickedRoomId)}




  render(){

    console.log(this.props);
    return(
      <div>
      <h1>RoomContainer</h1>
      <div className="mock-room" style={{border:"1px solid black",width:this.props.findCurrentRoom?`${this.props.findCurrentRoom.dimension1}px`:null,height:this.props.findCurrentRoom?`${this.props.findCurrentRoom.dimension2}px`:null,margin:'auto'}}>Mock Room</div>
      {/*{this.props.rooms.map(r => {
        return <Room rooms={this.props.rooms} room={r} key={r.id} getRoomId={this.props.getRoomId}/>
      })}*/}
      <p>Dimension 1: {this.props.findCurrentRoom ? this.props.findCurrentRoom.dimension1 : null}</p>
      <p>Dimension 2: {this.props.findCurrentRoom ? this.props.findCurrentRoom.dimension2 : null}</p>

      </div>
    )
  }

  // style={{textDecoration: i.completed?"line-through":"none", color:`#${l.color}`}}





}

export default RoomContainer

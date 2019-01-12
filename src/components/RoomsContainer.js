import React, { Component } from 'react'

import Room from './Room';

class RoomContainer extends Component {
  render(){
    return(
      <div>
      <h1>RoomContainer</h1>
      <div className="mock-room">Mock Room</div>
      {this.props.rooms.map(r => {
        return <Room rooms={this.props.rooms} room={r} key={r.id} getRoomId={this.props.getRoomId}/>
      })}
      </div>
    )
  }





}

export default RoomContainer

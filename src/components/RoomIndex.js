import React, { Component } from 'react'
import RoomCard from './RoomCard'
import RoomForm from './RoomForm'
import RoomContainer from './RoomsContainer'
import { Search } from 'semantic-ui-react'
import AllFurnitureContainer from './AllFurnitureContainer'




class RoomIndex extends Component {

  state={
    rooms: [],
    furniture: [],
    clickedRoomId: '',
    term: ''
  }

  //fetch room data and set state
  componentDidMount() {
  fetch(`http://localhost:3000/api/v1/users/1/rooms`)
    .then(r => r.json())
    .then(roomData => {
      this.setState({ rooms: roomData })
    })
    fetch(`http://localhost:3000/api/v1/furnitures`)
      .then(r => r.json())
      .then(furnitureData => {
        this.setState({ furniture: furnitureData })
      })
  }

  //find room by id
  getRoomId = clickedRoomId => {
    this.setState({
      clickedRoomId: clickedRoomId
    })
  }

  addRoom = (room) => {
    this.setState({
      rooms: [room, ...this.state.rooms]
    })
  }

  handleSearch = (event) => {
    this.setState({ term: event.target.value })
  }

render() {
  const filteredFurniture = this.state.furniture.filter(f => {
  return f.name.toLowerCase().includes(this.state.term.toLowerCase()) || f.color.toLowerCase().includes(this.state.term.toLowerCase())
})
  return(
    <div>
      <h1>RoomIndex</h1>
      <h2>Your Rooms</h2>
      <div>
        {this.state.rooms.map(r => {
          return <RoomCard key={r.id} room={r} />
        })}
      </div>

      <RoomForm addRoom={this.addRoom}/>
      {/*<RoomContainer rooms={this.state.rooms} getRoomId={this.getRoomId} />*/}
      <Search onSearchChange={this.handleSearch} open={false} />
      <AllFurnitureContainer allFurniture={filteredFurniture}/>



    </div>
  )
}


}

export default RoomIndex;

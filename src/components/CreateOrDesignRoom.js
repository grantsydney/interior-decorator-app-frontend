import React, { Component } from 'react'
import RoomForm from './RoomForm'
import RoomContainer from './RoomsContainer'
import { Search } from 'semantic-ui-react'
import AllFurnitureContainer from './AllFurnitureContainer'


class CreateOrDesignRoom extends Component {

render() {
  const filteredFurniture = this.props.furniture.filter(f => {
  return f.name.toLowerCase().includes(this.props.term.toLowerCase()) || f.color.toLowerCase().includes(this.props.term.toLowerCase())
})
  return (

    <div>
    <RoomForm addRoom={this.props.addRoom}/>
    <RoomContainer
      rooms={this.props.rooms}
      currentRoom={this.props.clickedRoomId}
      currentFurniture={this.props.clickedFurnitureId}
      findCurrentRoom={this.props.findCurrentRoom()}
      findCurrentFurniture={this.props.findCurrentFurniture()}
      chosenFurniture={this.props.chosenFurniture}
      saveFurniturePiece={this.props.saveFurniturePiece}
      roomFurniture={this.props.roomFurniture}
      allFurniture={this.props.allFurniture}
    />
    <Search onSearchChange={this.props.handleSearch} open={false} />
    <AllFurnitureContainer
      getFurnitureId={this.props.getFurnitureId}
      allFurniture={filteredFurniture}
      clickedFurnitureId={this.props.clickedFurnitureId}
    />
    </div>




  )

}

}




export default CreateOrDesignRoom;

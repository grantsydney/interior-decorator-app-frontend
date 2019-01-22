import React, { Component } from 'react'
import RoomForm from './RoomForm'
import RoomContainer from './RoomsContainer'
import { Search, Button, Divider } from 'semantic-ui-react'
import AllFurnitureContainer from './AllFurnitureContainer'
import AllRooms from './AllRooms'






class RoomIndex extends Component {

  state={
    rooms: [],
    furniture: [],
    clickedRoomId: '',
    clickedFurnitureId:'',
    term: '',
    chosenFurniture: [{id: 2, name: "Chair", category: "seating", description: "glossy red finish", color: "red", img: "molded-plastic-wire-base-side-chair.png",
    img_sketch: "molded-plastic-wire-base-side-chair-sketch.png", dimension1: 18,
    dimension2: 22}],
    showFurniture: true,
    createRoom: false


  }

  //fetches
  componentDidMount() {
    //fetch all user's rooms data
    fetch(`http://localhost:3000/api/v1/users/1/rooms`)
      .then(r => r.json())
      .then(roomData => {
        this.setState({ rooms: roomData })
      })

    //fetch all furniture data
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

  //find room object with the id that matches the clickedRoomId
  findCurrentRoom() {
    return this.state.rooms.find(r =>{
      return r.id === this.state.clickedRoomId
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

  //find furniture by id
  getFurnitureId = clickedFurnitureId => {
    this.setState({
      clickedFurnitureId: clickedFurnitureId
    },()=>console.log("clicked furniture id is",this.state.clickedFurnitureId))
  }

  //get user's roomFurniture
  getUserRoomFurniture = clickedRoomId => {
    //fetch all user's room_furniture data
    // debugger
    fetch(`http://localhost:3000/api/v1/users/1/room_furniture/${clickedRoomId}`)
      .then(r => r.json())
      .then(roomFurnitureData => {
        // debugger
        this.setState({ roomFurniture: roomFurnitureData })
      }, ()=>console.log(this.state.roomFurniture))

  }
// chosenFurniture: [item, ...this.state.roomFurniture],
    addPiece = (item) => {
      console.log(item, "added to chosen furniture with room id of", item.room_id);
      this.setState({
        chosenFurniture: [item, ...this.state.roomFurniture]
        // roomFurniture: [item, ...this.state.roomFurniture]
      })
    }

    saveFurniturePiece = (clickedFurnitureId, clickedRoomId, xCoord, yCoord) => {
      //onClick of save button, creates POST request to roomFurniture table with all 4 parameters
      // debugger

      fetch("http://localhost:3000/api/v1/users/1/room_furniture", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          room_furniture: {
            room_id: clickedRoomId,
            furniture_id: clickedFurnitureId,
            x_coord: xCoord,
            y_coord: yCoord
          }
        })
      })
        .then(r=>r.json())
        .then(item => this.addPiece(item))

    }

    //find furniture object with the id that matches the clickedFurnitureId
    findCurrentFurniture() {
      return this.state.furniture.find(f =>{
        return f.id === this.state.clickedFurnitureId
      })
    }
      // let clickedFurniture = this.state.furniture.find(f =>{
      //    return f.id === this.state.clickedFurnitureId
      // })
      // this.setState({
      //   chosenFurniture: [...this.state.chosenFurniture, clickedFurniture]
      // })
      // if (this.state.clickedFurnitureId){
      //   let clickedFurniture = this.state.furniture.map(f =>{
      //     // debugger
      //      return f.id === clickedFurnitureId
      //   })
      // }

      // this.setState({
      //   chosenFurniture: [...this.state.chosenFurniture, clickedFurniture]
      // },()=>console.log(this.state.chosenFurniture))


      furnitureToggle = () => {
        this.setState({
          showFurniture: !this.state.showFurniture
        })
        if(this.state.showFurniture === true){
          document.querySelector('.show-furniture').innerText = 'Show Furniture'
        } else {
          document.querySelector('.show-furniture').innerText = 'X'
        }
      }

      roomFormToggle = () => {
        this.setState({
          createRoom: !this.state.createRoom
        })
        if(this.state.createRoom === true){
          document.querySelector('.create-room').innerText = 'Design A Room?'
        } else {
          document.querySelector('.create-room').innerText = "Don't Design A Room"
        }
      }






render() {

  const filteredFurniture = this.state.furniture.filter(f => {
  return f.name.toLowerCase().includes(this.state.term.toLowerCase()) || f.color.toLowerCase().includes(this.state.term.toLowerCase()) || f.category.toLowerCase().includes(this.state.term.toLowerCase())
})
  return(
    <div>

      <br/><br/><br/>
      <AllRooms rooms={this.state.rooms} getRoomId={this.getRoomId} getUserRoomFurniture={this.getUserRoomFurniture}/>
      <Divider />
      <Button className="create-room" basic color='violet' content='Design A Room?' onClick={()=>this.roomFormToggle()}/>
      {this.state.createRoom ? <RoomForm addRoom={this.addRoom}/>: null}
      <RoomContainer
        rooms={this.state.rooms}
        currentRoom={this.state.clickedRoomId}
        currentFurniture={this.state.clickedFurnitureId}
        findCurrentRoom={this.findCurrentRoom()}
        findCurrentFurniture={this.findCurrentFurniture()}
        chosenFurniture={this.state.chosenFurniture}
        saveFurniturePiece={this.saveFurniturePiece}
        roomFurniture={this.state.roomFurniture}
        allFurniture={this.state.furniture}
      />
    <Divider />

      <Button className="show-furniture" basic color='violet' content='X' onClick={()=>this.furnitureToggle()}/>
      {this.state.showFurniture ?
        <div>
          <Search onSearchChange={this.handleSearch} open={false} />
          <AllFurnitureContainer
          getFurnitureId={this.getFurnitureId}
          allFurniture={filteredFurniture}
          clickedFurnitureId={this.state.clickedFurnitureId}
        />
        </div>
       : null}



    </div>
  )
}


}

export default RoomIndex;

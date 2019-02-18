import React, { Component } from 'react'
import RoomForm from './RoomForm'
import RoomContainer from './RoomsContainer'
import { Search, Button, Divider } from 'semantic-ui-react'
import AllFurnitureContainer from './AllFurnitureContainer'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
import AllRooms from './AllRooms'

class RoomIndex extends Component {

  state={
    rooms: [],
    furniture: [],
    clickedRoomId: '',
    clickedFurnitureId: [],
    term: '',
    chosenFurniture: [{name: 'Finn-Juhl-Credenza', category: 'workspace', description: 'Storage unit with drawers and trays.', color: 'wood', img: 'Finn-Juhl-Credenza.png', img_sketch: 'Finn-Juhl-Credenza-sketch.png', dimension1: 0, dimension2: 0}],
    showFurniture: true,
    createRoom: false,
    roomFurniture: []
  }

  //fetches
  componentDidMount() {
    //fetch all user's rooms data
    fetch(`http://localhost:3000/api/v1/users/${this.props.userId}/rooms`,{
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(r => r.json())
      .then(roomData => {
        this.setState({ rooms: roomData })
      })

    //fetch all furniture data
    fetch(`http://localhost:3000/api/v1/furnitures`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
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
      rooms: [...this.state.rooms, room]
    })
  }

  handleSearch = (event) => {
    this.setState({ term: event.target.value })
  }

  //find furniture by id
  getFurnitureId = clickedFurnitureId => {
    this.setState({
      clickedFurnitureId: [...this.state.clickedFurnitureId, clickedFurnitureId]
    },()=>console.log("clicked furniture id is",this.state.clickedFurnitureId))
  }


  //get user's roomFurniture
  getUserRoomFurniture = clickedRoomId => {
    //fetch all user's room_furniture data
    fetch(`http://localhost:3000/api/v1/users/${this.props.userId}/room_furniture/${clickedRoomId}`,{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  })
      .then(r => r.json())
      .then(roomFurnitureData => {
        this.setState({ roomFurniture: roomFurnitureData })
      })

  }

    addPiece = (item) => {
      this.setState({
        chosenFurniture: [...this.state.chosenFurniture, item],
      })
    }

    saveFurniturePiece = (clickedFurnitureId, clickedRoomId, xCoord, yCoord) => {
      //onClick of save button, creates POST request to roomFurniture table with all 4 parameters
      fetch(`http://localhost:3000/api/v1/users/${this.props.userId}/room_furniture`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
        body: JSON.stringify({
          room_furniture: {
            room_id: clickedRoomId,
            furniture_id: clickedFurnitureId[clickedFurnitureId.length - 1],
            x_coord: xCoord,
            y_coord: yCoord
          }
        })
      })
        .then(r=>r.json())
        .then(item => this.addPiece(item))

    }

    //find furniture object with the id that matches the clickedFurnitureId
    findCurrentFurniture = () => {
      return this.state.clickedFurnitureId.map(furnId => {
        return this.state.furniture.find(f => {
          return f.id === furnId
        })
      })
    }


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
          document.querySelector('.create-room').innerText = 'Design A Room'
        } else {
          document.querySelector('.create-room').innerText = "X"
        }
      }

      on = () => {
        document.querySelector(".overlay").style.display = "block";
      }

      off = () => {
        document.querySelector(".overlay").style.display = "none";
      }


render() {

  const filteredFurniture = this.state.furniture.filter(f => {
  return f.name.toLowerCase().includes(this.state.term.toLowerCase()) || f.color.toLowerCase().includes(this.state.term.toLowerCase()) || f.category.toLowerCase().includes(this.state.term.toLowerCase())
})

  return(
    <div>
        <div className="overlay" onClick={()=>this.off()}>
          <div className="text">
          <h1 style={{fontSize:'50px', fontFamily: `'Kalam', cursive`}}>Need Help?</h1>
          <p>Create a mock-up of a new room by accessing a form through the "Design A Room" button</p>
          <p>Search for furniture pieces by color, material, or category and select the pieces you would like to add to your room.</p>
          <p>Drag the furniture around your mock-room until you are content with the design</p>
          <p>Double click on a piece of furniture to delete. And don't forget to save your furniture pieces!</p>
          </div>
        </div>
        <div style={{padding:"20px"}}>
          <Button basic color='violet' onClick={()=>this.on()} content='?' style={{float:'right'}}/>
        </div>
      <AllRooms rooms={this.state.rooms} getRoomId={this.getRoomId} getUserRoomFurniture={this.getUserRoomFurniture}/>
      <br />
      <Divider />
      <Button style={{marginLeft:'1%'}} className="create-room" basic color='violet' content='Design A Room' onClick={()=>this.roomFormToggle()}/>
      {this.state.createRoom ? <RoomForm addRoom={this.addRoom} />: null}
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
      <Button className="show-furniture" basic color='violet' style={{marginLeft:'1%'}} content='X' onClick={()=>this.furnitureToggle()}/>
      {this.state.showFurniture ?
        <div>
          <br />
          <Search style={{marginLeft:'1%'}} onSearchChange={this.handleSearch} open={false} />
          <br />
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
function mapStateToProps(reduxStore) {
  return {
    userId: reduxStore.usersReducer.user.id
  }
}
export default withAuth(connect(mapStateToProps)(RoomIndex));

import React, { Component } from 'react'
import Room from './Room';
import Draggable from 'react-draggable';
import { Button, Confirm } from 'semantic-ui-react'
import {Toast} from 'react-materialize'
import { connect } from 'react-redux'


class RoomContainer extends Component {

  state = {
    currentRoomFurniture: [],
    updatedFurniture: {},
    newRoomFurniture: [],
    open: false,
    confirm: false
  }

  handleDrag = (e, ui) => {
    // debugger
    let newFurnitureData;
    let updatedFurniture;
    // let foundFurniture = this.state.furniture.find(f => ui.node.classList[0])
     this.props.allFurniture.map(f => {
       if(ui.node.classList[0] === f.name) {
        //ui.node.parentElement.id DIDN'T WORK
        newFurnitureData = this.props.roomFurniture.map(rf=>{
          // console.log(rf)
          if (e.target.dataset.id == rf.id){
            let newRoomFurnitureObject = {...rf, x_coord: ui.x, y_coord: ui.y,}
            // debugger
            updatedFurniture = newRoomFurnitureObject
            return newRoomFurnitureObject
          } else {
            return rf
          }
        }) // end of interating over this.props.roomFurniture
      } // end of checking if furniture name matches node classList
    }) // end of iterating over this.props.allFurniture
    this.setState({
      currentRoomFurniture: newFurnitureData,
      updatedFurniture: updatedFurniture
    }, ()=>console.log(this.state.currentRoomFurniture))
  }


  handleDragForNewFurniture = (e, ui) => {
    // debugger
    let newFurnitureData;
    let updatedFurniture;
    // let foundFurniture = this.state.furniture.find(f => ui.node.classList[0])
     this.props.allFurniture.map(f => {
       if(ui.node.classList[0] === f.name) {
        //ui.node.parentElement.id DIDN'T WORK
        newFurnitureData = this.props.chosenFurniture.map(rf=>{
          console.log(rf)
          // debugger
          if (e.target.dataset.id == rf.id){
            let newRoomFurnitureObject = {...rf, x_coord: ui.x, y_coord: ui.y,}
            updatedFurniture = newRoomFurnitureObject
            // debugger
            return newRoomFurnitureObject
          } else {
            return rf
          }
        }) // end of interating over this.props.chosenFurniture
      } // end of checking if furniture name matches node classList
    }) // end of iterating over this.props.allFurniture
    this.setState({
      currentRoomFurniture: newFurnitureData,
      updatedFurniture: updatedFurniture
    }, ()=>console.log(this.state.currentRoomFurniture))
  }




//   mouseDown = (e, ui) => {
//
//   console.log("mouse down")
// }

// mouseUp = (e, ui) => {
// debugger
// console.log("mouse up")
// }

  updateFurniturePosition = () => {

      fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}/room_furniture/${this.state.updatedFurniture.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            room_furniture: {
              furniture_id: this.state.updatedFurniture.furniture_id,
              room_id: this.state.updatedFurniture.room_id,
              x_coord: this.state.updatedFurniture.x_coord,
              y_coord: this.state.updatedFurniture.y_coord
            }
          })
        })
        .then(res => res.json())
        .then(json => {

        })

        this.setState({
          updatedFurniture: {}
        })
    }

  handleDoubleClick = (event) => {
    // this.show()

    // if (this.state.confirm === true){
      // debugger
      event.target.remove()
      let roomFurnitureId = parseInt(event.target.dataset.id)
      fetch(`http://localhost:3000/api/v1/users/1/room_furniture/${roomFurnitureId}`, { method: 'DELETE' })
      this.setState({
        confirm: false
      })
    // }

    // debugger
  }

  show = () => {
    this.setState({ open: true })



  }

  handleConfirm = () => {
    this.setState({ open: false, confirm: true })

  }
  handleCancel = () => this.setState({ open: false })





saveMoved = (event) => {
  if(this.state.updatedFurniture.id !== undefined){
    window.Materialize.toast('Furniture Position Saved', 1000, 'orange rounded');
    this.updateFurniturePosition(event);
  } else{
    alert('No Furniture Selected.')
  }

}

// this.props.saveFurniturePiece(this.props.currentFurniture, this.props.currentRoom, 20, 30)}

saveNew = (event) => {

  if(this.props.currentFurniture !== ''){
    window.Materialize.toast('New Furniture Saved', 1000, 'orange rounded');
    this.props.saveFurniturePiece(this.props.currentFurniture, this.props.currentRoom, 20, 30);
  } else{
    alert('No Furniture Selected.')
  }

}




// findcurrentroom={this.props.findCurrentRoom(this.props.clickedRoomId)}
// state={
//   chosenFurniture: []
// }
//
// componentDidMount(){
//   this.setState({
//     chosenFurniture: [...this.state.chosenFurniture, this.props.clickedFurniture]
//   },()=>console.log(this.state.chosenFurniture))
// }


// {this.props.rooms.map(r => {
//   return <Room rooms={this.props.rooms} room={r} key={r.id} getRoomId={this.props.getRoomId}/>
// })}

  render(){

    // console.log(this.props);
    // console.log(this.state.currentFurniture);
    return(
      <div id="mock-room">

      {this.props.findCurrentRoom ? <h3 className="room-container-name">{this.props.findCurrentRoom.name}</h3> :null}
      <div className="mock-room parent" style={{border:this.props.findCurrentRoom ? "1px solid black":null,width:this.props.findCurrentRoom?`${(this.props.findCurrentRoom.dimension1)*40}px`:null,height:this.props.findCurrentRoom?`${(this.props.findCurrentRoom.dimension2)*40}px`:null,margin:'auto',position:"relative"}}>
        {this.props.roomFurniture ?
          this.props.roomFurniture.map(rf=> { return this.props.allFurniture.map(f => {
            if (f.id === rf.furniture_id){
                return <Draggable
                          key={rf.id}
                          defaultClassName={`${f.name}`}
                          onDrag={this.handleDrag}
                          onMouseDown={this.mouseDown}
                          onMouseUp={this.mouseUp}
                          bounds="parent"
                          axis="both"
                          handle={`.${f.name}`}
                          defaultPosition={{x: rf.x_coord, y: rf.y_coord}}
                          scale={1}
                        >

                          <img
                            data-id={`${rf.id}`}
                            style={{position:"absolute"}}
                            src={`./images/furniture_sketches/${f.img_sketch}`}
                            alt={f.name}
                            onDoubleClick={this.handleDoubleClick}
                          />




                      </Draggable>
            }//end if statement
          })//end of allFurniture map

        }) : null }

        <Confirm
          open={this.state.open}
          cancelButton='Never mind'
          confirmButton="Let's do it"
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />

        {this.props.findCurrentFurniture ? <Draggable
                          defaultClassName={`${this.props.findCurrentFurniture.name}`}
                          onDrag={this.handleDragForNewFurniture}
                          bounds="parent"
                          axis="both"
                          handle={`.${this.props.findCurrentFurniture.name}`}
                          defaultPosition={{x: 0, y: 0}}
                          scale={1}
                          >

                          <img data-id={this.props.chosenFurniture[0].id} style={{position:'absolute'}}src={`./images/furniture_sketches/${this.props.findCurrentFurniture.img_sketch}`} alt={this.props.findCurrentFurniture.name} onDoubleClick={this.handleDoubleClick}/>


                        </Draggable> : null}




      </div>

      {this.props.findCurrentRoom?<Button basic color='violet' content='Save Moved Furniture Piece' onClick={this.saveMoved} />:null}

    { /* {this.props.findCurrentRoom && this.state.updatedFurniture ? <Button basic color='violet' content='Save Moved Furniture Piece' onClick={this.updateFurniturePosition} />:null}*/}
      {this.props.findCurrentRoom ? <Button basic color='violet' content='Save New Furniture Piece' onClick={this.saveNew} /> :null}



      </div>

    )

  }

}

function mapStateToProps(reduxStore) {
  console.log(reduxStore)
  return {
    userId: reduxStore.usersReducer.user.id
  }
}

export default connect(mapStateToProps)(RoomContainer);

import React, { Component } from 'react'

import Room from './Room';
import Draggable from 'react-draggable';


class RoomContainer extends Component {

  state = {
    realFurniture: [],
    updatedFurniture: {}
  }

  handleDrag = (e, ui) => {
    let newFurnitureData;
    let updatedFurniture;
    // let foundFurniture = this.state.furniture.find(f => ui.node.classList[0])
     this.props.allFurniture.map(f => {
       if(ui.node.classList[0] === f.name) {
        //ui.node.parentElement.id DIDN'T WORK
        newFurnitureData = this.props.roomFurniture.map(rf=>{
          if (e.target.dataset.id == rf.id){
            let newRoomFurnitureObject = {...rf, x_coord: ui.x, y_coord: ui.y,}
            updatedFurniture = newRoomFurnitureObject
            return newRoomFurnitureObject
          } else {
            return rf
          }
        }) // end of interating over this.props.roomFurniture
      } // end of checking if furniture name matches node classList
    }) // end of iterating over this.props.allFurniture
    this.setState({
      realFurniture: newFurnitureData,
      updatedFurniture: updatedFurniture
     }, ()=>console.log(this.state.realFurniture))
  }

  mouseDown = (e, ui) => {

  console.log("mouse down")
}

mouseUp = (e, ui) => {
debugger
console.log("mouse up")
}

  updateFurniturePosition = () => {
    fetch(`http://localhost:3000/api/v1/users/1/room_furniture/${this.state.updatedFurniture.id}`, {
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
      <div>
      <h1>RoomContainer</h1>
      <h3>Mock Room</h3>
      <div className="mock-room parent" style={{border:"1px solid black",width:this.props.findCurrentRoom?`${this.props.findCurrentRoom.dimension1}px`:null,height:this.props.findCurrentRoom?`${this.props.findCurrentRoom.dimension2}px`:null,margin:'auto',position:"relative"}}>
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
                          <img data-id={`${rf.id}`} src={`./images/furniture_sketches/${f.img_sketch}`} alt={f.name}/>
                      </Draggable>
            }//end if statement
          })//end of allFurniture map

        }) : null }

        {this.props.findCurrentFurniture ? <Draggable
                        defaultClassName={`${this.props.findCurrentFurniture.name}`}
                        onDrag={this.handleDrag}
                        bounds="parent"
                        axis="both"
                        handle={`.${this.props.findCurrentFurniture.name}`}
                        defaultPosition={{x: 0, y: 0}}
                        scale={1}
                        >

                          <img src={`./images/furniture_sketches/${this.props.findCurrentFurniture.img_sketch}`} alt={this.props.findCurrentFurniture.name}/>

                      </Draggable> : null}



      </div>
      <button onClick={this.updateFurniturePosition}>Save Moved Furniture Piece</button>
       <button onClick={()=>this.props.saveFurniturePiece(this.props.currentFurniture, this.props.currentRoom, 20, 30)}>Save New Furniture Piece</button>

      </div>

    )

  }







}

export default RoomContainer

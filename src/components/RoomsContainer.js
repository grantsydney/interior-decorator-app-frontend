import React, { Component } from 'react'

import Room from './Room';
import Draggable from 'react-draggable';


class RoomContainer extends Component {


  // state={
  //   currentFurniture: []
  // }

  state = {
    furniture: [
      {name: "Chair",
      deltaPosition: {
        x: 0, y: 0
      }
    }],
    realFurniture: [],
    updatedFurniture: {}
  }

  handleDrag = (e, ui) => {
    // debugger
    let newFurnitureData;
    let updatedFurniture;
    // let foundFurniture = this.state.furniture.find(f => ui.node.classList[0])
     this.props.allFurniture.map(f => {
       if(ui.node.classList[0] === f.name) {
        //ui.node.parentElement.id DIDN'T WORK
        // console.log("props furniture", this.props.roomFurniture)
        newFurnitureData = this.props.roomFurniture.map(rf=>{
          // debugger
          if (e.target.dataset.id == rf.id){
            // debugger
            // console.log("deltaX is: ", )
            // console.log("deltaY is: ", )
            // console.log("-----")

            let newRoomFurnitureObject = {...rf, x_coord: ui.x, y_coord: ui.y,}
            updatedFurniture = newRoomFurnitureObject
            return newRoomFurnitureObject
          } else {
            return rf
          }
        }) // end of interating over this.props.roomFurniture
          // console.log("newFurnitureData is: ", newFurnitureData)
          // this.setState({ realFurniture: newFurnitureData }, ()=>console.log(this.state.realFurniture))
      } // end of checking if furniture name matches node classList
    }) // end of iterating over this.props.allFurniture


    // console.log("newFurDa is: ", newFurnitureData)
    // console.log("updatedFurniture is", updatedFurniture)
    this.setState({
      realFurniture: newFurnitureData,
      updatedFurniture: updatedFurniture
     }, ()=>console.log(this.state.realFurniture))
    // if (updatedFurniture) {
    //   fetch(`http://localhost:3000/api/v1/users/1/room_furniture/${updatedFurniture.id}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       furniture_id: updatedFurniture.furniture_id,
    //       room_id: updatedFurniture.room_id,
    //       x_coord: updatedFurniture.x_coord,
    //       y_coord: updatedFurniture.y_coord
    //     })
    //   })
    //   .then(res => res.json())
    //   .then(json => {
    //     // debugger
    //   })
    // }
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
        // debugger
        console.log("hi sydney, im sorry i yelled @ u", json)
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
          this.props.roomFurniture.map(rf=> { return this.props.allFurniture.map(f => { if (f.id === rf.furniture_id){

                return <Draggable


                                key={rf.id}
                                defaultClassName={`${f.name}`}
                                onDrag={this.handleDrag}
                                bounds="parent"
                                axis="both"
                                handle={`.${f.name}`}
                                defaultPosition={{x: rf.x_coord, y: rf.y_coord}}
                                scale={1}
                                >

                                  <img data-id={`${rf.id}`} src={`./images/furniture_sketches/${f.img_sketch}`} alt={f.name}/>

                              </Draggable>
              }
            })

        }) : null}

      </div>
      <button onClick={this.updateFurniturePosition}>Save</button>

      </div>

    )

  }







}

export default RoomContainer

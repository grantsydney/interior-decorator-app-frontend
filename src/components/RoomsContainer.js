import React, { Component } from 'react'

import Room from './Room';
import Draggable from 'react-draggable';


class RoomContainer extends Component {


  // state={
  //   currentFurniture: []
  // }

  state={
    furniture: [
      {
        name: "random-light",
        deltaPosition: {
          x: 0, y: 0
        }
      },
      {
        name: "saarinen-round-dining-table",
        deltaPosition: {
          x: 0, y: 0
        }
      },
    {  name: "Chair",
      deltaPosition: {
        x: 0, y: 0
      }}
    ]
  }

  handleDrag = (e, ui) => {
    // debugger
    // let foundFurniture = this.state.furniture.find(f => ui.node.classList[0])
    const newFurnitureData = this.state.furniture.map(f => {

      if(ui.node.parentElement.id === f.name){

        return {...f, deltaPosition: {
          x: f.deltaPosition.x + ui.deltaX,
          y: f.deltaPosition.y + ui.deltaY,
          }
        }
      } return f
    })
    // console.log("state is: ", this.state.furniture)
    // debugger
    this.setState({ furniture: newFurnitureData })

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
      {this.props.findCurrentFurniture ? <Draggable
                    defaultClassName={`${this.props.findCurrentFurniture.name}`}
                   onDrag={this.handleDrag}
                      bounds="parent"
                      axis="both"
                      handle={`.${this.props.findCurrentFurniture.name}`}
                      defaultPosition={{x: 0, y: 0}}
                      scale={1}
                      onStart={this.handleStart}
                      onDrag={this.handleDrag}
                      onStop={this.handleStop}
                      >

                        <img src={`./images/furniture_sketches/${this.props.findCurrentFurniture.img_sketch}`} alt={this.props.findCurrentFurniture.name}/>

                    </Draggable> : null}

      </div>
      </div>

    )

  }







}

export default RoomContainer

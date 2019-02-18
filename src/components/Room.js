import React, { Component } from 'react'

class Room extends Component {

render() {
  return(
    <div>
      <h1>Room</h1>
      <h3>{this.props.room.name}</h3>
      <div>
      {this.props.room.furnitures.map(f=>{
        return <div key={f.id}>

          <p>{f.name}</p>
          <p>description: {f.description}</p>
          <p>color: {f.color}</p>
          <p>img: <img src={`./images/furniture/${f.img}`} alt=""/></p>

          <p>img_sketch: <img src={`./images/furniture_sketches/${f.img_sketch}`} alt=""/></p>
          <p>dimension1: {f.dimension1}</p>
          <p>dimension2: {f.dimension2}</p>
        </div>

      })}

<<<<<<< HEAD

      </div>

=======
      </div>
>>>>>>> 00189701ab76921cc1f4e53629e0cf1030bbafe4
    </div>
  )
}

<<<<<<< HEAD
=======

>>>>>>> 00189701ab76921cc1f4e53629e0cf1030bbafe4
}

export default Room;

import React from "react";
// import { Card } from "semantic-ui-react";
import { Form } from 'semantic-ui-react'



class RoomForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      dimension1: '',
      dimension2: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, ()=>console.log(this.state.dimension2))
  }

  handleSubmit = (event) => {
  event.preventDefault()

  if(this.state.name == ''){
    alert('Please Fill Out Form.')
  } else{

    fetch('http://localhost:3000/api/v1/users/1/rooms', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        dimension1: this.state.dimension1,
        dimension2: this.state.dimension2

      })
    })
    .then(r=>r.json())
    .then(r => this.props.addRoom(r))

    //get form to go back to blank input fields

    this.setState({
      name: '',
      dimension1: '',
      dimension2: ''
    })
  }


  }

  // console.log(props);
  render(){
    return (
      <div className="room-form">


<br/>

     <Form widths='equal' onSubmit={this.handleSubmit} onChange={this.handleChange}>
      <Form.Group widths="equal">
      <Form.Input fluid placeholder="Room Name" name="name" value={this.state.name} />
      <Form.Input fluid placeholder="Width (ft)" name="dimension1" value={this.state.dimension1} />
      <Form.Input fluid placeholder="Length (ft)" name="dimension2" value={this.state.dimension2} />
      </Form.Group>
      <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    )

  }
}

export default RoomForm;

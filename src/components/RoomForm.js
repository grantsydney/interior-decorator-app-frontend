import React from "react";
import { Card } from "semantic-ui-react";
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

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

  fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}/rooms`,
     {
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

  // console.log(props);
  render(){
    return (
      <div>
      <h1>RoomForm</h1>
      <h2>Create a New Room!</h2>
      <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
      <Form.Group widths="equal">
      <Form.Input fluid label="Name" placeholder="Name" name="name" />
      <Form.Input fluid label="dimension1" placeholder="dimension1" name="dimension1" />
      <Form.Input fluid label="dimension2" placeholder="dimension2" name="dimension2" />
      </Form.Group>
      <Form.Button>Submit</Form.Button>
      </Form>
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
export default connect(mapStateToProps)(RoomForm);

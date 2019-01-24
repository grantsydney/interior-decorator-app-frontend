import React from "react";
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
import {Row, Input} from 'react-materialize'



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
    }, ()=>console.log(this.state.dimension1))
  }

  handleSubmit = (event) => {
  event.preventDefault()
  debugger
  if(this.state.name === '' || this.state.dimension1 === '' || this.state.dimension2 === ''){
    alert('Please Fill Out Form.')
  } else{

    fetch(`http://localhost:3000/api/v1/users/${this.props.userId}/rooms`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
      body: JSON.stringify({
        name: this.state.name,
        dimension1: this.state.dimension1,
        dimension2: this.state.dimension2

      })
    })
    .then(r=>r.json())
    .then(r => {
      console.log("props are: ", this.props)
      this.props.addRoom(r)
    })

    //get form to go back to blank input fields

    this.setState({
      name: '',
      dimension1: '',
      dimension2: ''
    })
  }


  }



       // <Form widths='equal' onSubmit={this.handleSubmit} onChange={this.handleChange}>
       //  <Form.Group widths="equal">
       //  <Form.Input fluid placeholder="Room Name" name="name" value={this.state.name} />
       //  <Form.Input fluid placeholder="Width (ft)" name="dimension1" value={this.state.dimension1} />
       //  <Form.Input fluid placeholder="Length (ft)" name="dimension2" value={this.state.dimension2} />
       //  </Form.Group>
       //  <Form.Button basic color='violet'>Submit</Form.Button>
       //  </Form>

  // console.log(props);
  render(){
    // console.log("props are: ", this.props)
    // debugger
    return (
      <div className="room-form">
      <br/>
      <form onChange={this.handleChange} onSubmit={this.handleSubmit} >
        <Row style={{marginLeft:'17%'}}>
          <Input s={3} label="Room Name" name="name" value={this.state.name}/>
          <Input s={3} label="Width (ft)" name="dimension1" value={this.state.dimension1}/>
          <Input s={3} label="Length (ft)" name="dimension2" value={this.state.dimension2}/>
        </Row>
        <Button style={{marginLeft:'42%'}} type="submit" basic color='violet'>Submit</Button>

      </form>





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

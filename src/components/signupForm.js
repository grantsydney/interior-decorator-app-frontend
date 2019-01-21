import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { signupUser } from '../actions/user'
// import { Button, Form, Segment, Message } from 'semantic-ui-react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class SignupForm extends React.Component {

  state = { name: '', username: '', password: '', isSignedUp: false }

  handleChange = (e, semanticInputData) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  handleSignupSubmit = (e) => {
    this.props.signupUser(this.state.name, this.state.username, this.state.password) //comes from mapDispatchToProps
    this.setState({ isSignedUp: true }) //reset form to initial state
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
      <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div >
      body > div > > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Signup
        </Header>
        <Form
        loading={this.props.authenticatingUser}
        error={this.props.failedLogin}
        size='large'
        onSubmit={this.handleSignupSubmit}
        size="mini"
        key="mini">
        <Message error header={this.props.failedLogin ? this.props.error : null} />
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left'
              label="name"
              placeholder="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              />
            <Form.Input fluid icon='user' iconPosition='left'
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
              />
            <Form.Input
              type="password"
              label="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
            />

            <Button color='teal' fluid size='large' type="submit">
              Signup
            </Button>
          </Segment>
          Have an Account? <a href='/login'>Login</a>
        </Form>
      </Grid.Column>
    </Grid>
  </div>

    )
  }
}

const mapStateToProps = ({ usersReducer: { authenticatingUser, failedLogin, error, loggedIn } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
})

{/*
  <Segment>
    <h1>Signup</h1>
    <Form
      onSubmit={this.handleSignupSubmit}
      size="mini"
      key="mini"
      loading={this.props.authenticatingUser}
      error={this.props.failedLogin}
    >
      <Message error header={this.props.failedLogin ? this.props.error : null} />
      <Form.Group widths="equal">
        <Form.Input
          label="username"
          placeholder="username"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <Form.Input
          type="password"
          label="password"
          placeholder="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
      </Form.Group>
      <Button type="submit">Signup</Button>
    </Form>
    login? <a href='/login'>Login</a>
  </Segment>
  */}


export default withRouter(connect(mapStateToProps, { signupUser })(SignupForm))

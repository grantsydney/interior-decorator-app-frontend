import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../actions/user'
// import { Button, Form, Segment, Message } from 'semantic-ui-react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class LoginForm extends React.Component {

  state = { username: '', password: '' }

  handleChange = (e, semanticInputData) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = (e) => {
    this.props.loginUser(this.state.username, this.state.password) //comes from mapDispatchToProps
    this.setState({ username: '', password: '' }) //reset form to initial state
  }

  render() {
    console.log('%c LOGIN FORM PROPS: ', 'color: red', this.props)
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
          Log-in to your account
        </Header>
        <Form onSubmit={this.handleLoginSubmit}
        size="mini"
        key="mini"
        loading={this.props.authenticatingUser}
        error={this.props.failedLogin}
        size='large'>
        <Message error header={this.props.failedLogin ? this.props.error : null} />
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left'
              label="username"
              placeholder="Username"
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
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/signup'>Sign Up</a>
        </Message>
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

{/*<Segment>
  <Form
    onSubmit={this.handleLoginSubmit}
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
    <Button type="submit">Login</Button>
  </Form>
  Create an account? <a href='/signup'>Signup</a>
</Segment>*/}


export default withRouter(connect(mapStateToProps, { loginUser })(LoginForm))

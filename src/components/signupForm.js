import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { signupUser } from '../actions/user'
import { Button, Form, Segment, Message } from 'semantic-ui-react'

class SignupForm extends React.Component {

  state = { username: '', password: '', isSignedUp: false }

  handleChange = (e, semanticInputData) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  handleSignupSubmit = (e) => {
    this.props.signupUser(this.state.username, this.state.password) //comes from mapDispatchToProps
    this.setState({ isSignedUp: true }) //reset form to initial state
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
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
    )
  }
}

const mapStateToProps = ({ usersReducer: { authenticatingUser, failedLogin, error, loggedIn } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
})

export default withRouter(connect(mapStateToProps, { signupUser })(SignupForm))

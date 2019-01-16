import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../actions/user'
import { Button, Form, Segment, Message } from 'semantic-ui-react'

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
      <Segment>
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

export default withRouter(connect(mapStateToProps, { loginUser })(LoginForm))

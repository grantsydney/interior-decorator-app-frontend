import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../actions/user'
// import { Button, Form, Segment, Message } from 'semantic-ui-react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'





class LoginForm extends React.Component {

  state = { username: '', password: '' }

sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(./images/cabinet-ceiling-clean-1669799.jpg)`
  };

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

<div className="login-background" style={{height:'1300px', backgroundImage: `url(./images/cabinet-ceiling-clean-1669799.jpg`, backgroundRepeat: 'no-repeat', backgroundPosition:'center',backgroundSize: 'cover'}}>

  <h1 className="app-title">EzDzine</h1>
      <div className='login-form'>
    <style>{`
      body > div,
      body > div >
      body > div > > div.login-form {
        height: 100%;
      }
    `}</style>
  <Grid textAlign='center' style={{ height: '150%'}} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 550 }}>
        {/*<Header style={{marginTop:'100%'}} as='h2' color='teal' textAlign='center'>
          Log-in to your account
        </Header>*/}
        <Form style={{position:'absolute', top:485,fontFamily:`'Courgette', cursive`}} onSubmit={this.handleLoginSubmit}
        size="mini"
        key="mini"
        loading={this.props.authenticatingUser}
        error={this.props.failedLogin}
        size='large'>
        <Message error header={this.props.failedLogin ? this.props.error : null} />
          <Segment stacked style={{width:'450%', height:'300px'}}>
            <br/>
            <Form.Input fluid icon='user' iconPosition='left'
              placeholder="Username"
              label="username"
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
              style={{marginBottom:'20px'}}
            />

            <Button basic color='violet' size='large' type="submit">
              Login
            </Button>

          </Segment>
        </Form>
        <span style={{fontSize:'1.5em', color:'#565556', position:'absolute', top:805, left:180}}>
          New to us? <a style={{color:'#565556'}} href='/signup'>Sign Up</a>
      </span>
      </Grid.Column>
    </Grid>
  </div>
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

export default withRouter(connect(mapStateToProps, { loginUser })(LoginForm))

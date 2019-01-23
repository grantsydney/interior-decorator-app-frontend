import React, { Fragment } from 'react';
import './App.css';
import RoomIndex from './components/RoomIndex'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import SignupForm from './components/signupForm'


const App = props => {
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />

        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/RoomIndex" component={RoomIndex} />

        <Route component={NotFound} />
      </Switch>
    </Fragment>
  )
}

export default withRouter(App)

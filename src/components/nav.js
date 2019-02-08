import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import {logOut} from '../actions/user'



const Nav = (props) => {

  const handleClick = () => {
    props.history.push('./login')
    props.logOut()
  }

  console.log(props)
  return (
   <Menu pointing secondary>
    {props.loggedIn ? (
      <Fragment>
        <Menu.Item as={NavLink} to="/profile" name="Profile" />
        <Menu.Menu position="right"><button onClick={()=>handleClick()}>logout</button>
        </Menu.Menu>
      </Fragment>
    ) : (
      <Menu.Item as={NavLink} to="/login" name="Login"  />
    )}
  </Menu>
 )
}

const mapStateToProps = state => {
  return(
    {loggedIn: state.usersReducer.loggedIn,
    pathname:state.location}
  )
}

const mapDispatchToProps = (dispatch) => {
  console.log("kjhskjfhkshfjse", dispatch)
  return {
    logOut: () => dispatch(logOut())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))

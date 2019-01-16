import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import {logOut} from '../actions/user'






// const Nav = ({ user: { loggedIn }, location: { pathname }, logOut }) => {
//
//   const handleClick = () => {
//     logOut()
//   }
//
//   return (
//     <Menu pointing secondary>
//       {loggedIn ? (
//         <Fragment>
//           <Menu.Item as={NavLink} to="/profile" name="Profile" active={pathname === '/profile'} />
//           <Menu.Menu position="right"><button onClick={()=>handleClick()}>logout</button>
//             {/* TODO: logout */}
//             {/* <Menu.Item to="/logout" name="Logout" onClick={logout} /> */}
//           </Menu.Menu>
//         </Fragment>
//       ) : (
//         <Menu.Item as={NavLink} to="/login" name="Login" active={pathname === '/login'} />
//       )}
//     </Menu>
//   )
// }
//
// const mapStateToProps = ({ usersReducer: user }) => ({ user })
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     logOut: () => dispatch(logOut())
//   }
// }
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
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
          {/* TODO: logout */}
          {/* <Menu.Item to="/logout" name="Logout" onClick={logout} /> */}
        </Menu.Menu>
      </Fragment>
    ) : (
      <Menu.Item as={NavLink} to="/login" name="Login"  />
    )}
  </Menu>
 )
}
// { user: { loggedIn }, location: { pathname } }
const mapStateToProps = state => {
  // debugger
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

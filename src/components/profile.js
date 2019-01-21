import React from 'react'
import { connect } from 'react-redux'
import { Card} from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

// props: { user: { avatar: 'url', username: 'Chandler Bing', bio: 'bio' } }
const Profile = ({ name}) => (
  <h1>Welcome, {name}</h1>


)

const mapStateToProps = ({ usersReducer: { user: { name } } }) => ({
  name
})


export default withAuth(connect(mapStateToProps)(Profile))

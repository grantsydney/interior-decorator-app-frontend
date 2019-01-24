import React from 'react'
import { connect } from 'react-redux'
import { Card} from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

// props: { user: { avatar: 'url', username: 'Chandler Bing', bio: 'bio' } }
const Profile = ({ name}) => (

  <div className="profile-background" style={{height:'1200px', backgroundImage: `url(./images/close-up-colors-craftsmanship-1573806.jpg`, backgroundRepeat: 'no-repeat', backgroundPosition:'center',backgroundSize: 'cover'}}>

    <h1>Welcome, {name}</h1>
  </div>
)

const mapStateToProps = ({ usersReducer: { user: { name } } }) => ({
  name
})


export default withAuth(connect(mapStateToProps)(Profile))

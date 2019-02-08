import React from 'react'
import { connect } from 'react-redux'
import { Card} from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'


const Profile = ({ username}) => (
  <Card>
    <Card.Content>
      <Card.Header>Username: {username}</Card.Header>

    </Card.Content>
  </Card>
)

const mapStateToProps = ({ usersReducer: { user: { username } } }) => ({
  username
})


export default withAuth(connect(mapStateToProps)(Profile))

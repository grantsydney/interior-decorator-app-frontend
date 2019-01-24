import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

// props: { user: { avatar: 'url', username: 'Chandler Bing', bio: 'bio' } }
const Profile = ({ name}) => (

  <div className="profile-background" style={{height:'1200px', backgroundImage: `url(./images/close-up-colors-craftsmanship-1573806.jpg`, backgroundRepeat: 'no-repeat', backgroundPosition:'center',backgroundSize: 'cover'}}>

    <img src={`../images/logo.png`}/>
    <h1>Welcome, {name}</h1>
    <p>App Description</p>

    <div style={{marginTop:'25%'}}>

<Card.Group centered>
      <Card raised color='violet'>
     <Image src={`../images/inspiration-sites/house-beautiful.png`} />
     <Card.Content>
       <Card.Header style={{color:'black', textAlign:'center'}}><a href='https://www.housebeautiful.com/design-inspiration' target="_blank">
         House Beautiful
       </a></Card.Header>
     </Card.Content>
   </Card>
   <Card raised color='violet'>
  <Image src={`../images/inspiration-sites/architectural-digest.png`} />
  <Card.Content>
    <Card.Header style={{color:'black', textAlign:'center'}}><a href='https://www.architecturaldigest.com/gallery/modern-design-inspiration' target="_blank">
      Architectural Digest
    </a></Card.Header>
  </Card.Content>
</Card>
<Card raised color='violet'>
<Image src={`../images/inspiration-sites/pintrest.png`} />
<Card.Content>
 <Card.Header style={{color:'black', textAlign:'center'}}><a href='https://www.pinterest.com/moderncoop/mid-century-modern-inspiration/' target="_blank">
   Pintrest
 </a></Card.Header>
</Card.Content>
</Card>
<Card raised color='violet'>
<Image src={`../images/inspiration-sites/elle-decor.png`} />
<Card.Content>
 <Card.Header style={{color:'black', textAlign:'center'}}><a href='https://www.elledecor.com/design-decorate/room-ideas/g84/midcentury-living-rooms/' target="_blank">
   Elle Decor
 </a></Card.Header>
</Card.Content>
</Card>
<Card raised color='violet'>
<Image src={`../images/inspiration-sites/houzz.png`} />
<Card.Content>
 <Card.Header style={{color:'black', textAlign:'center'}}><a href='https://www.houzz.com/photos/modern/bedroom' target="_blank">
   Houzz
 </a></Card.Header>
</Card.Content>
</Card>
</Card.Group>
  </div>



  </div>
)

const mapStateToProps = ({ usersReducer: { user: { name } } }) => ({
  name
})


export default withAuth(connect(mapStateToProps)(Profile))

import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'
import Typing from 'react-typing-animation';

const Profile = ({ name}) => (

  <div className="profile-background" style={{height:'1200px', backgroundImage: `url(./images/close-up-colors-craftsmanship-1573806.jpg`, backgroundRepeat: 'no-repeat', backgroundPosition:'center',backgroundSize: 'cover'}}>

<<<<<<< HEAD
=======

const Profile = ({ username}) => (
  <Card>
    <Card.Content>
      <Card.Header>Username: {username}</Card.Header>
>>>>>>> 00189701ab76921cc1f4e53629e0cf1030bbafe4

    <h1 style={{fontFamily:`'Sarabun', sans-serif;`,fontSize:'3em',top:'5%'}}>Welcome, {name}</h1>
    <div className="profile-app-description" style={{marginLeft:'20%'}}>
      <Typing >
        <span speed={200} style={{fontFamily:`font-family: 'Courgette', cursive`}} className="typing-profile">decorate</span>
        <Typing.Backspace count={20} />
        <span style={{fontFamily:`'Courgette', cursive`}} speed={200} className="typing-profile">plan out</span>
        <Typing.Backspace count={20} />
        <span style={{fontFamily:`font-family: 'Courgette', cursive`}} speed={200} className="typing-profile">design.</span>
      </Typing>
      <br />
      <br /><br /><br /><br />
      <span>With <strong>EzDzine</strong>, the process of designing your room has never been so seamless.</span>
    </div>

    <p className="inspiration-board-header" style={{marginLeft:'10%',marginTop:'34%'}}>Inspiration</p>
    <div style={{marginTop:'30%'}}>
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

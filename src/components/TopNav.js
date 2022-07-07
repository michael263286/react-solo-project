import React from 'react'
import {Navbar, Container, Nav,} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


function TopNav() {

return(
<Navbar style={{backgroundColor: 'black'}} expand="lg">
  <Container >
    <Navbar.Brand href="/" style={{color: 'white'}}> <img
        src="https://i.pinimg.com/736x/fd/9b/82/fd9b8243e22fa3c6184c5e8323efe0d3.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> Top 75 NBA</Navbar.Brand>
    <Navbar.Toggle style={{color: 'white'}} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse border border-primary id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{color: 'white'}} as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link style={{color: 'white'}} as={NavLink} to="/starters">Your Team</Nav.Link>
        <Nav.Link style={{color: 'white'}} href="/accolades">Player Accolades</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default TopNav
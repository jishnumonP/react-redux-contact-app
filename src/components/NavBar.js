import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const NavBar = () => {
  
  return (
<Navbar bg="dark" expand="lg">
      <Container>
      <Link to='/react-redux-contact-app' style={{textDecoration: 'none'}}>
     <Navbar.Brand  style={{color:'#fff'}}>React Contact APP</Navbar.Brand>  </Link> 
        
      </Container>
    </Navbar>
  )
}

export default NavBar
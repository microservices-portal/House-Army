import React from 'react'
import { Navbar,Nav,Container,Row } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
  <Container>
    
    <a href="/" style={{textDecoration: "none"}}><Navbar.Brand >House Army</Navbar.Brand></a>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

        <a href="/cart" style={{textDecoration: "none"}}>
           <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
        </a>
        <a href="/login" style={{textDecoration: "none"}}>
            <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link>
        </a>
       <Row/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header;
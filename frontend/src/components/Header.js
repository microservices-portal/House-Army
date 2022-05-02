import React from 'react'
import { Navbar,Nav,Container,Row } from 'react-bootstrap'
 import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
  <Container>
    
    <LinkContainer to={"/"} style={{textDecoration: "none"}}><Navbar.Brand >House Army</Navbar.Brand></LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

        <LinkContainer to={"/cart"} style={{textDecoration: "none"}}>
           <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/login"} style={{textDecoration: "none"}}>
            <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link>
        </LinkContainer>
       <Row/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header;
import React, { Component } from 'react';
import{ Navbar, Nav, Button, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navibar.css';

export default class Navibar extends Component {
  render() {
    return (
      <>
    
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="logo">Shoppers^ Stop</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="navi" to='/'>Home</Link>
            <Link className="navi" to='/ourproducts'>Products</Link>
          </Nav>
          <Button variant="outline-info">
            <Link className="navi" to="/cart"><i className="fas fa-shopping-cart px-1"></i> 
             My Cart</Link>
            </Button>
          </Container>
        </Navbar>
      </>
    )
  }
}

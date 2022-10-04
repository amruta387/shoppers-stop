import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


export default class extends Component {
    render() {
        
        return (
        <Container>
            <div className="main">
            <div className="subdiv">
                <h2>Shop With Us</h2>
                <p>Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics.</p>
                <Button varient="outline-info" className="btn-shopnow">
                    <Link className="btn-shopnow" to='/ourproducts'>Shop Now</Link>
                </Button>
                </div>
            </div>
         
         </Container>
        )
    }
}

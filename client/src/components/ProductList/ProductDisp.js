import React, { Component } from 'react';
import {Col, Button} from'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {ProductConsumer} from '../../context';


export default class ProductDisp extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <Col  md={6} lg={3} className="productBox">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} className="img-container p-5" />
                    <Card.Body>
                        <ProductConsumer>
                         { value => (
                          <Button variant="dark" className="cart-btn"
                                  disabled={inCart ? true : false} 
                                  onClick={()=>value.addToCart(id)}>
                            
                            {inCart ? 
                            <span>Added </span>: 
                            <span><i className="fas fa-shopping-cart px-1" /> Add</span>
                            }
                         </Button> )}
                        </ProductConsumer>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue mb-0">
                            <span className="mr-1">{price} €</span>
                        </h5>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }
}

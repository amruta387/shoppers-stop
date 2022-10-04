import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartItems from './CartItems';
import {ProductConsumer} from '../../context';

export default class Cart extends Component {
    render() {
     
    return (
        <Container>
          <ProductConsumer>
            { value => {
                const {cart, cartTotal, clearCart} = value;
                if(cart.length > 0) {
                    return (
                       <> 
                        <h2 className="h-title">Your Cart</h2>
                        <Row className="">
                            <Col sm={2} className="text-center"><p>Products</p></Col>
                            <Col sm={2} className="text-center"><p>Product Name</p></Col>
                            <Col sm={2} className="text-center"><p>Price</p></Col>
                            <Col sm={2} className="text-center"><p>Quantity</p></Col>
                            <Col sm={2} className="text-center"><p>Remove</p></Col>
                            <Col sm={2} className="text-center"><p>Total</p></Col>
                        </Row>
                        <hr />
                        <Container>
                            {cart.map(item =>{
                                return  <CartItems key={item.id} item={item} value={value} />;
                            })}
                        </Container>
   
                        <Container>
                            <Row>
                                <Col sm={8} className="mt-2 ml-sm-5 ml-md-auto text-right">
                                    <Button href = "/ourproducts" variant="danger" className="mb-3" onClick={()=> clearCart()}>Clear Cart</Button>
                                    <h5><span className="text-title"> Total: € </span>{cartTotal}</h5>
                                </Col>
                            </Row>
                        </Container>
                    </>    
                    )
                } else{
                    return (
                        <Container>
                            <h2 className="h-title">Cart is Empty</h2>
                        </Container>
                    )
                }
            }}
          </ProductConsumer>
        </Container>
    )}
}

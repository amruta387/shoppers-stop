import React, { Component } from 'react';
import {Container, Row} from'react-bootstrap';
import ProductDisp from './ProductDisp';
import { ProductConsumer } from '../../context';

export default class ProductList extends Component {

render(){
   
    return (
    <>
      <Container> 
        <h2 className="h-title">Our Products</h2>
        <Row>
        <ProductConsumer>
            {value=>{
                return value.products.map(product => {
                    return <ProductDisp key={product.id} product= {product}  />;
                })
                
            }}
         </ProductConsumer>
        </Row>
      </Container>
    </>
    );
  }
  
}


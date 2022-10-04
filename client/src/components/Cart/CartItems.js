import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function CartItems({item,value}) {
        const {id, title, img, price, total, count} = item;
        const {increment, decrement, removeItem} = value;

        return (
            <Row className="my-2 text-center">
                <Col sm={2} className="text-center">
                    <Image src={img} style={{width:'5rem', height: '5rem'}} /> 
                </Col>

                <Col sm={2} className="text-center font-weight-bold">
                    <span className="d-lg-none">Product: </span>{title}
                </Col>

                <Col sm={2} className="text-center font-weight-bold">
                    <span className="d-lg-none">Price:</span>€ {price}
                </Col>

                <Col sm={2} className="text-center my-2 my-lg-0 ">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                                <i className="far fa-minus-square"></i></span>
                            <strong> {count} </strong>
                            <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
                                <i className="far fa-plus-square"></i></span>
                        </div>
                    </div>
                </Col>
                
                <Col sm={2} className="text-center">
                    <Button variant="danger" onClick={()=>removeItem(id)}>
                        <i className="fas fa-trash-alt"></i>
                    </Button>
                </Col>

                <Col sm={2} className="text-center  font-weight-bold">
                    Item Total : € {total}
                </Col>
            </Row>
        )
    }


import React from 'react';

import { Form, Col, Row, Button } from 'react-bootstrap';

const { Item } = Form;

function AvailablePoolAllocation() {
   

    return (
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="ClientName">
                        <Form.Label>Client Name<span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Enter Client Name" />

                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="clientManager">
                        <Form.Label>Client Manager Name<span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Enter Client Manager Name" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="clientPartner">
                        <Form.Label>Client Partner<span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Enter Client Partner Name" />
                    </Form.Group>
                </Col>
            </Row>
            
        </Form>
    );
}

export default AvailablePoolAllocation;

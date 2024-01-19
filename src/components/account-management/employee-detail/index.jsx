import React from 'react'
import {  Form, Row, Col } from 'react-bootstrap';

function EmployeeDetailModal() {
    return (
        <div>
            <Form>
                <Row>

                    <Col md={6}>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="midName">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="lastName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="employeeId">
                            <Form.Label>Employee Id</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="addressLine1">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="addressLine2">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="zipcode">
                            <Form.Label>Zipcode</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="visaStatus">
                            <Form.Label>Visa Status</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="citizenship">
                            <Form.Label>citizenship</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="employmentNature">
                            <Form.Label>Employment Nature</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="contractingRate">
                            <Form.Label>Contracting Rate</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="employmentCompany">
                            <Form.Label>Employment Company</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="workingRemote">
                            <Form.Label>Working Remote</Form.Label>
                            <Form.Control type="text" readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="employmentStartDate">
                            <Form.Label>Employment Start Date</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="role">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="designation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="skill">
                            <Form.Label>Skill</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="employmentStatus">
                            <Form.Label>Employment Status</Form.Label>
                            <Form.Control type="text"  readOnly />
                        </Form.Group>
                    </Col>
                </Row>

            </Form>
        </div>
    )
}

export default EmployeeDetailModal;

import React, { Component, useState } from 'react'
import { Table, Modal, Button, Form, Row, Col } from 'react-bootstrap';

export default function RecentOnboardingEmployeeTable({ recentOnboardingData }) {

    const [selectedRow, setSelectedRow] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleRowClick = (index) => {
        setSelectedRow(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <>
            <Table striped bordered hover className="table-responsive ctm-border-radius text-center">
                <thead>
                    <tr>
                        <th>S. N.</th>
                        <th>Employee Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Phone Number</th>
                        <th>State</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {recentOnboardingData && recentOnboardingData.map((data, index) => (
                        // <tr key={index}>
                        <tr key={index} onClick={() => handleRowClick(index)}>
                                <td>{index + 1}</td>
                                <td>{data.employeeId ? data.employeeId : '--'}</td>
                                <td>{data.firstName ? data.firstName : '--'}</td>
                                {/* <td>{data.middleName ? data.middleName : '--'}</td> */}
                                <td>{data.lastName ? data.lastName : '--'}</td>
                                <td>{data.employmentStartDate ? data.employmentStartDate : '--'}</td>
                                <td>{data.phoneNumber ? data.phoneNumber : '--'}</td>
                                <td>{data.state ? data.state : '--'}</td>
                                <td>{data.city ? data.city : '--'}</td>
                            </tr>
                            ))
                    }
                        </tbody >
            </Table >

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>

                            <Col md={6}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.firstName || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="midName">
                                    <Form.Label>Middle Name</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.middleName || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="lastName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.lastName || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="employeeId">
                                    <Form.Label>Employee Id</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.employeeId || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="phoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.phoneNumber || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="country">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.country || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="state">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.state || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.city || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="addressLine1">
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.addressLine1 || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="addressLine2">
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.addressLine2 || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="zipcode">
                                    <Form.Label>Zipcode</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.zipCode || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="visaStatus">
                                    <Form.Label>Visa Status</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.visaStatus || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="citizenship">
                                    <Form.Label>citizenship</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.citizenship || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="employmentNature">
                                    <Form.Label>Employment Nature</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.employmentNature || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="contractingRate">
                                    <Form.Label>Contracting Rate</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.contractingRate || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="employmentCompany">
                                    <Form.Label>Employment Company</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.employmentCompany || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="workingRemote">
                                    <Form.Label>Working Remote</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.workingRemote || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="employmentStartDate">
                                    <Form.Label>Employment Start Date</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.employmentStartDate || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="role">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.role || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="designation">
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.designation || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="skill">
                                    <Form.Label>Skill</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.skill || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="employmentStatus">
                                    <Form.Label>Employment Status</Form.Label>
                                    <Form.Control type="text" value={recentOnboardingData[selectedRow]?.employmentStatus || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};



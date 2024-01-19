import React, { Component, useState } from 'react'
import { Table, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function onboardingApprovalTable({ tableData, tabPageName }) {

    const [selectedRow, setSelectedRow] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const [month, day, year] = new Date(dateString).toLocaleDateString('en-US', options).split(' ');
        const monthAbbreviation = month.slice(0, 3);
        const formattedDate = `${year}-${monthAbbreviation}-${day}`;
        return formattedDate.replace(/,\s*$/, '');
    };

    const handleRowClick = (index) => {
        setSelectedRow(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <>
                <Table striped bordered hover className="table-responsive ctm-border-radius text-center">
                    <thead>
                        <tr>
                            <th>S. N.</th>
                            {tabPageName && tabPageName === 'onboardingApproval' && <th>Action</th>}
                            <th>Employee Id</th>
                            <th>First Name</th>
                            {/* <th>Middle Name</th> */}
                            <th>Last Name</th>

                            <th>Phone Number</th>
                            {/* <th>Address Line 1</th>
                            <th>Address Line 2</th>
                            <th>Country</th> */}
                            <th>State</th>
                            <th>City</th>
                            {/* <th>Zipcode</th>
                            <th>Visa Status</th>
                            <th>Citizenship</th>
                            <th>Employment Nature</th>
                            <th>Contracting Rate</th>
                            <th>Employment Company</th>
                            <th>Working Remote</th> */}
                            <th>Employment Start Date</th>
                            {/* <th>Role</th> */}
                            <th>Designation</th>
                            {/* <th>Skill</th> */}
                            <th>Employment Status</th>

                            {/* <th>photo</th>
                        <th>resume</th>
                        <th>passport</th>
                    <th>workAuthorization</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData && tableData.map((data, index) => (
                            <tr key={index} onClick={tabPageName && tabPageName !== 'onboardingApproval' ? () => handleRowClick(index) : null}>
                                {/* <tr key={index} > */}
                                <td>{index + 1}</td>
                                {tabPageName && tabPageName === 'onboardingApproval' && <td>
                                    <span className='btn btn-theme button-1 text-dark ctm-border-radius btn-block mr-1'>
                                        <Link to={{
                                            pathname: "onboarding-approval-form",
                                            state: { employeeData: data }

                                        }}
                                            className=" btn-ctm-space text-white ">
                                            <span className="d-none d-lg-inline ">Approve/Reject</span>
                                        </Link>
                                    </span>
                                </td>}
                                <td>{data.employeeId ? data.employeeId : '--'}</td>
                                <td>{data.firstName ? data.firstName : '--'}</td>
                                {/* <td>{data.middleName ? data.middleName : '--'}</td> */}
                                <td>{data.lastName ? data.lastName : '--'}</td>
                                <td>{data.phoneNumber ? data.phoneNumber : '--'}</td>
                                {/* <td>{data.addressLine1 ? data.addressLine1 : '--'}</td>
                                    <td>{data.addressLine2 ? data.addressLine2 : '--'}</td>
                                    <td>{data.country ? data.country : '--'}</td> */}
                                <td>{data.state ? data.state : '--'}</td>
                                <td>{data.city ? data.city : '--'}</td>
                                {/* <td>{data.zipCode ? data.zipCode : '--'}</td>
                                    <td>{data.visaStatus ? data.visaStatus : '--'}</td>
                                    <td>{data.citizenship ? data.citizenship : '--'}</td> */}
                                {/* <td>{data.employmentNature ? data.employmentNature : '--'}</td> */}
                                {/* <td>{data.contractingRate ? data.contractingRate : '--'}</td>
                                    <td>{data.employmentCompany ? data.employmentCompany : '--'}</td>
                                    <td>{data.workingRemote ? data.workingRemote : '--'}</td> */}
                                <td>{data.employmentStartDate ? formatDate(data.employmentStartDate) : '--'}</td>
                                {/* <td>{data.role ? data.role : '--'}</td> */}
                                <td>{data.designation ? data.designation : '--'}</td>
                                {/* <td>{data.skill ? data.skill : '--'}</td> */}
                                <td>{data.employmentStatus ? data.employmentStatus : '--'}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>


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
                                        <Form.Control type="text" value={tableData[selectedRow]?.firstName || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="midName">
                                        <Form.Label>Middle Name</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.middleName || ''} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.lastName || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="employeeId">
                                        <Form.Label>Employee Id</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.employeeId || ''} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="phoneNumber">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.phoneNumber || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="country">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.country || ''} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="state">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.state || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.city || ''} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="addressLine1">
                                        <Form.Label>Address Line 1</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.addressLine1 || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="addressLine2">
                                        <Form.Label>Address Line 2</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.addressLine2 || ''} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="zipcode">
                                        <Form.Label>Zipcode</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.zipCode || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="visaStatus">
                                        <Form.Label>Visa Status</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.visaStatus || ''} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="citizenship">
                                        <Form.Label>citizenship</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.citizenship || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="employmentNature">
                                        <Form.Label>Employment Nature</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.employmentNature || ''} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="contractingRate">
                                        <Form.Label>Contracting Rate</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.contractingRate || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="employmentCompany">
                                        <Form.Label>Employment Company</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.employmentCompany || ''} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="workingRemote">
                                        <Form.Label>Working Remote</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.workingRemote || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="employmentStartDate">
                                        <Form.Label>Employment Start Date</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.employmentStartDate || ''} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="role">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.role || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="designation">
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.designation || ''} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="skill">
                                        <Form.Label>Skill</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.skill || ''} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="employmentStatus">
                                        <Form.Label>Employment Status</Form.Label>
                                        <Form.Control type="text" value={tableData[selectedRow]?.employmentStatus || ''} readOnly />
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
        </>
    )
}

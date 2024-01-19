import React, { useState } from 'react'
import { Table, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function commonTable({ data, columns, tableTitle, rowClickable, tabPageName }) {

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
            <div className="card ctm-border-radius shadow-sm">
                <div className="card-header">
                    <h4 className="card-title mb-0">{tableTitle}</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>S. N.</th>
                                    {tabPageName && tabPageName === 'onboardingApproval' && <th>Action</th>}
                                    {columns.map((column) => (
                                        <th key={column.key}>{column.title}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id} onClick={rowClickable ? () => handleRowClick(index) : null}>
                                        <td>{index + 1}</td>
                                        {tabPageName && tabPageName === 'onboardingApproval' && (
                                            <td>
                                                <span className='btn btn-theme button-1 text-dark ctm-border-radius btn-block mr-1'>
                                                    <Link to={{
                                                        pathname: "onboarding-approval-form",
                                                        state: { employeeData: item }
                                                    }}
                                                        className=" btn-ctm-space text-white ">
                                                        <span className="d-none d-lg-inline ">Approve/Reject</span>
                                                    </Link>
                                                </span>
                                            </td>
                                        )}
                                        {columns.map((column) => (
                                            <td key={column.key}>{item[column.dataIndex] || '-'}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


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
                                    <Form.Control type="text" value={data[selectedRow]?.firstName || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="midName">
                                    <Form.Label>Middle Name</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.middleName || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="lastName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.lastName || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="employeeId">
                                    <Form.Label>Employee Id</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.employeeId || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="phoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.phoneNumber || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="country">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.country || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="state">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.state || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.city || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="addressLine1">
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.addressLine1 || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="addressLine2">
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.addressLine2 || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="zipcode">
                                    <Form.Label>Zipcode</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.zipCode || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="visaStatus">
                                    <Form.Label>Visa Status</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.visaStatus || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="citizenship">
                                    <Form.Label>citizenship</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.citizenship || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="employmentNature">
                                    <Form.Label>Employment Nature</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.employmentNature || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="contractingRate">
                                    <Form.Label>Contracting Rate</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.contractingRate || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="employmentCompany">
                                    <Form.Label>Employment Company</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.employmentCompany || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="workingRemote">
                                    <Form.Label>Working Remote</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.workingRemote || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="employmentStartDate">
                                    <Form.Label>Employment Start Date</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.employmentStartDate || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="role">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.role || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="designation">
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.designation || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="skill">
                                    <Form.Label>Skill</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.skill || ''} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="employmentStatus">
                                    <Form.Label>Employment Status</Form.Label>
                                    <Form.Control type="text" value={data[selectedRow]?.employmentStatus || ''} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className='btn btn-danger ctm-border-radius text-center' onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

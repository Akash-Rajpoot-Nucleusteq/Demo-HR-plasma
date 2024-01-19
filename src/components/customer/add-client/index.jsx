import React from "react";
import SideBar from "../../account-management/sideBar";
import { Toggle } from "../toggle/toggle";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

 const AddClient = () => {
  const [formData, setFormData] = useState({
    // Client Information
    clientName: "",
    businessUnit: "",
    project: "",

    // Client Contact Information
    clientFirstName: "",
    clientMiddleName: "",
    clientLastName: "",
    phoneNumber: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",

    // Client Manager Information
    clientManagerFirstName: "",
    clientManagerMiddleName: "",
    clientManagerLastName: "",

    // Additional Contacts
    directContact: "",

    // Pass Through Vendor Information
    passThroughVendorName: "",
    passThroughVendorContact: "",

    // Contact Person Information
    contactFirstName: "",
    contactLastName: "",
    contactPhone: "",
    contactEmail: "",

    // Client Partner Information
    clientPartnerFirstName: "",
    clientPartnerLastName: "",
    clientPartnerPhone: "",
    clientPartnerEmail: "",

    // Engagement Manager Information
    engagementManagerFirstName: "",
    engagementManagerLastName: "",
    engagementManagerPhone: "",
    engagementManagerEmail: "",

    // HR Information
    accountHr: "",
    // Add more fields as needed
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='page-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
            <SideBar />
          </div>
          <div className='col-xl-9 col-lg-8  col-md-12'>
            <Toggle />
            <div className='card shadow-sm ctm-border-radius'>
              <div className='card-body align-center'>
                <Form>
                  {/* Client Information */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='clientName'>
                        <Form.Label>Client Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter client name'
                          name='clientName'
                          value={formData.clientName}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='businessUnit'>
                        <Form.Label>Business Unit</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter business unit'
                          name='businessUnit'
                          value={formData.businessUnit}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Client Contact Information */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='project'>
                        <Form.Label>Project</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter project'
                          name='project'
                          value={formData.project}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='clientFirstName'>
                        <Form.Label>Client First Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter client first name'
                          name='clientFirstName'
                          value={formData.clientFirstName}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Client Manager Information */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='clientManagerFirstName'>
                        <Form.Label>Client Manager First Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter client manager first name'
                          name='clientManagerFirstName'
                          value={formData.clientManagerFirstName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='clientManagerMiddleName'>
                        <Form.Label>Client Manager Middle Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter client manager middle name'
                          name='clientManagerMiddleName'
                          value={formData.clientManagerMiddleName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Additional Contacts */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='clientManagerLastName'>
                        <Form.Label>Client Manager Last Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter client manager last name'
                          name='clientManagerLastName'
                          value={formData.clientManagerLastName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='directContact'>
                        <Form.Label>Direct Contact</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter direct contact'
                          name='directContact'
                          value={formData.directContact}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Pass Through Vendor Information */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='passThroughVendorName'>
                        <Form.Label>Pass Through Vendor Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter pass through vendor name'
                          name='passThroughVendorName'
                          value={formData.passThroughVendorName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='passThroughVendorContact'>
                        <Form.Label>Pass Through Vendor Contact</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter pass through vendor contact'
                          name='passThroughVendorContact'
                          value={formData.passThroughVendorContact}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Contact Person Information */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='contactFirstName'>
                        <Form.Label>Contact First Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter contact first name'
                          name='contactFirstName'
                          value={formData.contactFirstName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='contactLastName'>
                        <Form.Label>Contact Last Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter contact last name'
                          name='contactLastName'
                          value={formData.contactLastName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Phone and Email */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='contactPhone'>
                        <Form.Label>Contact Phone</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter contact phone'
                          name='contactPhone'
                          value={formData.contactPhone}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='contactEmail'>
                        <Form.Label>Contact Email</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Enter contact email'
                          name='contactEmail'
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Client Partner Information */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='clientPartnerFirstName'>
                        <Form.Label>Client Partner First Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter client partner first name'
                          name='clientPartnerFirstName'
                          value={formData.clientPartnerFirstName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='clientPartnerLastName'>
                        <Form.Label>Client Partner Last Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter client partner last name'
                          name='clientPartnerLastName'
                          value={formData.clientPartnerLastName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Phone and Email */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='clientPartnerPhone'>
                        <Form.Label>Client Partner Phone</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter client partner phone'
                          name='clientPartnerPhone'
                          value={formData.clientPartnerPhone}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='clientPartnerEmail'>
                        <Form.Label>Client Partner Email</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Enter client partner email'
                          name='clientPartnerEmail'
                          value={formData.clientPartnerEmail}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Engagement Manager Information */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='engagementManagerFirstName'>
                        <Form.Label>Engagement Manager First Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter engagement manager first name'
                          name='engagementManagerFirstName'
                          value={formData.engagementManagerFirstName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='engagementManagerLastName'>
                        <Form.Label>Engagement Manager Last Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter engagement manager last name'
                          name='engagementManagerLastName'
                          value={formData.engagementManagerLastName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Phone and Email */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='engagementManagerPhone'>
                        <Form.Label>Engagement Manager Phone</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter engagement manager phone'
                          name='engagementManagerPhone'
                          value={formData.engagementManagerPhone}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId='engagementManagerEmail'>
                        <Form.Label>Engagement Manager Email</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Enter engagement manager email'
                          name='engagementManagerEmail'
                          value={formData.engagementManagerEmail}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* HR Information */}
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='accountHr'>
                        <Form.Label>Account HR</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter account HR'
                          name='accountHr'
                          value={formData.accountHr}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClient;

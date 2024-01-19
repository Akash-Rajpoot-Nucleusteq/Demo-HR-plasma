import React, { useState } from 'react';
import { Modal, Row, Form, Col } from 'react-bootstrap';
import InputValidator from '../../../validations/fieldValidation/InputValidator'

//popup to upload adhar card.
export function AdharPopUpUpload({ adharCard, setAdharCard }) {

    function handleClose() {
        setAdharCard((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setAdharCard((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }


    function handleImageCloseModal() {
        setAdharCard({
            ...adharCard,
            showAttachmentModal: false,
            showViewModal: false,
            document: null,
            adharNumber: '',
            dob: '',
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setAdharCard({
            ...adharCard,
            showAttachmentModal: false,
        })

    }

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setAdharCard({
            ...adharCard,
            [id]: value,
        })
    }

    const show = adharCard.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload Adhar Card</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Group controlId="adharNumber">
                        <Form.Label>Adhar Number<span className="text-danger">*</span></Form.Label>
                        <Form.Control placeholder="Enter Adhar Number" value={adharCard.adharNumber} onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="dob">
                        <Form.Label>DOB<span className="text-danger">*</span></Form.Label>
                        <Form.Control type='date' value={adharCard.dob} onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>

                {adharCard.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={adharCard.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}
                <Col className='mt-3'>
                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {adharCard.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>
            </Modal.Body>
        </Modal>
    );
};


//popup to attach photo
export function PhotoPopUpUpload({ photo, setPhoto }) {

    function handleClose() {
        setPhoto((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setPhoto((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }


    function handleImageCloseModal() {
        setPhoto({
            ...photo,
            showAttachmentModal: false,
            document: null,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('from photo attachment : ', photo);
        setPhoto({
            ...photo,
            showAttachmentModal: false,
        })

    }

    const show = photo.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload Photo</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>

                {photo.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={photo.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}
                <Col className='mt-3'>
                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {photo.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>
            </Modal.Body>
        </Modal>
    );
};



//popup to attach resume
export function ResumePopUpUpload({ resume, setResume }) {

    function handleClose() {
        setResume((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setResume((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }


    function handleImageCloseModal() {
        setResume({
            ...resume,
            showAttachmentModal: false,
            document: null,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('from resume attachment : ', resume);
        setResume({
            ...resume,
            showAttachmentModal: false,
        })

    }

    const show = resume.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload Resume</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>

                {resume.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={resume.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}

                <Col className='mt-3'>
                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {resume.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>
            </Modal.Body>
        </Modal>
    );
};


//popup to upload passport.
export function PassportPopUpUpload({ passport, setPassport }) {

    function handleClose() {
        setPassport((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setPassport((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    function handleImageCloseModal() {
        setPassport({
            ...passport,
            showAttachmentModal: false,
            showViewModal: false,
            document: null,
            adharNumber: '',
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('from Passport is: ', passport);
        setPassport({
            ...passport,
            showAttachmentModal: false,
        })

    }

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setPassport({
            ...passport,
            [id]: value,
        })
    }

    const show = passport.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload Passport</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Group controlId="country">
                        <Form.Label>Country<span className="text-danger">*</span></Form.Label>
                        <Form.Control placeholder="Enter Employment Company" value={passport.country} onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="issueDate">
                        <Form.Label>Issue Date<span className="text-danger">*</span></Form.Label>
                        <Form.Control type='date' placeholder="Enter Employment Company" value={passport.issueDate} onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="expDate">
                        <Form.Label>Expiry Date<span className="text-danger">*</span></Form.Label>
                        <Form.Control type='date' placeholder="Enter Employment Company" value={passport.expDate} onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="passportNumber">
                        <Form.Label>Passport Number<span className="text-danger">*</span></Form.Label>
                        <Form.Control placeholder="Enter Employment Company" value={passport.passportNumner} onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>

                {passport.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={passport.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}
                <Col className='mt-3'>

                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {passport.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>
            </Modal.Body>
        </Modal>
    );
};

//popup to attach work authorization
export function WorkAuthorizationPopUpUpload({ workAuthorization, setWorkAuthorization }) {

    function handleClose() {
        setWorkAuthorization((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setWorkAuthorization((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setWorkAuthorization({
            ...workAuthorization,
            [id]: value,
        })
    }

    function handleImageCloseModal() {
        setWorkAuthorization({
            ...workAuthorization,
            showAttachmentModal: false,
            document: null,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('from workAuthorization attachment : ', workAuthorization);
        setWorkAuthorization({
            ...workAuthorization,
            showAttachmentModal: false,
        })

    }

    const show = workAuthorization.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload Work Authorization</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Group controlId="workAuthorizationNumber">
                        <Form.Label>Work Authorization Number<span className="text-danger">*</span></Form.Label>
                        <Form.Control placeholder="Enter Work Authorization Number" value={workAuthorization.workAuthorizationNumber} onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="validTill">
                        <Form.Label>Work Authorization Valid Till<span className="text-danger">*</span></Form.Label>
                        <Form.Control type='date' value={workAuthorization.validTill} onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>

                {workAuthorization.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={workAuthorization.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}
                <Col className='mt-3'>

                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {workAuthorization.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>
            </Modal.Body>
        </Modal>
    );
};


//popup to attach I94 travel history
export function I94TravelHistoryPopUpUpload({ i94TravelHistory, setI94TravelHistory }) {

    function handleClose() {
        setI94TravelHistory((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setI94TravelHistory((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    function handleImageCloseModal() {
        setI94TravelHistory({
            ...i94TravelHistory,
            showAttachmentModal: false,
            document: null,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('from i94TravelHistory attachment : ', i94TravelHistory);
        setI94TravelHistory({
            ...i94TravelHistory,
            showAttachmentModal: false,
        })

    }

    const show = i94TravelHistory.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload I94 Travel History</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>

                {i94TravelHistory.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={i94TravelHistory.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}
                <Col className='mt-3'>

                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {i94TravelHistory.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>
            </Modal.Body>
        </Modal>
    );
};

//popup to attach Photo Id.
export function PhotoIdPopUpUpload({ photoId, setPhotoId }) {

    function handleClose() {
        setPhotoId((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setPhotoId((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    function handleImageCloseModal() {
        setPhotoId({
            ...photoId,
            showAttachmentModal: false,
            document: null,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('from photoId attachment : ', photoId);
        setPhotoId({
            ...photoId,
            showAttachmentModal: false,
        })

    }

    const show = photoId.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload Photo Id</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>

                {photoId.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={photoId.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}
                <Col className='mt-3'>

                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {photoId.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>
            </Modal.Body>
        </Modal>
    );
};

//popup to attach Rental Agreement.
export function RentalAgreementPopUpUpload({ rentalAgreement, setRentalAgreement }) {

    function handleClose() {
        setRentalAgreement((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setRentalAgreement((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    function handleImageCloseModal() {
        setRentalAgreement({
            ...rentalAgreement,
            showAttachmentModal: false,
            document: null,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('from rentalAgreement attachment : ', rentalAgreement);
        setRentalAgreement({
            ...rentalAgreement,
            showAttachmentModal: false,
        })

    }

    const show = rentalAgreement.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload Rental Agreement</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>

                {rentalAgreement.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={rentalAgreement.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}

                <Col className='mt-3'>

                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {rentalAgreement.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>
            </Modal.Body>
        </Modal>
    );
};

//popup to attach Highest Education Details.
export function EducationDetailsPopUpUpload({ educationDetails, setEducationDetails }) {

    function handleClose() {
        setEducationDetails((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setEducationDetails((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    function handleImageCloseModal() {
        setEducationDetails({
            ...educationDetails,
            showAttachmentModal: false,
            document: null,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('from educationDetails attachment : ', educationDetails);
        setEducationDetails({
            ...educationDetails,
            showAttachmentModal: false,
        })

    }

    const show = educationDetails.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload Education Details</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>

                {educationDetails.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={educationDetails.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}
                <Col className='mt-3'>

                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {educationDetails.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>
            </Modal.Body>
        </Modal>
    );
};

//popup to attach I9 Copy.
export function I9CopyPopUpUpload({ i9Copy, setI9Copy }) {

    function handleClose() {
        setI9Copy((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setI9Copy((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    function handleImageCloseModal() {
        setI9Copy({
            ...i9Copy,
            showAttachmentModal: false,
            document: null,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('from i9Copy attachment : ', i9Copy);
        setI9Copy({
            ...i9Copy,
            showAttachmentModal: false,
        })

    }

    const show = i9Copy.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload I9 Copy</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>

                {i9Copy.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={i9Copy.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}
                <Col className='mt-3'>
                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {i9Copy.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>
            </Modal.Body>
        </Modal>
    );
};


//popup to upload pan card.
export function PanPopUpUpload({ pan, setPan }) {

    function handleClose() {
        setPan((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
        }))
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const selectedDocument = reader.result;

                setPan((prevState) => ({
                    ...prevState,
                    document: selectedDocument,
                }));
            };
            reader.readAsDataURL(file);
        }
    }


    function handleImageCloseModal() {
        setPan({
            ...pan,
            showAttachmentModal: false,
            showViewModal: false,
            document: null,
            adharNumber: '',
            dob: '',
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('from pan attachment : ', pan);
        setPan({
            ...pan,
            showAttachmentModal: false,
        })

    }

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setPan({
            ...pan,
            [id]: value,
        })
    }

    const show = pan.showAttachmentModal;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <h4 className='modal-title mb-3'>Upload Pan Card</h4>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Form.Group controlId="panNumber">
                        <Form.Label>Pan Number<span className="text-danger">*</span></Form.Label>
                        <Form.Control placeholder="Enter Adhar Number" value={pan.adharNumber} onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>Select Document<span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        className='form-control date-enter'
                        type='file'
                        accept=".pdf"  // Restrict to PDF files only
                        onChange={handleFileChange}
                    />
                </Col>
                {pan.document && (
                    <div style={{ padding: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <embed src={pan.document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>
                )}

                <Col className='mt-3'>
                    <button type='button' className='btn btn-danger ctm-border-radius float-right ml-3' onClick={handleImageCloseModal}>
                        {pan.document ? 'Remove' : 'Cancel'}
                    </button>
                    <button type='submit' className='btn btn-theme button-1 text-white ctm-border-radius float-right' onClick={handleSubmit}>
                        Save Document
                    </button>
                </Col>

            </Modal.Body>
        </Modal>
    );
};
import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Sidebar from "../profile/sidebar";
import { Link } from "react-router-dom";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showImageModal: false,
      selectedImage: null,
      documentType: null,
      passport: {
        image: null,
      },
      p45: {
        image: null,
      },
      pan: {
        image: null,
      },
      visa: {
        image: null,
      },
    };
  }

  handleImageOpenModal = (image, documentType) => {
    this.setState({
      showImageModal: true,
      selectedImage: image,
      documentType: documentType,
    });
  };

  handleImageCloseModal = () => {
    this.setState({
      showImageModal: false,
      selectedImage: null,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
      selectedImage: null,
      documentType: null,
    });
  };

  handleShow = (documentType) => {
    this.setState({
      show: true,
      documentType: documentType,
      selectedImage: this.state[documentType].image,
    });
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ selectedImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  saveDocumentLocally = () => {
    const { documentType, selectedImage } = this.state;
    this.setState(
      {
        [documentType]: {
          ...this.state[documentType],
          image: selectedImage,
        },
        show: false,
        selectedImage: null,
        documentType: null,
      },
      () => {
        console.log(`Image saved for ${documentType}`);
      }
    );
  };

  handleImageCloseModal = (documentType) => {
    this.setState({
      showImageModal: false,
      selectedImage: null,
      documentType: documentType,
    });
  };

  handleRemoveImage = () => {
    const { documentType } = this.state;
    console.log("Running");
    this.setState(
      (prevState) => ({
        ...prevState,
        [documentType]: {
          ...prevState[documentType],
          image: null,
        },
      }),
      () => {
        console.log("State after removing image:", this.state);
        this.handleImageCloseModal();
      }
    );
  };

  render() {
    console.log("Current state:", this.state);
    return (
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <Sidebar />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='card ctm-border-radius shadow-sm'>
                <div className='card-header'>
                  <h4 className='card-title doc d-inline-block mb-0'>
                    Documents
                  </h4>
                  <Link
                    className='float-right doc-fold text-primary d-inline-block text-info'
                    onClick={() => this.handleShow("add")}></Link>
                </div>
                <div className='card-body doc-boby'>
                  <div className='card shadow-none'>
                    <div className='card-header'>
                      <h5 className='card-title text-primary mb-0'>Passport</h5>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='document-up'>
                            <Link>
                              <i
                                className='mr-2 text-primary fa fa-file-pdf-o'
                                aria-hidden='true'></i>{" "}
                              Passport.pdf{" "}
                              {this.state.passport.image ? (
                                <span
                                  className='float-right text-primary'
                                  onClick={() =>
                                    this.handleImageOpenModal(
                                      this.state.passport.image,
                                      "passport"
                                    )
                                  }>
                                  View Image
                                </span>
                              ) : (
                                <span
                                  className='float-right text-primary'
                                  onClick={() => this.handleShow("passport")}>
                                  Upload
                                </span>
                              )}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card shadow-none'>
                    <div className='card-header'>
                      <h5 className='card-title text-primary mb-0'>P45</h5>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='document-up'>
                            <Link>
                              <i
                                className='mr-2 text-primary fa fa-file-pdf-o'
                                aria-hidden='true'></i>
                              P45.pdf
                              {this.state.p45.image ? (
                                <span
                                  className='float-right text-primary'
                                  onClick={() =>
                                    this.handleImageOpenModal(
                                      this.state.p45.image,
                                      "p45"
                                    )
                                  }>
                                  View Image
                                </span>
                              ) : (
                                <span
                                  className='float-right text-primary'
                                  onClick={() => this.handleShow("p45")}>
                                  Upload
                                </span>
                              )}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card shadow-none'>
                    <div className='card-header'>
                      <h5 className='card-title text-primary mb-0'>Pan</h5>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='document-up'>
                            <Link>
                              <i
                                className='mr-2 text-primary fa fa-file-pdf-o'
                                aria-hidden='true'></i>
                              Pan
                              {this.state.pan.image ? (
                                <span
                                  className='float-right text-primary'
                                  onClick={() =>
                                    this.handleImageOpenModal(
                                      this.state.pan.image,
                                      "pan"
                                    )
                                  }>
                                  View Image
                                </span>
                              ) : (
                                <span
                                  className='float-right text-primary'
                                  onClick={() => this.handleShow("pan")}>
                                  Upload
                                </span>
                              )}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card shadow-none'>
                    <div className='card-header'>
                      <h5 className=' text-primary card-title mb-0'>Visa</h5>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='document-up'>
                            <Link>
                              <i
                                className='mr-2 text-primary fa fa-file-pdf-o'
                                aria-hidden='true'></i>
                              Visa.pdf
                              {this.state.visa.image ? (
                                <span
                                  className='float-right text-primary'
                                  onClick={() =>
                                    this.handleImageOpenModal(
                                      this.state.visa.image,
                                      "visa"
                                    )
                                  }>
                                  View Image
                                </span>
                              ) : (
                                <span
                                  className='float-right text-primary'
                                  onClick={() => this.handleShow("visa")}>
                                  Upload
                                </span>
                              )}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='add-doc text-center'>
                    <Link
                      href='#0'
                      className='btn btn-theme  button-1 ctm-border-radius text-white text-center'
                      onClick={() => this.handleShow("add")}>
                      Submit Documents
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Upload Document*/}
        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <h4 className='modal-title mb-3'>Upload Document</h4>
          </Modal.Header>
          <Modal.Body>
            <div className='form-group'>
              <div className='input-group mb-3'>
                <input
                  className='form-control date-enter'
                  type='file'
                  onChange={this.handleFileChange}
                />
              </div>
            </div>
            {this.state.selectedImage && (
              <div style={{ padding: "10px" }}>
                <img
                  src={this.state.selectedImage}
                  alt='Selected Passport'
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            )}
            <button
              type='button'
              className='btn btn-danger ctm-border-radius float-right ml-3'
              onClick={this.handleClose}>
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-theme button-1 text-white ctm-border-radius float-right'
              onClick={this.saveDocumentLocally}>
              Save Document
            </button>
          </Modal.Body>
          {/* View Document*/}
        </Modal>
        <Modal
          show={this.state.showImageModal}
          onHide={this.handleImageCloseModal}
          centered>
          <Modal.Header closeButton>
            <Modal.Title>View Document</Modal.Title>
            {/* Add the remove button here */}
          </Modal.Header>
          <Modal.Body>
            {this.state.selectedImage && (
              <div style={{ padding: "10px" }}>
                <img
                  src={this.state.selectedImage}
                  alt='Selected Passport'
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            )}
            <button
              onClick={() => this.handleRemoveImage()}
              className='btn btn-danger float-right'>
              Remove Image
            </button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Document;

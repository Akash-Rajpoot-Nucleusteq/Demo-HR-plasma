import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Sidebar from "../sidebar";
import EMPLOYEE from '../../../assets/images/Profile Photo.jpg'
import MANAGER from '../../../assets/images/Jitendra.png'
import CLIENT_MANAGER from '../../../assets/images/Vishesh.png'
import RECRUITER from '../../../assets/images/Prachi.png'
import RECRUITER_MANAGER from '../../../assets/images/Ankita.png'

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,

      storedData: JSON.parse(localStorage.getItem('data')) || {},
    };


  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      show: id,
    });
  };
  render() {
    return (
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              {this.state.storedData.role === "Employee" && <Sidebar employeeName={"Ashish"} profilePhoto={EMPLOYEE} />}
              {this.state.storedData.role === "Manager" && <Sidebar employeeName={"Jitendra"} profilePhoto={MANAGER} />}
              {this.state.storedData.role === "Client Manager" && <Sidebar employeeName={"Vishesh"} profilePhoto={CLIENT_MANAGER} />}
              {this.state.storedData.role === "Recruiter" && <Sidebar employeeName={"Prachi"} profilePhoto={RECRUITER} />}
              {this.state.storedData.role === "Recruiter Manager" && <Sidebar employeeName={"Ankita"} profilePhoto={RECRUITER_MANAGER} />}
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='row'>
                <div className='col-xl-4 col-lg-6 col-md-6 d-flex'>
                  <div className='card flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>Basic Information</h4>
                    </div>
                    <div className='card-body text-center'>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>First Name :</span> Maria
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Last Name : </span>Cotton
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Nationality :</span>{" "}
                        India
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Date of Birth :</span> 05
                        May 1990
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Gender : </span>Female
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Blood Group :</span> A+
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-6 col-md-6 d-flex'>
                  <div className='card flex-fill  ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>Contact</h4>
                    </div>
                    <div className='card-body text-center'>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Phone Number : </span>
                        987654321
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Personal Email : </span>
                        mariacotton@example.com
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>
                          Secondary Number :{" "}
                        </span>
                        986754231
                      </p>
                    </div>
                  </div>
                </div>
                {/*col */}
                <div className='col-xl-4 col-lg-12 col-md-12'>
                  <div className='row'>
                    <div className='col-xl-12 col-lg-6 col-md-6 d-flex'>
                      <div className='card ctm-border-radius shadow-sm flex-fill'>
                        <div className='card-header'>
                          <h4 className='card-title mb-0'>Dates</h4>
                        </div>
                        <div className='card-body text-center'>
                          <p className='card-text mb-3'>
                            <span className='text-primary'>Start Date : </span>
                            06 Jun 2017
                          </p>
                          <p className='card-text mb-3'>
                            <span className='text-primary'>
                              Visa Start Date :{" "}
                            </span>
                            09 Jun 2017
                          </p>
                          <p className='card-text mb-3'>
                            <span className='text-primary'>
                              Visa Expiry Date :{" "}
                            </span>
                            06 Jun 2020
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-12 col-lg-6 col-md-6 d-flex'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Information*/}
        <Modal
          show={this.state.show === "basic"}
          onHide={this.handleClose}
          centered>
          <Modal.Header closeButton>
            <h4 className='modal-title mb-3'>Basic Information</h4>
          </Modal.Header>
          <Modal.Body>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Preferred Name'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='First Name'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Last Name'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Nationality'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                className='form-control datetimepicker date-enter'
                type='text'
                placeholder='Add Date of Birth'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Gender'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Blood Group'
              />
            </div>
            <button
              type='button'
              className='btn btn-danger text-white ctm-border-radius float-right ml-3'
              data-dismiss='modal'>
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-theme  button-1 text-white ctm-border-radius float-right'>
              Add
            </button>
          </Modal.Body>
        </Modal>
        {/* Edit Basic Information*/}
        <Modal
          show={this.state.show === "edit"}
          onHide={this.handleClose}
          centered>
          <Modal.Header closeButton>
            <h4 className='modal-title mb-3'>Edit Basic Information</h4>
          </Modal.Header>
          <Modal.Body>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Preferred Name'
                value='Maria'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='First Name'
                value='Maria'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Last Name'
                value='Cotton'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Nationality'
                value='American'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                className='form-control datetimepicker date-enter'
                type='text'
                placeholder='Add Date of Birth'
                value='05-07-1990'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Gender'
                value='Female'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Blood Group'
                value='A+'
              />
            </div>
            <button
              type='button'
              className='btn btn-danger float-right ml-3'
              data-dismiss='modal'>
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-theme  button-1 text-white ctm-border-radius float-right'>
              Save
            </button>
          </Modal.Body>
        </Modal>
        {/* Add Contact*/}
        <Modal
          show={this.state.show === "addcontact"}
          onHide={this.handleClose}
          centered>
          <Modal.Header closeButton>
            <h4 className='modal-title mb-3'>Add Contact</h4>
          </Modal.Header>
          <Modal.Body>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Phone Number'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='email'
                className='form-control'
                placeholder='Login Email'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='email'
                className='form-control'
                placeholder='Add Personal Email'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Seconary Phone Number'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Web Site'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Connect Your Linkedin'
              />
            </div>
            <button
              type='button'
              className='btn btn-danger text-white ctm-border-radius float-right ml-3'
              data-dismiss='modal'>
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-theme  button-1 text-white ctm-border-radius float-right'>
              Save
            </button>
          </Modal.Body>
        </Modal>
        {/* edit Contact*/}
        <Modal
          show={this.state.show === "editcontact"}
          onHide={this.handleClose}
          centered>
          <Modal.Header closeButton>
            <h4 className='modal-title mb-3'>Edit Contact</h4>
          </Modal.Header>
          <Modal.Body>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Phone Number'
                value='987654321'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='email'
                className='form-control'
                placeholder='Login Email'
                value='mariacotton@example.com'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='email'
                className='form-control'
                placeholder='Add Personal Email'
                value='maria@example.com'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Seconary Phone Number'
                value='986754231'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Web Site'
                value='www.focustechnology.com'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Connect Your Linkedin'
                value='#mariacotton'
              />
            </div>
            <button
              type='button'
              className='btn btn-danger text-white ctm-border-radius float-right ml-3'
              data-dismiss='modal'>
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-theme  button-1 text-white ctm-border-radius float-right'>
              Save
            </button>
          </Modal.Body>
        </Modal>
        {/* add date*/}
        <Modal
          show={this.state.show === "adddate"}
          onHide={this.handleClose}
          centered>
          <Modal.Header closeButton>
            <h4 className='modal-title mb-3'>Add New Date</h4>
          </Modal.Header>
          <Modal.Body>
            <div className='modal-body'>
              <div className='form-group'>
                <div className='input-group mb-1'>
                  <DatePicker
                    className={"form-control datetimepicker"}
                    placeholderText='Date Type'
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className='form-group'>
                <DatePicker
                  className={"form-control datetimepicker"}
                  placeholderText='Select Date'
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type='button'
                className='btn btn-danger text-white ctm-border-radius float-right ml-3'
                data-dismiss='modal'>
                Cancel
              </button>
              <button
                type='button'
                className='btn btn-theme  button-1 text-white ctm-border-radius float-right'>
                Add
              </button>
            </div>
          </Modal.Body>
        </Modal>
        {/* edit date*/}
        <Modal
          show={this.state.show === "editdate"}
          onHide={this.handleClose}
          centered>
          <Modal.Header closeButton>
            <h4 className='modal-title mb-3'>Add New Date</h4>
          </Modal.Header>
          <Modal.Body>
            <div className='modal-body'>
              <div className='form-group'>
                <div className='input-group mb-1'>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    placeholderText='Date Type'
                    className='form-control datetimepicker date-enter'
                  />
                </div>
              </div>
              <div className='form-group'>
                <div className='input-group mb-3'>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    placeholderText='Key Date'
                    className='form-control datetimepicker date-enter'
                  />
                </div>
              </div>
              <button
                type='button'
                className='btn btn-danger text-white ctm-border-radius float-right ml-3'
                data-dismiss='modal'>
                Cancel
              </button>
              <button
                type='button'
                className='btn btn-theme  button-1 text-white ctm-border-radius float-right'>
                Add
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Details;

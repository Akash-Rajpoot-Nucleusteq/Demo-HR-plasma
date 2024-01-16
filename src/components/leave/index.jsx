import React, { Component } from "react";
import Sidebar from "./sidebar";
import Leavedetails from './leavedetails';
import Todayleaves from './todayleaves';

import Select from 'react-select'


class Leave extends Component {


  getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Approved':
        return 'badge badge-success';
      case 'Pending':
        return 'badge badge-warning';
      case 'Rejected':
        return 'badge badge-danger';
      default:
        return 'badge badge-secondary';
    }
  };

  handleHalfDayChange = (e) => {
    this.setState({ isHalfDay: e.target.value === 'true' });
  };


  render() {

    const userRole = localStorage.getItem('userRole');

    const leaveOptions = [
      { value: 'Sick Leave', label: 'Sick Leave' },
      { value: 'Paid Leave', label: 'Paid Leave' },
      { value: 'Casual Leave', label: 'Casual Leave' },
      { value: 'Comp Off', label: 'Comp Off' },
      { value: 'Sabotical Leave', label: 'Sabotical Leave' },
      { value: 'Maternity Leave', label: 'Maternity Leave' },

    ];

    const halfDayOptions = [
      { value: 'true', label: 'Yes' },
      { value: 'false', label: 'No' },
    ];
    // const halfDayOptions = [
    //   { value: 'First Half', label: 'First Half' },
    //   { value: 'Second Half', label: 'Second Half' },
    //   { value: 'Full Day', label: 'Full Day' },

    // ];
    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
              <Sidebar />
            </div>
            <div className="col-xl-9 col-lg-8  col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="card ctm-border-radius shadow-sm">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Apply Leaves</h4>
                    </div>

                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>From
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="date"
                                className="form-control datetimepicker"
                                placeholder="Select From Date"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 leave-col">
                            <div className="form-group">
                              <label>To
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="date"
                                className="form-control datetimepicker"
                                placeholder="Select To Date"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Leave Type
                                <span className="text-danger">*</span>
                              </label>
                              <Select options={leaveOptions} />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Half Day
                              </label>
                               <Select options={halfDayOptions} onChange={this.handleHalfDayChange} />
                            </div>
                          </div>
                          <div className="col-sm-6 leave-col">

                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group mb-0">
                              <label>Reason</label>
                              <textarea
                                className="form-control"
                                rows={4}
                                placeholder="Enter Reason for Leave"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <a
                            href="#0"
                            className="btn btn-theme button-1 text-white ctm-border-radius mt-4"
                          >
                            Apply
                          </a>
                          <a
                            href="#0"
                            className="btn btn-danger text-white ctm-border-radius mt-4"
                          >
                            Cancel
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-md-12">
                  <div className="card ctm-border-radius shadow-sm">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Your Leave Status</h4>
                    </div>
                    <div className="card-body">
                      <div className="employee-office-table">
                        <div className="table-responsive">
                          <Leavedetails />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                {userRole === 'Manager' && <div className="col-md-12">
                  <div className="card ctm-border-radius shadow-sm">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Leaves Approval</h4>
                    </div>
                    <div className="card-body">
                      <div className="employee-office-table">
                        <div className="table-responsive">
                          <Todayleaves />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
                {/* col */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leave;

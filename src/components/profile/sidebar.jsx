import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import IMG01 from "../../assets/images/img-1.jpg";

class Sidebar extends Component {
  render() {
    const { profilePhoto, employeeName } = this.props;
    return (
      <aside className="sidebar sidebar-user">
        <div className="card ctm-border-radius shadow-sm">
          <div className="card-body py-4">
            <div className="row">
              <div className="col-md-12 mr-auto text-left">
                <div className="custom-search input-group">
                  <div className="custom-breadcrumb">
                    <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                      <li className="breadcrumb-item d-inline-block">
                        <Link to="admin" className="text-dark">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item d-inline-block active">
                        Profile
                      </li>
                    </ol>
                    <h4 className="text-dark">Profile</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-card shadow-sm bg-white p-4 text-center ctm-border-radius card">
          <div className="user-info">
            <div className="user-avatar mb-4">
              <img
                src={profilePhoto ? profilePhoto : IMG01}
                alt="User Avatar"
                className="img-fluid rounded-circle"
                width="100"
              />
            </div>
            <div className="user-details">
              <h4>
                <b>Welcome {employeeName ? employeeName : 'Maria'}</b>
              </h4>
              <span className="ctm-text-sm">Employee-ID : N0148 </span>
            </div>
          </div>
        </div>
        <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white p-4 mb-4 card">
          <ul className="list-group">
            <NavLink
              to="employment"
              className="list-group-item text-center button-6"
              activeClassName="active"
            >
              Employment
            </NavLink>
            <NavLink
              to="details"
              className="list-group-item text-center button-6"
            >
              Detail
            </NavLink>
            {/* <NavLink
              to="document"
              className="list-group-item text-center button-6"
            >
              Document
            </NavLink>
            <NavLink
              to="payroll"
              className="list-group-item text-center button-6"
            >
              Payroll
            </NavLink>
            <NavLink
              to="time-off"
              className="list-group-item text-center button-6"
            >
              Timeoff
            </NavLink>
            <NavLink
              to="profile-review"
              className="list-group-item text-center button-6"
            >
              Reviews
            </NavLink>
            <NavLink
              to="profile-settings"
              className="list-group-item text-center button-6"
            >
              Settings
            </NavLink> */}
          </ul>
        </div>
      </aside>
    );
  }
}

export default Sidebar;

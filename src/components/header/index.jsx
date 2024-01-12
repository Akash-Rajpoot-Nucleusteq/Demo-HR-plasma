import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/NT4-removebg-preview.png";
// import avatar from "../../assets/images/Profile Photo.jpg";
import { getCurrentUserDetails } from "../../authentication/auth";

import avatar from "../../assets/images/Profile Photo.jpg";
import RECRUITER from '../../assets/images/Prachi.png'
import RECRUITER_MANAGER from '../../assets/images/Ankita.png'
import CLIENT_MANAGER from '../../assets/images/Vishesh.png'
import MANAGER from '../../assets/images/Jitendra.png'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storedData: JSON.parse(localStorage.getItem('data')) || {},
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

  }

  render() {
    const exclusionArray = ["login", "register", "forgot-password"];
    if (
      exclusionArray.indexOf(this.props.location.pathname.split("/")[1]) >= 0
    ) {
      return "";
    }
    const url = window.location.pathname;
    const userDetails = getCurrentUserDetails();

    let navbar = [];
    switch (true) {
      case userDetails?.role === "Employee":
        navbar = [
          {
            classContent: `mr-2 ${"/employee/dashboard" === url ? "active" : ""
              } `,
            linkTo: "/employee/dashboard",
            linkIcon: "lnr lnr-home pr-0  pr-lg-1",
            linkContent: "Dashboard",
          },
          {
            classContent: `mr-1 ${"/employee/timesheet" === url ? "active" : ""
              } `,
            linkTo: "/employee/timesheet",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Timesheet",
          },
          {
            classContent: `mr-1 ${"/employee/assets" === url ? "active" : ""} `,
            linkTo: "/employee/assets",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Assets",
          },
          {
            classContent: `mr-1 ${"/employee/assignment" === url ? "active" : ""
              } `,
            linkTo: "/employee/assignment",
            linkIcon: "lnr lnr-apartment pr-0  pr-lg-1",
            linkContent: "Assignment",
          },
          {
            classContent: `mr-1 ${"/employee/leave" === url ? "active" : ""} `,
            linkTo: "/employee/leave",
            linkIcon: "lnr lnr-briefcase pr-0  pr-lg-1",
            linkContent: "Leave",
          },
          {
            classContent: `mr-1 ${"/employee/document" === url ? "active" : ""
              } `,
            linkTo: "/employee/document",
            linkIcon: "lnr lnr-book pr-0  pr-lg-1",
            linkContent: "Document",
          },
        ];
        break;
      case userDetails?.role === "Manager":
        navbar = [
          {
            classContent: `mr-2 ${"/manager/dashboard" === url ? "active" : ""
              } `,
            linkTo: "/manager/dashboard",
            linkIcon: "lnr lnr-home pr-0  pr-lg-1",
            linkContent: "Dashboard",
          },
          {
            classContent: `mr-1 ${"/manager/assets" === url ? "active" : ""} `,
            linkTo: "/manager/assets",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Assets",
          },
          {
            classContent: `mr-1 ${"/manager/timesheet" === url ? "active" : ""
              } `,
            linkTo: "/manager/timesheet",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Timesheet",
          },
          {
            classContent: `mr-1 ${"/manager/assignment" === url ? "active" : ""
              } `,
            linkTo: "/manager/assignment",
            linkIcon: "lnr lnr-apartment pr-0  pr-lg-1",
            linkContent: "Assignment",
          },
          {
            classContent: `mr-1 ${"/manager/leave" === url ? "active" : ""} `,
            linkTo: "/manager/leave",
            linkIcon: "lnr lnr-briefcase pr-0  pr-lg-1",
            linkContent: "Leave",
          },
          {
            classContent: `mr-1 ${"/manager/document" === url ? "active" : ""
              } `,
            linkTo: "/manager/document",
            linkIcon: "lnr lnr-book pr-0  pr-lg-1",
            linkContent: "Document",
          },
        ];
        break;
      case userDetails.role === "Recruiter":
        navbar = [
          {
            classContent: `mr-2 ${"/recruiter/dashboard" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/dashboard",
            linkIcon: "lnr lnr-home pr-0  pr-lg-1",
            linkContent: "Dashboard",
          },
          {
            classContent: `mr-1 ${"/recruiter/assets" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/assets",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Assets",
          },
          {
            classContent: `mr-1 ${"/recruiter/timesheet" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/timesheet",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Timesheet",
          },
          {
            classContent: `mr-1 ${"/recruiter/assignment" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/assignment",
            linkIcon: "lnr lnr-apartment pr-0  pr-lg-1",
            linkContent: "Assignment",
          },
          {
            classContent: `mr-1 ${"/recruiter/leave" === url ? "active" : ""} `,
            linkTo: "/recruiter/leave",
            linkIcon: "lnr lnr-briefcase pr-0  pr-lg-1",
            linkContent: "Leave",
          },
          {
            classContent: `mr-1 ${"/recruiter/document" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/document",
            linkIcon: "lnr lnr-book pr-0  pr-lg-1",
            linkContent: "Document",
          },
          {
            classContent: `mr-1 ${
              // ("recruiter" === url) |
              ("/recruiter/recent-onboarding" === url) |
                ("/recruiter/new-onboarding" === url)
                ? "active"
                : ""
              } `,
            linkTo: "/recruiter/recent-onboarding",
            linkIcon: "lnr lnr-user pr-0  pr-lg-1",
            linkContent: "Recruiter",
          },
        ];
        break;
      case userDetails.role === "Recruiter Manager":
        navbar = [
          {
            classContent: `mr-2 ${"/recruiter/manager/dashboard" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/manager/dashboard",
            linkIcon: "lnr lnr-home pr-0  pr-lg-1",
            linkContent: "Dashboard",
          },
          {
            classContent: `mr-1 ${"/recruiter/manager/assets" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/manager/assets",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Assets",
          },
          {
            classContent: `mr-1 ${"/recruiter/manager/timesheet" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/manager/timesheet",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Timesheet",
          },
          {
            classContent: `mr-1 ${"/recruiter/manager/assignment" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/manager/assignment",
            linkIcon: "lnr lnr-apartment pr-0  pr-lg-1",
            linkContent: "Assignment",
          },
          {
            classContent: `mr-1 ${"/recruiter/manager/leave" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/manager/leave",
            linkIcon: "lnr lnr-briefcase pr-0  pr-lg-1",
            linkContent: "Leave",
          },
          {
            classContent: `mr-1 ${"/recruiter/manager/document" === url ? "active" : ""
              } `,
            linkTo: "/recruiter/manager/document",
            linkIcon: "lnr lnr-book pr-0  pr-lg-1",
            linkContent: "Document",
          },
          {
            classContent: `mr-1 ${
              // ("recruiter" === url) |
              ("/recruiter/manager/recent-onboarding" === url) |
                ("/recruiter/manager/new-onboarding" === url) |
                ("/recruiter/manager/onboarding-approval" === url) |
                ("/recruiter/manager/approval-history" === url) |
                ("/recruiter/manager/onboarding-approval-form" === url)
                ? "active"
                : ""
              }`,
            linkTo: "/recruiter/manager/recent-onboarding",
            linkIcon: "lnr lnr-user pr-0  pr-lg-1",
            linkContent: "Recruiter",
          },
        ];
        break;
      case userDetails.role === "Client Manager":
        navbar = [
          {
            classContent: `mr-2 ${"/client/dashboard" === url ? "active" : ""
              } `,
            linkTo: "/client/dashboard",
            linkIcon: "lnr lnr-home pr-0  pr-lg-1",
            linkContent: "Dashboard",
          },
          {
            classContent: `mr-1 ${"/client/assets" === url ? "active" : ""} `,
            linkTo: "/client/assets",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Assets",
          },
          {
            classContent: `mr-1 ${"/client/timesheet" === url ? "active" : ""
              } `,
            linkTo: "/client/timesheet",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Timesheet",
          },
          {
            classContent: `mr-1 ${"/client/assignment" === url ? "active" : ""
              } `,
            linkTo: "/client/assignment",
            linkIcon: "lnr lnr-apartment pr-0  pr-lg-1",
            linkContent: "Assignment",
          },
          {
            classContent: `mr-1 ${"/client/leave" === url ? "active" : ""} `,
            linkTo: "/client/leave",
            linkIcon: "lnr lnr-briefcase pr-0  pr-lg-1",
            linkContent: "Leave",
          },
          {
            classContent: `mr-1 ${"/client/document" === url ? "active" : ""} `,
            linkTo: "/client/document",
            linkIcon: "lnr lnr-book pr-0  pr-lg-1",
            linkContent: "Document",
          },
        ];
        break;
      default:
        break;
    }
    return (
      <header className='header'>
        <div className='top-header-section'>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-lg-3 col-md-3 col-sm-3 col-6'>
                <div className='logo my-3 my-sm-0'>
                  <Link to='dashboard'>
                    <img
                      src={Logo}
                      alt='logo'
                      className='img-fluid'
                      width='100'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-lg-9 col-md-9 col-sm-9 col-6 text-right'>
                <div className='user-block d-none d-lg-block'>
                  <div className='row align-items-center'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                      
                      {/* <div className='user-notification-block align-right d-inline-block'>
                        <div className='top-nav-search item-animated'>
                          <form>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Search here'
                            />
                            <button className='btn' type='submit'>
                              <i className='fa fa-search'></i>
                            </button>
                          </form>
                        </div>
                      </div>

                      <div className='user-notification-block align-right d-inline-block'>
                        <ul className='list-inline m-0'>
                          <li
                            className='list-inline-item item-animated'
                            data-toggle='tooltip'
                            data-placement='top'
                            title=''
                            data-original-title='Apply Leave'>
                            <Link
                              to='leave'
                              className='font-23 menu-style text-white align-middle'>
                              <span className='lnr lnr-briefcase position-relative'></span>
                            </Link>
                          </li>
                        </ul>
                      </div> */}

                      <div className='user-info align-right dropdown d-inline-block header-dropdown'>
                        <a
                          href='#0'
                          data-toggle='dropdown'
                          className=' menu-style dropdown-toggle'>
                          {/* <div className='user-avatar d-inline-block'>
                            <img
                              src={avatar}
                              alt='user avatar'
                              className='rounded-circle img-fluid'
                              width='55'
                            />
                          </div> */}
                          <div className='user-avatar d-inline-block'>
                            {this.state.storedData.role === 'Employee' && <img src={avatar} alt='user avatar' className='rounded-circle img-fluid' width='55' />}
                            {this.state.storedData.role === 'Recruiter' && <img src={RECRUITER} alt='user avatar' className='rounded-circle img-fluid' width='55' />}
                            {this.state.storedData.role === 'Recruiter Manager' && <img src={RECRUITER_MANAGER} alt='user avatar' className='rounded-circle img-fluid' width='55' />}
                            {this.state.storedData.role === 'Client Manager' && <img src={CLIENT_MANAGER} alt='user avatar' className='rounded-circle img-fluid' width='55' />}
                            {this.state.storedData.role === 'Manager' && <img src={MANAGER} alt='user avatar' className='rounded-circle img-fluid' width='55' />}
                            {(this.state.storedData.role !== 'Recruiter Manager' && this.state.storedData.role !== 'Recruiter' && this.state.storedData.role !== 'Employee' && this.state.storedData.role !== 'Client Manager' && this.state.storedData.role !== 'Manager') &&
                              <img src={dummyAvatar} alt='user avatar' className='rounded-circle img-fluid' width='55' />}
                          </div>
                        </a>
                        <div className='dropdown-menu notification-dropdown-menu shadow-lg border-0 p-3 m-0 dropdown-menu-right'>
                          <Link className='dropdown-item p-2' to='employment'>
                            <span className='media align-items-center'>
                              <span className='lnr lnr-user mr-3'></span>
                              <span className='media-body text-truncate'>
                                <span className='text-truncate'>Profile</span>
                              </span>
                            </span>
                          </Link>
                          {/* <Link
                            className='dropdown-item p-2'
                            to='profile-settings'>
                            <span className='media align-items-center'>
                              <span className='lnr lnr-cog mr-3'></span>
                              <span className='media-body text-truncate'>
                                <span className='text-truncate'>Settings</span>
                              </span>
                            </span>
                          </Link> */}
                          <Link className='dropdown-item p-2' to='/login'>
                            <span className='media align-items-center'>
                              <span className='lnr lnr-power-switch mr-3'></span>
                              <span className='media-body text-truncate'>
                                <span className='text-truncate'>Logout</span>
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-block d-lg-none'>
                  <a href='#0'>
                    <span
                      className='lnr lnr-user d-block display-5 text-white'
                      id='open_navSidebar'></span>
                  </a>

                  <div className='offcanvas-menu' id='offcanvas_menu'>
                    <span
                      className='lnr lnr-cross float-left display-6 position-absolute t-1 l-1 text-white'
                      id='close_navSidebar'></span>
                    <div className='user-info align-center bg-theme text-center'>
                      <a href='#0' className='d-block menu-style text-white'>
                        <div className='user-avatar d-inline-block mr-3'>
                          <img
                            src={avatar}
                            alt='user avatar'
                            className='rounded-circle'
                            width='50'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='user-notification-block align-center'>
                      <div className='top-nav-search item-animated'>
                        <form>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Search here'
                          />
                          <button className='btn' type='submit'>
                            <i className='fa fa-search'></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    <hr />
                    <div className='user-menu-items px-3 m-0'>
                      <Link className='px-0 pb-2 pt-0' to='/'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-home mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Dashboard
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='employee'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-users mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Employees
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='company'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-apartment mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Company
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='calendar'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-calendar-full mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Calendar
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='leave'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-briefcase mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Leave
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='overview-reviews'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-star mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Document
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='reports'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-rocket mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Reports
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='manage'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-sync mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Manage
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='settings'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-cog mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Settings
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='profile-settings'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-user mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Profile
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='/'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-power-switch mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Logout
                            </span>
                          </span>
                        </span>
                      </Link>
                      {/* Recruiter */}
                      <Link className='p-2' to='/recruiter/recent-onboarding'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-power-switch mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Recruiter
                            </span>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='header-wrapper d-none d-sm-none d-md-none d-lg-block'>
          <div className='container-fluid'>
            <div className='row'>
              <div className={"col-12"}>
                <div className='header-menu-list d-flex bg-white rt_nav_header horizontal-layout nav-bottom'>
                  <div className='append mr-auto my-0 my-md-0 mr-auto'>
                    <ul className='list-group list-group-horizontal-md mr-auto'>
                      {navbar?.map((k) => {
                        return (
                          <li className={k.classContent}>
                            <Link
                              to={k.linkTo}
                              className='text-dark btn-ctm-space'>
                              <span className={k.linkIcon}></span>
                              <span className='text-truncate text-left'>
                                {k.linkContent}
                              </span>
                            </Link>
                          </li>
                        );
                      })}

                      {(localStorage.getItem("userRole") === "Recruiter" ||
                        localStorage.getItem("userRole") ===
                        "Recruiter Manager") && (
                          <li
                            className={`mr-1 ${("recruiter" === url) |
                              ("recent-onboarding" === url) |
                              ("new-onboarding" === url) |
                              ("onboarding-approval" === url) |
                              ("approval-history" === url) |
                              ("onboarding-approval-form" === url)
                              ? "active"
                              : ""
                              } `}>
                            <Link
                              to='/recruiter/recent-onboarding'
                              className='btn-ctm-space text-dark'>
                              <span className='lnr lnr-user pr-0  pr-lg-1'></span>
                              <span className='d-none d-lg-inline'>
                                Recruiter
                              </span>
                            </Link>
                          </li>
                        )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

import React, { Component } from "react";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
//
import IMG01 from "../../../assets/images/img-2.jpg";
import IMG02 from "../../../assets/images/img-3.jpg";
import IMG03 from "../../../assets/images/img-4.jpg";
import IMG04 from "../../../assets/images/img-5.jpg";
import IMG05 from "../../../assets/images/img-6.jpg";
import PROFILE_PHOTO from "../../../assets/images/Profile Photo.jpg";
import Abhay from "../../../assets/images/Abhay.png";
import Vivek from "../../../assets/images/Vivek.png";
import Krishna from "../../../assets/images/Krishna.png";

class EmployeeDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todayData: [
        // { icon: '1', message: 'No Birthday Today.', profile: '' },
        { icon: "2", message: "Krishna is off sick today", profile: Krishna },
        {
          icon: "3",
          message: "Abhay gupta is parenting leave today",
          profile: Abhay,
        },
        { icon: "4", message: "Vivek dubey is away today", profile: Vivek },
        {
          icon: "5",
          message: "Hemant is working from home today",
          profile: Abhay,
        },
      ],
      actionCenterData: [
        { message: "Current week timesheet.", status: "Pending" },
        { message: "Akshits leave approval.", status: "Pending" },
      ],
      informationCenter: [
        { message: "Your leave request have been approved." },
        { message: "Congratulation your referral got selected." },
      ],
      communicationCenterData: [
        { profilePhoto: IMG01, message: "Message from CEO" },
        { profilePhoto: Vivek, message: "Org Annoucement" },
        { profilePhoto: Abhay, message: "Festival wishesh" },
        { profilePhoto: Vivek, message: "Calling for referral" },
      ],
    };
  }

  render() {
    const data = this.props.location.pathname;
    console.log("data: ", data);
	console.log('here on the employee')

    return (
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <Sidebar
                url={data}
                employeeRole={"Employee"}
                employeeName={"Ashish"}
                profilePhoto={PROFILE_PHOTO}
              />
            </div>

            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='row'>
                {/* INFORMATION CENTER */}
                <div className='col-xl-6 col-lg-12 d-flex'>
                  <div className='card flex-fill today-list shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0 d-inline-block'>
                        Information Center
                      </h4>
                    </div>
                    <div className='card-body recent-activ'>
                      <div className='recent-comment'>
                        {this.state.informationCenter.map(
                          (item, index, array) => (
                            <div key={index}>
                              <div className='dash-card text-primary'>
                                <div className='dash-card-container'>
                                  <div className='dash-card-icon text-pink'>
                                    <i className='lnr lnr-envelope '></i>
                                  </div>
                                  <div className='dash-card-content'>
                                    <h6 className='mb-0'>{item.message}</h6>
                                  </div>
                                </div>
                              </div>
                              {index !== array.length - 1 && <hr />}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACTION CENTER */}
                <div className='col-xl-6 col-lg-12 d-flex'>
                  <div className='card flex-fill team-lead shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0 d-inline-block'>
                        Action Center{" "}
                      </h4>
                    </div>
                    <div className='card-body recent-activ'>
                      <div className='recent-comment'>
                        {this.state.actionCenterData.map(
                          (item, index, array) => (
                            <div key={index}>
                              <div className='media mb-3 dash-card text-primary'>
                                <div className='dash-card-container'>
                                  <div className='col-8 pr-0 dash-card-content'>
                                    <h6 className='m-0'>{item.message}</h6>
                                  </div>
                                  <div className='col-4 pl-0 dash-card-content'>
                                    <a href='#0'>
                                      <h6 className='m-0'>
                                        <strong>{item.status}</strong>
                                      </h6>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {index !== array.length - 1 && <hr />}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* COMMUNICATION CENTER */}
                <div className='col-xl-6 col-lg-12 d-flex'>
                  <div className='card recent-acti flex-fill shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0 d-inline-block'>
                        Communication Center
                      </h4>
                    </div>
                    <div className='card-body recent-activ admin-activ'>
                      <div className='recent-comment'>
                        {this.state.communicationCenterData.map(
                          (item, index, array) => (
                            <div key={index}>
                              <div className='notice-board'>
                                <div className='table-img'>
                                  <div className='e-avatar mr-3'>
                                    <img
                                      className='img-fluid'
                                      src={item.profilePhoto}
                                      alt='Maria Cotton'
                                    />
                                  </div>
                                </div>
                                <div className='notice-body'>
                                  <h6 className='mb-0'>{item.message}</h6>
                                </div>
                              </div>
                              {index !== array.length - 1 && <hr />}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* TODAY CARD */}
                <div className='col-xl-6 col-lg-12 d-flex'>
                  <div className='card shadow-sm flex-fill'>
                    <div className='card-header align-items-center'>
                      <h4 className='card-title mb-0 d-inline-block'>Today</h4>
                    </div>
                    <div className='card-body recent-activ'>
                      <div className='recent-comment'>
                        {this.state.todayData.map((item, index, array) => (
                          <div key={index}>
                            <a href='#0' className='dash-card text-dark'>
                              <div className='dash-card-container'>
                                <div className='dash-card-icon text-pink'>
                                  {item.icon == 1 && (
                                    <i
                                      className='fa fa-home'
                                      aria-hidden='true'></i>
                                  )}
                                  {item.icon == 2 && (
                                    <i
                                      className='fa fa-bed'
                                      aria-hidden='true'></i>
                                  )}
                                  {item.icon == 3 && (
                                    <i
                                      className='fa fa-child'
                                      aria-hidden='true'></i>
                                  )}
                                  {item.icon == 4 && (
                                    <i className='fa fa-suitcase'></i>
                                  )}
                                  {item.icon == 5 && (
                                    <i
                                      className='fa fa-home'
                                      aria-hidden='true'></i>
                                  )}
                                </div>
                                <div className='dash-card-content'>
                                  <h6 className='mb-0'>{item.message}</h6>
                                </div>
                                {item.profile && (
                                  <div className='dash-card-avatars'>
                                    <div className='e-avatar'>
                                      <img
                                        className='img-fluid'
                                        src={item.profile}
                                        alt='John Gibbs'
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </a>
                            {index !== array.length - 1 && <hr />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeDashboard;

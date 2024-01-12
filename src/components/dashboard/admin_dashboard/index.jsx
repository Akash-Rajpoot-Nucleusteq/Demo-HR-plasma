import React, { Component } from "react";
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';
import IMG02 from '../../../assets/images/img-2.jpg';
import IMG03 from '../../../assets/images/img-3.jpg';
import IMG04 from '../../../assets/images/img-4.jpg';
import IMG05 from '../../../assets/images/img-5.jpg';
//
import ChartEmployee from '../admin_dashboard/chartemployee';
import ChartSalary from '../admin_dashboard/chartsalary';
class AdminDashboard extends Component {
  render() {
    
    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                <Sidebar />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
            <div className="row">
            <div className="row">
								<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="card dash-widget ctm-border-radius shadow-sm">
										<div className="card-body">
											<div className="card-icon bg-primary">
												<i className="fa fa-users" aria-hidden="true"></i>
											</div>
											<div className="card-right">
												<h4 className="card-title">Employees</h4>
												<p className="card-text">700</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 col-12">
									<div className="card dash-widget ctm-border-radius shadow-sm">
										<div className="card-body">
											<div className="card-icon bg-warning">
												<i className="fa fa-building-o"></i>
											</div>
											<div className="card-right">
												<h4 className="card-title">Companies</h4>
												<p className="card-text">30</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 col-12">
									<div className="card dash-widget ctm-border-radius shadow-sm">
										<div className="card-body">
											<div className="card-icon bg-danger">
												<i className="fa fa-suitcase" aria-hidden="true"></i>
											</div>
											<div className="card-right">
												<h4 className="card-title">Leaves</h4>
												<p className="card-text">3</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 col-12">
									<div className="card dash-widget ctm-border-radius shadow-sm">
										<div className="card-body">
											<div className="card-icon bg-success">
												<i className="fa fa-money" aria-hidden="true"></i>
											</div>
											<div className="card-right">
												<h4 className="card-title">Salary</h4>
												<p className="card-text">$5.8M</p>
											</div>
										</div>
									</div>
								</div>
					  	 </div> 
               	{/*row */}
              
							<div className="row">
								<div className="col-xl-6 col-lg-12 col-md-6 d-flex">
									<div className="card ctm-border-radius shadow-sm flex-fill">
										<div className="card-header">
											<h4 className="card-title mb-0">Total Employees</h4>
										</div>
										<div className="card-body">
                         <ChartEmployee />
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-12 col-md-6 d-flex">
									<div className="card ctm-border-radius shadow-sm flex-fill">
										<div className="card-header">
											<h4 className="card-title mb-0">Total Salary By Unit</h4>
										</div>
										<div className="card-body">
                          <ChartSalary />
										</div>
									</div>
								</div>
							</div>
			      	{/*row */}
              <div className="row">
								<div className="col-xl-6 col-lg-12 col-md-12">
									<div className="card ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0 d-inline-block">Today</h4>
											<a href="#0" className="d-inline-block float-right text-primary">
                                                <i className="lnr lnr-sync"></i></a>
										</div>
										<div className="card-body recent-activ">
											<div className="recent-comment">
												<a href="#0" className="dash-card text-dark">
													<div className="dash-card-container">
														<div className="dash-card-icon text-primary">
															<i className="fa fa-birthday-cake" aria-hidden="true"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">No Birthdays Today</h6>
														</div>
													</div>
												</a>
												<hr />
												<a href="#0" className="dash-card text-dark">
													<div className="dash-card-container">
														<div className="dash-card-icon text-warning">
															<i className="fa fa-bed" aria-hidden="true"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Ralph Baker is off sick today</h6>
														</div>
														<div className="dash-card-avatars">
															<div className="e-avatar"><img className="img-fluid" src={IMG03} alt="Avatar" /></div>
														</div>
													</div>
												</a>
												<hr />
												<a href="#0" className="dash-card text-dark">
													<div className="dash-card-container">
														<div className="dash-card-icon text-success">
															<i className="fa fa-child" aria-hidden="true"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Ralph Baker is parenting leave today</h6>
														</div>
														<div className="dash-card-avatars">
															<div className="e-avatar"><img className="img-fluid" src={IMG02} alt="Avatar" /></div>
														</div>
													</div>
												</a>
												<hr />
												<a href="#0" className="dash-card text-dark">
													<div className="dash-card-container">
														<div className="dash-card-icon text-danger">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Danny ward is away today</h6>
														</div>
														<div className="dash-card-avatars">
															<div className="e-avatar"><img className="img-fluid" src={IMG03} alt="Avatar" /></div>
														</div>
													</div>
												</a>
												<hr />
												<a href="#0" className="dash-card text-dark">
													<div className="dash-card-container">
														<div className="dash-card-icon text-pink">
															<i className="fa fa-home" aria-hidden="true"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">You are working from home today</h6>
														</div>
														<div className="dash-card-avatars">
															<div className="e-avatar">
                                  <img className="img-fluid" src={IMG04} alt="Maria Cotton" /></div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-12 col-md-12 d-flex">
								
							
									    <div className="card flex-fill team-lead shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0 d-inline-block">Team Leads </h4>
											<Link to="employees-all" className="dash-card float-right mb-0 text-primary">Manage Team </Link>
										</div>
										<div className="card-body">
											<div className="media mb-3">
                                                <div className="e-avatar avatar-online mr-3"><img src={IMG03} 
                                            alt="Maria Cotton" className="img-fluid" /></div>
												<div className="media-body">
													<h6 className="m-0">Maria Cotton</h6>
													<p className="mb-0 ctm-text-sm">PHP</p>
												</div>
											</div>
											<hr />
											<div className="media mb-3">
												<div className="e-avatar avatar-online mr-3">
                                           <img className="img-fluid" src={IMG05} alt="Linda Craver" /></div>
												<div className="media-body">
													<h6 className="m-0">Danny Ward</h6>
													<p className="mb-0 ctm-text-sm">Design</p>
												</div>
											</div>
											<hr />
											<div className="media mb-3">
                                            <div className="e-avatar avatar-online mr-3"><img src={IMG04} 
                                            alt="Linda Craver" className="img-fluid" /></div>
												<div className="media-body">
													<h6 className="m-0">Linda Craver</h6>
													<p className="mb-0 ctm-text-sm">IOS</p>
												</div>
											</div>
											<hr />
											<div className="media mb-3">
                                                <div className="e-avatar avatar-online mr-3"><img className="img-fluid" 
                                                src={IMG03} alt="Linda Craver" /></div>
												<div className="media-body">
													<h6 className="m-0">Jenni Sims</h6>
													<p className="mb-0 ctm-text-sm">Android</p>
												</div>
											</div>
											<hr />
											<div className="media">
                                                <div className="e-avatar avatar-offline mr-3"><img className="img-fluid" 
                                                src={IMG02} alt="Linda Craver" /></div>
												<div className="media-body">
													<h6 className="m-0">John Gibbs</h6>
													<p className="mb-0 ctm-text-sm">Business</p>
												</div>
											</div>
										</div>
									</div>
								   </div>
								
								     <div className="col-lg-6 col-md-12 d-flex">
							
									<div className="card recent-acti flex-fill shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0 d-inline-block">Recent Activities</h4>
											<a href="#0" className="d-inline-block float-right text-primary"><i className="lnr lnr-sync"></i></a>
										</div>
										<div className="card-body recent-activ admin-activ">
											<div className="recent-comment">
												<div className="notice-board">
													<div className="table-img">
														<div className="e-avatar mr-3">
                                                    <img className="img-fluid" src={IMG05} alt="Danny Ward" /></div>
													</div>
													<div className="notice-body">
														<h6 className="mb-0">Lorem Ipsum dolor sit Amet.</h6>
														<span className="ctm-text-sm">Danny Ward | 1 hour ago</span>
													</div>
												</div>
												<hr />
												<div className="notice-board">
													<div className="table-img">
														<div className="e-avatar mr-3">
                                                        <img className="img-fluid" src={IMG02} alt="John Gibbs" /></div>
													</div>
													<div className="notice-body">
														<h6 className="mb-0">Lorem Ipsum dolor sit Amet.</h6>
														<span className="ctm-text-sm">John Gibbs | 2 hour ago</span>
													</div>
												</div>
												<hr />
												<div className="notice-board">
													<div className="table-img">
														<div className="e-avatar mr-3">
                                                  <img className="img-fluid" src={IMG03} alt="Maria Cotton" /></div>
													</div>
													<div className="notice-body">
														<h6 className="mb-0">Lorem Ipsum dolor sit Amet.</h6>
														<span className="ctm-text-sm">Maria Cotton | 4 hour ago</span>
													</div>
												</div>
												<hr />
												<div className="notice-board">
													<div className="table-img">
														<div className="e-avatar mr-3">
                                                       <img className="img-fluid" src={IMG04} alt="Linda Craver" /> </div>
													</div>
													<div className="notice-body">
														<h6 className="mb-0">Lorem Ipsum dolor sit Amet.</h6>
														<span className="ctm-text-sm">Linda Craver | 5 hour ago</span>
													</div>
												</div>
												<hr />
												<div className="notice-board">
													<div className="table-img">
														<div className="e-avatar mr-3"> 
                                                  <img className="img-fluid" src={IMG03} alt="Jenni Sims" /></div>
													</div>
													<div className="notice-body">
														<h6 className="mb-0">Lorem Ipsum dolor sit Amet.</h6>
														<span className="ctm-text-sm">Jenni Sims | 6 hour ago</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
						
								
								<div className="col-lg-6 col-md-12 d-flex">
								

									<div className="card flex-fill today-list shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0 d-inline-block">Your Upcoming Leave</h4>
											<Link to="leave" className="d-inline-block float-right text-primary"><i className="fa fa-suitcase"></i></Link>
										</div>
										<div className="card-body recent-activ">
											<div className="recent-comment">
												<a href="#0" className="dash-card text-danger">
													<div className="dash-card-container">
														<div className="dash-card-icon">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Mon, 16 Dec 2019</h6>
														</div>
													</div>
												</a>
												<hr />
												<a href="#0" className="dash-card text-primary">
													<div className="dash-card-container">
														<div className="dash-card-icon">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Fri, 20 Dec 2019</h6>
														</div>
													</div>
												</a>
												<hr />
												<a href="#0" className="dash-card text-primary">
													<div className="dash-card-container">
														<div className="dash-card-icon">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Wed, 25 Dec 2019</h6>
														</div>
													</div>
												</a>
												<hr />
												<a href="#0" className="dash-card text-primary">
													<div className="dash-card-container">
														<div className="dash-card-icon">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Fri, 27 Dec 2019</h6>
														</div>
													</div>
												</a>
												<hr />
												<a href="#0" className="dash-card text-primary">
													<div className="dash-card-container">
														<div className="dash-card-icon">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Tue, 31 Dec 2019</h6>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
              {/* row */}
             </div> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;

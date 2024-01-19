
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCurrentUserDetails } from '../../../authentication/auth';
const Sidebar = () => {

	const userDetails = getCurrentUserDetails();


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
											<Link to="dashboard" className="text-dark">Home</Link>
										</li>
										<li className="breadcrumb-item d-inline-block active">Asset</li>
									</ol>
									<h4 className="text-dark">Assets</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
				<div className="card-body">
					{userDetails.role === 'Manager' && (
						<>
							<NavLink exact to="/manager/timesheet" className="list-group-item text-center button-6" activeClassName="active">
								Your Timesheet
							</NavLink>
							<NavLink to="/manager/timesheet/pending" className="list-group-item text-center button-6" activeClassName="active">
								Pending Timesheet
							</NavLink>
							<NavLink to="/manager/timesheet/approved" className="list-group-item text-center button-6" activeClassName="active">
								Approved Timesheet
							</NavLink>
						</>
					)}

					{userDetails.role === 'Recruiter' && (
						<>
							<NavLink exact to="/recruiter/timesheet" className="list-group-item text-center button-6" activeClassName="active">
								Your Timesheet
							</NavLink>
							<NavLink to="/recruiter/timesheet/pending" className="list-group-item text-center button-6" activeClassName="active">
								Pending Timesheet
							</NavLink>
							<NavLink to="/recruiter/timesheet/approved" className="list-group-item text-center button-6" activeClassName="active">
								Approved Timesheet
							</NavLink>
						</>
					)}

					{userDetails.role === 'Recruiter Manager' && (
						<>
							<NavLink exact to="/recruiter/manager/timesheet" className="list-group-item text-center button-6" activeClassName="active">
								Your Timesheet
							</NavLink>
							<NavLink to="/recruiter/manager/timesheet/pending" className="list-group-item text-center button-6" activeClassName="active">
								Pending Timesheet
							</NavLink>
							<NavLink to="/recruiter/manager/timesheet/approved" className="list-group-item text-center button-6" activeClassName="active">
								Approved Timesheet
							</NavLink>
						</>
					)}

					{userDetails.role === 'Client Manager' && (
						<>
							<NavLink exact to="/client/timesheet" className="list-group-item text-center button-6" activeClassName="active">
								Your Timesheet
							</NavLink>
							<NavLink to="/client/timesheet/pending" className="list-group-item text-center button-6" activeClassName="active">
								Pending Timesheet
							</NavLink>
							<NavLink to="/client/timesheet/approved" className="list-group-item text-center button-6" activeClassName="active">
								Approved Timesheet
							</NavLink>
						</>
					)}
				</div>
			</div>
		</aside>
	);
};
export default Sidebar;
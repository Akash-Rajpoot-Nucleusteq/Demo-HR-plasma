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
					{userDetails.role === 'Employee' && (
						<>
							<NavLink to="/employee/assets" className="list-group-item text-center button-6" activeClassName="active">
								My Asset
							</NavLink>
						</>
					)}

					{userDetails.role === 'Manager' && (
						<>
							<NavLink exact to="/manager/assets" className="list-group-item text-center button-6" activeClassName="active">
								My Asset
							</NavLink>
							<NavLink to="/manager/assets/employee" className="list-group-item text-center button-6" activeClassName="active">
								Employee Asset
							</NavLink>
						</>
					)}

					{userDetails.role === 'Recruiter' && (
						<>
							<NavLink exact to="/recruiter/assets" className="list-group-item text-center button-6" activeClassName="active">
								My Asset
							</NavLink>
							<NavLink to="/recruiter/assets/employee" className="list-group-item text-center button-6" activeClassName="active">
								Employee Asset
							</NavLink>
						</>
					)}

					{userDetails.role === 'Recruiter Manager' && (
						<>
							<NavLink exact to="/recruiter/manager/assets" className="list-group-item text-center button-6" activeClassName="active">
								My Asset
							</NavLink>
							<NavLink to="/recruiter/manager/assets/employee" className="list-group-item text-center button-6" activeClassName="active">
								Employee Asset
							</NavLink>
						</>
					)}

					{userDetails.role === 'Client Manager' && (
						<>
							<NavLink exact to="/client/assets" className="list-group-item text-center button-6" activeClassName="active">
								My Asset
							</NavLink>
							<NavLink to="/client/assets/employee" className="list-group-item text-center button-6" activeClassName="active">
								Employee Asset
							</NavLink>
						</>
					)}

				</div>
			</div>
		</aside>
	);
};
export default Sidebar;
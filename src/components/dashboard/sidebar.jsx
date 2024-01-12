// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// import IMG01 from '../../assets/images/img-13.jpg';
// import PROFILE_PHOTO from '../../assets/images/Profile Photo.jpg'

// const Sidebar = ({ url, employeeRole, employeeName, profilePhoto }) => {
// 	const today = new Date();
// 	const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(today);

// 	const totalSickLeave = 7;
// 	const sickLeavesConsumed = 1;
// 	const sickLeavesRemaining = totalSickLeave - sickLeavesConsumed;

// 	const consumptionPercentage = (sickLeavesConsumed / totalSickLeave) * 100;
// 	const ringRadius = 40;
// 	const circumference = 2 * Math.PI * ringRadius;
// 	const dashOffset = circumference - (consumptionPercentage / 100) * circumference;

// 	const totalPaidLeave = 18;
// 	const leavesAddedAfterMonth = 1.5;
// 	const totalPaidLeaveAfterMonth = totalPaidLeave + leavesAddedAfterMonth;

// 	const consumedPaidLeave = 2;
// 	const remainingPaidLeave = totalPaidLeaveAfterMonth - consumedPaidLeave;

// 	const paidRingRadius = 40;
// 	const paidCircumference = 2 * Math.PI * paidRingRadius;
// 	const paidConsumptionPercentage = (consumedPaidLeave / totalPaidLeaveAfterMonth) * 100;
// 	const paidDashOffset = paidCircumference - (paidConsumptionPercentage / 100) * paidCircumference;


// 	return (

// 		<aside className="sidebar sidebar-user">
// 			<div className="card ctm-border-radius shadow-sm">
// 				<div className="card-body py-4">
// 					<div className="row">
// 						<div className="col-md-12 mr-auto text-left">
// 							<div className="custom-search input-group">
// 								<div className="custom-breadcrumb">
// 									<ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
// 										<li className="breadcrumb-item d-inline-block"><Link to="dashboard" className="text-dark">Home</Link></li>
// 										<li className="breadcrumb-item d-inline-block active">Dashboard</li>
// 									</ol>
// 									<h4 className="text-dark">{employeeRole} Dashboard</h4>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<div className="user-card card shadow-sm bg-white text-center ctm-border-radius">
// 				<div className="user-info card-body">
// 					<div className="user-avatar mb-4">
// 						<img src={profilePhoto} alt="User Avatar"
// 							className="img-fluid rounded-circle" width="100" />
// 					</div>
// 					<div className="user-details">
// 						<h4><b>Welcome {employeeName}</b></h4>
// 						<p>Employee Id - N0001</p>
// 						<p>{formattedDate}</p>
// 					</div>
// 				</div>
// 			</div>
// 			{/* <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
// 				<div className="card-body">

// 					<NavLink to="dashboard" className="list-group-item text-center button-6" activeClassName="active" exact>Appointments</NavLink>

// 					<NavLink to="employee-dashboard" className="list-group-item text-center button-6">Employees Dashboard</NavLink>

// 				</div>
// 			</div> */}


// 			<div className="card shadow-sm">
// 				<div className="card-header">
// 					<h4 className="card-title mb-0 d-inline-block">Today's Quote</h4>
// 				</div>
// 				<div className="card-body text-center">
// 					<h6>Time is the best teacher.</h6>
// 				</div>
// 			</div>

// 				{/* <div className="card shadow-sm">
// 					<div className="card-header">
// 						<h4 className="card-title mb-0 d-inline-block">Leave</h4>
// 						<Link to="leave" className="d-inline-block float-right text-primary"><i className="fa fa-suitcase"></i></Link>
// 					</div>
// 					<div className="card-body text-center">
// 						<div className="time-list">
// 							<div className="dash-stats-list">
// 								<span className="btn btn-outline-primary">4.5 Days</span>
// 								<p className="mb-0">Taken</p>
// 							</div>
// 							<div className="dash-stats-list">
// 								<span className="btn btn-outline-primary">7.5 Days</span>
// 								<p className="mb-0">Remaining</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div></> */}

// 			<div className="card ctm-border-radius shadow-sm mt-4 text-center card-body py-4">
// 					<div className="card-header">
// 						<h4 className="card-title mb-0 d-inline-block">Leave</h4>
// 						<Link to="leave" className="d-inline-block float-right text-primary"><i className="fa fa-suitcase"></i></Link>
// 					</div>

// 					<div className="ring-container card-body text-center">
// 						<svg height="100" width="100" className="ring-svg">
// 							<circle
// 								cx="50"
// 								cy="50"
// 								r={ringRadius}
// 								fill="transparent"
// 								stroke="#55c57a"
// 								strokeWidth="8"
// 							/>
// 							<circle
// 								cx="50"
// 								cy="50"
// 								r={ringRadius}
// 								fill="transparent"
// 								stroke="#f0f0f0"
// 								strokeWidth="8"
// 								strokeDasharray={circumference}
// 								strokeDashoffset={dashOffset}
// 								strokeLinecap="round"
// 							/>
// 							<text x="50" y="50" textAnchor="middle" fill="#000" fontSize="16">
// 								{sickLeavesRemaining}
// 							</text>
// 						</svg>
// 					</div>
// 					<p className="leaves-text">Consumed: {sickLeavesConsumed} | Remaining: {sickLeavesRemaining}</p>
// 					<p className="leaves-text">Total Leaves: {totalSickLeave}</p>
// 				</div>

// 		</aside>
// 	);
// };

// export default Sidebar;




import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import IMG01 from '../../assets/images/img-13.jpg';
import PROFILE_PHOTO from '../../assets/images/Profile Photo.jpg'
import RECRUITER from '../../assets/images/Prachi.png'
import RECRUITER_MANAGER from '../../assets/images/Ankita.png'

const Sidebar = ({ url, employeeRole, employeeName, profilePhoto, employeeId }) => {
	const today = new Date();
	const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(today);

	const totalSickLeave = 7;
	const sickLeavesConsumed = 1;
	const sickLeavesRemaining = totalSickLeave - sickLeavesConsumed;

	const consumptionPercentage = (sickLeavesConsumed / totalSickLeave) * 100;
	const ringRadius = 40;
	const circumference = 2 * Math.PI * ringRadius;
	const dashOffset = circumference - (consumptionPercentage / 100) * circumference;

	const totalPaidLeave = 18;
	const leavesAddedAfterMonth = 1.5;
	const totalPaidLeaveAfterMonth = totalPaidLeave + leavesAddedAfterMonth;

	const consumedPaidLeave = 2;
	const remainingPaidLeave = totalPaidLeaveAfterMonth - consumedPaidLeave;

	const paidRingRadius = 40;
	const paidCircumference = 2 * Math.PI * paidRingRadius;
	const paidConsumptionPercentage = (consumedPaidLeave / totalPaidLeaveAfterMonth) * 100;
	const paidDashOffset = paidCircumference - (paidConsumptionPercentage / 100) * paidCircumference;


	return (

		<aside className="sidebar sidebar-user">
			<div className="card ctm-border-radius shadow-sm">
				<div className="card-body py-4">
					<div className="row">
						<div className="col-md-12 mr-auto text-left">
							<div className="custom-search input-group">
								<div className="custom-breadcrumb">
									<ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
										<li className="breadcrumb-item d-inline-block"><Link to="dashboard" className="text-dark">Home</Link></li>
										<li className="breadcrumb-item d-inline-block active">Dashboard</li>
									</ol>
									<h4 className="text-dark">Dashboard</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="user-card card shadow-sm bg-white text-center ctm-border-radius">
				<div className="user-info card-body">
					<div className="user-avatar mb-4">
						<img src={profilePhoto} alt="User Avatar" className="img-fluid rounded-circle" width="100" />
					</div>
					<div className="user-details">
						<h4><b>Welcome {employeeName}</b></h4>
						<p>Employee Id - {employeeId}</p>
						<p>{formattedDate}</p>
					</div>
				</div>
			</div>
			{/* <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
				<div className="card-body">

					<NavLink to="dashboard" className="list-group-item text-center button-6" activeClassName="active" exact>Appointments</NavLink>

					<NavLink to="employee-dashboard" className="list-group-item text-center button-6">Employees Dashboard</NavLink>

				</div>
			</div> */}


			<div className="card shadow-sm">
				<div className="card-header">
					<h4 className="card-title mb-0 d-inline-block">Today's Quote</h4>
				</div>
				<div className="card-body text-center">
					<h6>Time is the best teacher.</h6>
				</div>
			</div>

			{/* <div className="card shadow-sm">
					<div className="card-header">
						<h4 className="card-title mb-0 d-inline-block">Leave</h4>
						<Link to="leave" className="d-inline-block float-right text-primary"><i className="fa fa-suitcase"></i></Link>
					</div>
					<div className="card-body text-center">
						<div className="time-list">
							<div className="dash-stats-list">
								<span className="btn btn-outline-primary">4.5 Days</span>
								<p className="mb-0">Taken</p>
							</div>
							<div className="dash-stats-list">
								<span className="btn btn-outline-primary">7.5 Days</span>
								<p className="mb-0">Remaining</p>
							</div>
						</div>
					</div>
				</div></> */}

			<div className="card ctm-border-radius shadow-sm mt-4 text-center card-body py-4">
				<div className="card-header">
					<h4 className="card-title mb-0 d-inline-block">Leave</h4>
					<Link to="leave" className="d-inline-block float-right text-primary"><i className="fa fa-suitcase"></i></Link>
				</div>

				<div className="ring-container card-body text-center">
					<svg height="100" width="100" className="ring-svg">
						<circle
							cx="50"
							cy="50"
							r={ringRadius}
							fill="transparent"
							stroke="#55c57a"
							strokeWidth="8"
						/>
						<circle
							cx="50"
							cy="50"
							r={ringRadius}
							fill="transparent"
							stroke="#f0f0f0"
							strokeWidth="8"
							strokeDasharray={circumference}
							strokeDashoffset={dashOffset}
							strokeLinecap="round"
						/>
						<text x="50" y="50" textAnchor="middle" fill="#000" fontSize="16">
							{sickLeavesRemaining}
						</text>
					</svg>
				</div>
				<p className="leaves-text">Consumed: {sickLeavesConsumed} | Remaining: {sickLeavesRemaining}</p>
				<p className="leaves-text">Total Leaves: {totalSickLeave}</p>
			</div>

		</aside>
	);
};

export default Sidebar;
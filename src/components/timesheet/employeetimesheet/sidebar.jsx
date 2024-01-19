import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCurrentUserDetails } from '../../../authentication/auth';


const EmployeeTimesheetSidebar = () => {
    const userDetails = getCurrentUserDetails();

    const [show, setShow] = useState(null);

    const [selectedWeek, setSelectedWeek] = useState(new Date());
    const weekList = [
        { date: '2024-01-01', status: 'Submitted' },
        { date: '2023-12-27', status: 'Approved' },
        { date: '2023-12-22', status: 'Not Submitted' },
        { date: '2023-12-15', status: 'Pending' },
        { date: '2023-12-04', status: 'Pending' },
    ];
    const handleWeekSelection = (date) => {
        setSelectedWeek(new Date(date));
    };
    const getStatusBadgeClass = (status, date) => {
        const weekDate = new Date(date);
        const today = new Date();
        if (weekDate.toDateString() === today.toDateString()) {
            return 'badge-primary';
        } else {
            return getStatusBadge(status);
        }
    };
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Submitted':
                return 'badge-success';
            case 'Pending':
                return 'badge-warning';
            case 'Approved':
                return 'badge-primary';
            default:
                return 'badge-danger';
        }
    };
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
                                            <Link to="admin" className="text-dark">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item d-inline-block active">Timesheet</li>
                                    </ol>
                                    <h4 className="text-dark">Timesheet</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                <div className="card-body">
                    {/* Modify the NavLink paths */}
                    {userDetails.role === 'Employee' && (
                        <>
                            <NavLink to="/employee/timesheet" className="list-group-item text-center button-6" activeClassName="active">
                                Your Timesheet
                            </NavLink>
                        </>
                    )}

                    {userDetails.role === 'Manager' && (
                        <>
                            <NavLink to="/manager/timesheet" className="list-group-item text-center button-6" activeClassName="active">
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
                            <NavLink to="recruiter/timesheet/approved" className="list-group-item text-center button-6" activeClassName="active">
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
                            <NavLink to="recruiter/manager/timesheet/approved" className="list-group-item text-center button-6" activeClassName="active">
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
            <div className="card ctm-border-radius shadow-sm mt-4">
                <div className="card-body py-4">
                    <h5 className="card-title">Previous TimeSheets</h5>
                    <ul className="list-group">
                        {weekList.map((week, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center"
                                onClick={() => handleWeekSelection(week.date)}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>{week.date}</span>
                                <span className={`badge ${getStatusBadgeClass(week.status, week.date)}`}>
                                    {week.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
};
export default EmployeeTimesheetSidebar;
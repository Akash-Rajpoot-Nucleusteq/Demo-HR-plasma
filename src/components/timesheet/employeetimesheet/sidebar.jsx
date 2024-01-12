import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeTimesheetSidebar = () => {
    const [show, setShow] = useState(null);
    const [selectedWeek, setSelectedWeek] = useState(new Date()); // State to store the selected week

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

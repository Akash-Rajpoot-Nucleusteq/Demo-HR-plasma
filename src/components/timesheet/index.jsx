import React, { Component } from 'react';
import Sidebar from './sidebar';
import { Modal } from 'react-bootstrap';

class TimesheetPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingTimesheetData: [
                {
                    sno: 1,
                    assigneeName: 'John Doe',
                    period: 'January 2023',
                    hoursSubmitted: 40,
                    clientName: 'ABC Corp',
                    businessUnit: 'Sales',
                    project: 'Project X',
                    task: 'Task A',
                },
                
            ],
            approvedTimesheetData: [
                {
                    sno: 1,
                    assigneeName: 'Alice Smith',
                    period: 'February 2023',
                    hoursSubmitted: 35,
                    clientName: 'XYZ Inc',
                    businessUnit: 'Marketing',
                    project: 'Project Y',
                    task: 'Task B',
                    status: 'Approved',
                },
                
            ],
            activeTab: 'approved', 
        };
    }

    handleTabChange = (tab) => {
        
        this.setState({ activeTab: tab });
    };

    handleApproveDeny = (index) => {
        
       
    };


    render() {
        const { pendingTimesheetData, approvedTimesheetData, activeTab } = this.state;

        const pendingTimesheetColumns = [
            
            { title: 'S.No', dataIndex: 'sno', key: 'sno' },
            { title: 'Assignee Name', dataIndex: 'assigneeName', key: 'assigneeName' },
            { title: 'Period (Week)', dataIndex: 'period', key: 'period' },
            { title: 'Hours Submitted', dataIndex: 'hoursSubmitted', key: 'hoursSubmitted' },
            { title: 'Client Name', dataIndex: 'clientName', key: 'clientName' },
            { title: 'Business Unit', dataIndex: 'businessUnit', key: 'businessUnit' },
            { title: 'Project', dataIndex: 'project', key: 'project' },
            { title: 'Task', dataIndex: 'task', key: 'task' },
            {
                title: 'Action',
                key: 'action',
                render: (text, record, index) => (
                    <Button onClick={() => this.handleApproveDeny(index)}>
                        Approve/Deny
                    </Button>
                ),
            },
        ];

        const approvedTimesheetColumns = [
            
            { title: 'S.No', dataIndex: 'sno', key: 'sno' },
            { title: 'Assignee Name', dataIndex: 'assigneeName', key: 'assigneeName' },
            { title: 'Period (Week)', dataIndex: 'period', key: 'period' },
            { title: 'Hours Submitted', dataIndex: 'hoursSubmitted', key: 'hoursSubmitted' },
            { title: 'Client Name', dataIndex: 'clientName', key: 'clientName' },
            { title: 'Business Unit', dataIndex: 'businessUnit', key: 'businessUnit' },
            { title: 'Project', dataIndex: 'project', key: 'project' },
            { title: 'Task', dataIndex: 'task', key: 'task' },
            { title: 'Status', dataIndex: 'status', key: 'status' },
        ];

        const pendingDataToRender = pendingTimesheetData.map((row, index) => ({
            ...row,
            key: index,
        }));

        const approvedDataToRender = approvedTimesheetData.map((row, index) => ({
            ...row,
            key: index,
        }));

        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <Sidebar />
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            {/* Timesheet Table */}
                        {activeTab==='pending' && ( <div className="card ctm-border-radius shadow-sm">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Pending Timesheet Table</h4>
                        </div>
                        <div className="card-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                {pendingTimesheetColumns.map((column) => (
                                                    <th key={column.key}>{column.title}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pendingDataToRender.map((row) => (
                                                <tr key={row.key}>
                                                    {pendingTimesheetColumns.map((column) => (
                                                        <td key={column.key}>{row[column.dataIndex]}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>)}
                            {activeTab === "approved" && (
                                <div className="card ctm-border-radius shadow-sm mt">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Approved Timesheets Table</h4>
                                </div>
                                <div className="card-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                {approvedTimesheetColumns.map((column) => (
                                                    <th key={column.key}>{column.title}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {approvedDataToRender.map((row) => (
                                                <tr key={row.key}>
                                                    {approvedTimesheetColumns.map((column) => (
                                                        <td key={column.key}>{row[column.dataIndex]}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                    </div>
                            )}
                    {/* End of Timesheet Table */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimesheetPage;

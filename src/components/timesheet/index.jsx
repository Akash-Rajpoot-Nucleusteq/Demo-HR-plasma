import React, { useState } from 'react';
import TimesheetSidebar from './sidebar';
import { useLocation, Switch, Route } from 'react-router-dom';
import { Table } from 'antd';



const PendingTimesheetPage = () => {
    
    const pendingTimesheetData = [
        {
            sno: 1,
            assigneeName: 'John Doe',
            period: '1st January 2024',
            hoursSubmitted: 40,
            clientName: 'ABC Corp',
            businessUnit: 'Sales',
            project: 'Project X',
            task: 'Task A',
        },
        {
            sno: 2,
            assigneeName: 'Jane Smith',
            period: '1st January 2024',
            hoursSubmitted: 45,
            clientName: 'DEF Ltd',
            businessUnit: 'Marketing',
            project: 'Project Z',
            task: 'Task C',
        },
        {
            sno: 3,
            assigneeName: 'Alex Johnson',
            period: '26 December 2023',
            hoursSubmitted: 55,
            clientName: 'GHI Corporation',
            businessUnit: 'Finance',
            project: 'Project Y',
            task: 'Task D',
        },
        {
            sno: 4,
            assigneeName: 'Emily Davis',
            period: '8th January 2023',
            hoursSubmitted: 30,
            clientName: 'JKL Enterprises',
            businessUnit: 'Operations',
            project: 'Project W',
            task: 'Task E',
        },
    ];
    
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
            title: 'Status',
            dataIndex: 'Status',
            render: (text, record) => (
                <a href="#0" className="btn btn-theme ctm-border-radius text-white btn-sm">Approved</a>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            render: (text, record) => (
                <a href="#0" className="btn btn-danger ctm-border-radius text-white btn-sm" onClick={() => this.handleShow()}>
                    {/* <span className="lnr lnr-trash"></span>*/} Reject
                </a>
            ),
        },
        {
            title: 'view',
            dataIndex: 'view',
            render: (text, record) => (
                <a href="#0" className="btn btn-info ctm-border-radius text-white btn-sm">View</a>
            ),
        },
    ];
    
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <TimesheetSidebar />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-12">
                       
                        <div className="card ctm-border-radius shadow-sm">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Pending Timesheet Table</h4>
                            </div>
                            <div className="card-body table-scroll">

                                <Table className="table-striped"
                                    style={{ overflowX: 'auto' }}
                                    columns={pendingTimesheetColumns}
                                    // bordered
                                    dataSource={pendingTimesheetData}
                                    rowKey={record => record.id}
                                    pagination={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PendingTimesheetPage;
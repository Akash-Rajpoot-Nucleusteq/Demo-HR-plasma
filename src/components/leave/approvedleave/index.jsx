import React, { useState } from "react";
import { Table } from 'antd';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import IMG01 from '../../../assets/images/Krishna.png';
import IMG02 from '../../../assets/images/Profile Photo.jpg';
import IMG04 from '../../../assets/images/Vivek.png';

const ApprovedLeaves = () => {
    const data = [
        { id: 1, image: IMG01, Employee: 'Krishna ', Leave: 'Paid Leave', From: '05 Dec 2019', To: '07 Dec 2019', Days: '3', Remaining: '9', Notes: 'Parenting Leave', Status: 'approved' },
        { id: 2, image: IMG02, Employee: 'Ashish Kumar Sahu', Leave: 'Sick Leave', From: '05 Dec 2019', To: '07 Dec 2019', Days: '3', Remaining: '9', Notes: 'Parenting Leave', Status: 'approved' },
        { id: 3, image: IMG04, Employee: 'Vivek Dubey', Leave: 'Casual Leave', From: '05 Dec 2019', To: '07 Dec 2019', Days: '3', Remaining: '9', Notes: 'Parenting Leave', Status: 'approved' },
    ];

    const columns = [
        {
            title: 'Team Member',
            dataIndex: 'Employee',
            render: (text, record) => (
                <>
                    <Link to="employment" className="avatar avatar-sm mr-2"><img alt="" src={record.image} /></Link>
                    <h2 className="table-avatar"><Link to="employment">{text}</Link></h2>
                </>
            ),
        },

        {
            title: 'Leave Type',
            dataIndex: 'Leave',
        },
        {
            title: 'From',
            dataIndex: 'From',
        },
        {
            title: 'To',
            dataIndex: 'To',
        },
        {
            title: 'Remaining Days',
            dataIndex: 'Days',
        },
        {
            title: 'Status',
            dataIndex: 'Status',
           
        },
    ]

    return (
        <>
          <Table
            className="table-striped"
            style={{ overflowX: 'auto' }}
            columns={columns}
            dataSource={data}
            rowKey={record => record.id}
            pagination={false}
          />
        </>
    )  
}

export default ApprovedLeaves;
import React, { useState } from "react";
import { Table } from 'antd';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import IMG01 from '../../../assets/images/Krishna.png';
import IMG02 from '../../../assets/images/Profile Photo.jpg';
import IMG04 from '../../../assets/images/Vivek.png';

const Todayleaves = () => {
  const [showTable, setShowTable] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }

  const handleShow = () => {
    setShow(true);
  }

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
    // {
    //   title: 'Remaining Days',
    //   dataIndex: 'Notes',
    // },
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
        <a href="#0" className="btn btn-danger ctm-border-radius text-white btn-sm" onClick={handleShow}>
          {/* <span className="lnr lnr-trash"></span>*/} Reject
        </a>
      ),
    },
  ];

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

      {/* Delete team modal*/}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h4 className="modal-title mb-4">Are You Sure Want to Delete?</h4>
        </Modal.Header>
        <Modal.Body>
          <button type="button" className="btn btn-danger ctm-border-radius text-center mb-2 mr-3" data-dismiss="modal" onClick={handleClose}>Cancel</button>
          <button type="button" className="btn btn-theme button-1 ctm-border-radius text-white text-center mb-2" data-dismiss="modal">Delete</button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Todayleaves;

import React, {useState} from "react";
import SideBar from "../sideBar";
import { Table } from "antd";
import {  Modal } from "react-bootstrap";
import EmployeeDetailModal from "../employee-detail/index";

 const Allocation = () => {
  const columns = [
    {
      title: "S.no",
      dataIndex: "sNo",
      key: "sNo",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Middle Name",
      dataIndex: "middleName",
      key: "middleName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Start Date Customer",
      dataIndex: "startDateCustomer",
      key: "startDateCustomer",
    },
    {
      title: "Client Partner",
      dataIndex: "clientPartner",
      key: "clientPartner",
    },
    {
      title: "Engagement",
      dataIndex: "engagement",
      key: "engagement",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },

    {
      title: 'View',
      dataIndex: 'view',
      render: (text, record) => (
        <a href="#0" className="btn btn-theme ctm-border-radius text-white btn-sm" onClick={handleRowClick}>Detail</a>
      ),
    },
  ];

  const dummyData = [
    {
      id: 1,
      sNo: 1,
      firstName: "John",
      middleName: "Doe",
      lastName: "Smith",
      startDateCustomer: "2022-01-01",
      clientPartner: "Alice Johnson",
      engagement: "Project X",
      status: "Active",
    },
    {
      id: 2,
      sNo: 2,
      firstName: "Jane",
      middleName: "M.",
      lastName: "Doe",
      startDateCustomer: "2022-02-15",
      clientPartner: "Bob Williams",
      engagement: "Project Y",
      status: "Inactive",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

 

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedEmployee(null);
  };

  return (
    <div className='page-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
            <SideBar/>
          </div>
          <div className='col-xl-9 col-lg-8  col-md-12'>
            <div className='card shadow-sm ctm-border-radius'>
              <div className='card-body align-center'>
                <div className='tab-content' id='v-pills-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='v-pills-home'
                    role='tabpanel'
                    aria-labelledby='v-pills-home-tab'></div>
                  <div className='employee-office-table'>
                    <div className='table-responsive'>
                      <Table
                        className='table-striped'
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        dataSource={dummyData}
                        rowKey={(record) => record.id}
                        pagination={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Detail Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {selectedEmployee && (
            <EmployeeDetailModal employee={selectedEmployee} />
        )}
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-theme button-1 ctm-border-radius text-white text-center mb-2"
            onClick={handleModalClose}
          >
            Back
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Allocation;

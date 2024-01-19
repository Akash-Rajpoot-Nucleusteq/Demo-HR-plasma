
import React, { useState } from "react";
import SideBar from "../account-management/sideBar";
import { Table, Modal, Row, Col } from "react-bootstrap";
import AvailablePoolAllocation from "./available-pool-allocation/index";
import EmployeeDetailModal from "./employee-detail/index";

export const AccountManagementRecentOnboarding = () => {
  const dummyData = [
    // Your data here
        {
            Sno: 1,
            firstName: "Diksha",
            lastName: "Mandal",
            clientName: "--",
            clientManager: "--",
            clientPartner: "--",
            engagementManager: "HRM",
            joiningDate: "17 July 2023",
            status: "Active",
          },
          {
            Sno: 2,
            firstName: "Ashish",
            lastName: "Sahu",
            clientName: "--",
            clientManager: "--",
            clientPartner: "--",
            engagementManager: "HRM",
            joiningDate: "12 December 2023",
            status: "Active",
          },
          {
            Sno: 3,
            firstName: "Akash",
            lastName: "Rajpoot",
            clientName: "--",
            clientManager: "--",
            clientPartner: "--",
            engagementManager: "HRM",
            joiningDate: "17 July 2023",
            status: "Active",
          },
          {
            Sno: 4,
            firstName: "Anushree",
            lastName: "Das",
            clientName: "--",
            clientManager: "--",
            clientPartner: "--",
            engagementManager: "HRM",
            joiningDate: "10 January 2024",
            status: "Active",
          },
          {
            Sno: 5,
            firstName: "Priya",
            lastName: "Dubey",
            clientName: "--",
            clientManager: "--",
            clientPartner: "--",
            engagementManager: "HRM",
            joiningDate: "23 September 2023",
            status: "Active",
          },
  ];

  const [showEmployeeDetailModal, setShowEmployeeDetailModal] = useState(false);
  const [showAvailablePoolModal, setShowAvailablePoolModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
    setShowEmployeeDetailModal(true);
  };

  const handleApproveClick = () => {
    setShowEmployeeDetailModal(false);
    setShowAvailablePoolModal(true);
  };

  const handleEmployeeDetailModalClose = () => {
    setShowEmployeeDetailModal(false);
    setSelectedEmployee(null);
  };

  const handleAvailablePoolModalClose = () => {
    setShowAvailablePoolModal(false);
  };

  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
            <SideBar />
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12">
            <div className="card shadow-sm ctm-border-radius">
              <div className="card-body align-center">
                <div className="employee-office-table">
                  <div className="table-responsive">
                    <Table striped bordered hover className="table-responsive ctm-border-radius text-center">
                      <thead>
                        <tr>
                          <th>S. N.</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Client Name</th>
                          <th>Client Manager</th>
                          <th>Client Partner</th>
                          <th>Engagement Manager</th>
                          <th>Joining Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dummyData.map((data, index) => (
                          <tr key={index} onClick={() => handleRowClick(data)}>
                            <td>{index + 1}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.clientName}</td>
                            <td>{data.clientManager}</td>
                            <td>{data.clientPartner}</td>
                            <td>{data.engagementManager}</td>
                            <td>{data.joiningDate}</td>
                            <td>{data.status}</td>
                            <td>
                              <button
                                className="btn btn-theme button-1 ctm-border-radius text-white text-center mb-2"
                                onClick={handleApproveClick}
                              >
                                Approve
                              </button>
                            </td>
                          </tr>
                          
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional rendering for Employee Detail Modal */}
      {showEmployeeDetailModal && !showAvailablePoolModal && (
        <Modal show={true} onHide={handleEmployeeDetailModalClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Employee Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedEmployee && <EmployeeDetailModal />}
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-theme button-1 ctm-border-radius text-white text-center mb-2"
              onClick={handleEmployeeDetailModalClose}
            >
              Back
            </button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Conditional rendering for Available Pool Allocation Modal */}
      {showAvailablePoolModal  && (
        <Modal show={true} onHide={handleAvailablePoolModalClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Available Pool Allocation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {selectedEmployee && <EmployeeDetailModal />}
            <AvailablePoolAllocation />
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-theme button-1 ctm-border-radius text-white text-center mb-2"
              onClick={handleAvailablePoolModalClose}
            >
              Back
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};


import React from "react";
import SideBar from "../account-management/sideBar";
import { Table } from "antd";
import { Toggle } from "./toggle/toggle";
 const Customer = () => {
  const dummyData = [
    {
      SNo: 1,
      customerName: "ABC Corp",
      businessUnit: "Finance",
      project: "Financial Analysis",
      customerManager: "Alice Smith",
      engagementStatus: "Active",
    },
    {
      SNo: 2,
      customerName: "XYZ Ltd",
      businessUnit: "Technology",
      project: "Software Development",
      customerManager: "Bob Johnson",
      engagementStatus: "Inactive",
    },
    {
      SNo: 3,
      customerName: "LMN Inc",
      businessUnit: "Marketing",
      project: "Product Launch",
      customerManager: "Charlie Wilson",
      engagementStatus: "Pending",
    },
    {
      SNo: 4,
      customerName: "PQR Co",
      businessUnit: "Operations",
      project: "Supply Chain Optimization",
      customerManager: "David White",
      engagementStatus: "Active",
    },
    {
      SNo: 5,
      customerName: "JKL Ltd",
      businessUnit: "Human Resources",
      project: "Employee Training",
      customerManager: "Eva Brown",
      engagementStatus: "Inactive",
    },
  ];

  const columns = [
    {
      title: "SNo",
      dataIndex: "SNo",
      key: "SNo",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Business Unit",
      dataIndex: "businessUnit",
      key: "businessUnit",
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Customer Manager",
      dataIndex: "customerManager",
      key: "customerManager",
    },
    {
      title: "Engagement Status",
      dataIndex: "engagementStatus",
      key: "engagementStatus",
    },
  ];

  return (
    <div className='page-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
            <SideBar />
          </div>
          <div className='col-xl-9 col-lg-8  col-md-12'>
            <Toggle />
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
    </div>
  );
};
export default Customer;
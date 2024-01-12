import React from "react";
import SideBar from "../account-management/sideBar";
import { Table } from "antd";

export const AccountManagementRecentOnboarding = () => {
  const dummyData = [
    {
      Sno: 1,
      firstName: "John",
      lastName: "Doe",
      clientName: "ABC Corp",
      clientManager: "Alice Smith",
      clientPartner: "Bob Johnson",
      engagementManager: "Eva Brown",
      status: "Active",
    },
    {
      Sno: 2,
      firstName: "Jane",
      lastName: "Smith",
      clientName: "XYZ Ltd",
      clientManager: "Charlie Wilson",
      clientPartner: "David White",
      engagementManager: "Frank Miller",
      status: "Inactive",
    },
    {
      Sno: 3,
      firstName: "Alice",
      lastName: "Johnson",
      clientName: "LMN Inc",
      clientManager: "Grace Davis",
      clientPartner: "Henry Lee",
      engagementManager: "Ivy Taylor",
      status: "Pending",
    },
    {
      Sno: 4,
      firstName: "Bob",
      lastName: "Wilson",
      clientName: "PQR Co",
      clientManager: "Jack Brown",
      clientPartner: "Karen Miller",
      engagementManager: "Lisa Davis",
      status: "Active",
    },
    {
      Sno: 5,
      firstName: "Charlie",
      lastName: "Brown",
      clientName: "JKL Ltd",
      clientManager: "Mary Lee",
      clientPartner: "Nancy White",
      engagementManager: "Oliver Smith",
      status: "Inactive",
    },
  ];
  const columns = [
    {
      title: "Sno.",
      dataIndex: "Sno",
      key: "Sno",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Clent Manager",
      dataIndex: "clientManager",
      key: "clientManager",
    },
    {
      title: "Client Partner",
      dataIndex: "clientPartner",
      key: "clientPartner",
    },
    {
      title: "Engagement Manager",
      dataIndex: "engagementManager",
      key: "engagementManager",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
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

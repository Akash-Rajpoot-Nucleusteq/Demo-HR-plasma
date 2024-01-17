import React from "react";
import SideBar from "../sideBar";
import { Table } from "antd";

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
    </div>
  );
};

export default Allocation;

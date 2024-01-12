import React from "react";
import { Table } from "antd";
import SideBar from "../assignment/SideBar";

const Assignment = () => {
  const dummyData = [
    {
      id: 1,
      customerName: "ABC Corp",
      customerLeaderName: "John Doe",
      startDate: "2022-01-01",
      endDate: "2022-02-01",
      clientPartner: "Jane Smith",
      engagementManager: "Bob Johnson",
      Location : "Indore",
    },
    {
      id: 2,
      customerName: "XYZ Ltd",
      customerLeaderName: "Alice Johnson",
      startDate: "2022-03-01",
      endDate: "2022-04-01",
      clientPartner: "David Brown",
      engagementManager: "Eva Williams",
      Location : "Indore",
    },
    {
      id: 3,
      customerName: "123 Corp",
      customerLeaderName: "Charlie Wilson",
      startDate: "2022-05-01",
      endDate: "2022-06-01",
      clientPartner: "Grace Davis",
      engagementManager: "Harry Miller",
      Location : "Indore",
    },

    {
      id: 4,
      customerName: "456 Ltd",
      customerLeaderName: "Olivia Martinez",
      startDate: "2022-07-01",
      endDate: "2022-08-01",
      clientPartner: "Isaac Taylor",
      engagementManager: "Jennifer Anderson",
      Location : "Indore",
    },
  ];

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Customer Leader Name",
      dataIndex: "customerLeaderName",
      key: "customerLeaderName",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Client Partner",
      dataIndex: "clientPartner",
      key: "clientPartner",
    },
    {
      title: "Location",
      dataIndex: "Location",
      key: "Location",
    },
    {
      title: "Engagement Manager",
      dataIndex: "engagementManager",
      key: "engagementManager",
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

export default Assignment;

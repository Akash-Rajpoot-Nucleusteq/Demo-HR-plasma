import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Modal } from 'react-bootstrap';

const AssetPage = () => {
  //const [selectedOption, setSelectedOption] = useState('self');
  const [data] = useState([
    {
      id: 1,
      assetType: 'Laptop',
      providedBy: 'Nucleus Teq',
      os: 'Windows 10',
      allocationDate: '2023-12-28',
      assestId: '1jcv45$qw23',
      clientPartner: '-',
    },
    {
      id: 2,
      assetType: 'Laptop',
      providedBy: 'Customer',
      os: 'Mac book ',
      allocationDate: '2023-12-28',
      assestId: 'a234sd%2dfg',
      clientPartner: 'John Doe',
    },
  ]);

  const [employeeAssetsData] = useState([
    {
      id: 1,
      assetType: 'Laptop',
      providedBy: 'Company XYZ',
      os: 'Windows 10',
      allocationDate: '2023-12-28',
      assestId: 'sdt23@3tfed',
      clientPartner: 'John Doe',
      name: 'Jane Doe',
      workLocation: 'New York',
      workType: 'Full-time',
    },
  ]);
    const columns = [
      {
        title: 'Asset Type',
        dataIndex: 'assetType',
        key: 'assetType',
      },
      {
        title: 'Provided By',
        dataIndex: 'providedBy',
        key: 'providedBy',
      },
      {
        title: 'OS',
        dataIndex: 'os',
        key: 'os',
      },
      {
        title: 'Allocation Date',
        dataIndex: 'allocationDate',
        key: 'allocationDate',
      },
      {
        title: 'Assest Id',
        dataIndex: 'assestId',
        key: 'assestId',
      },
      {
        title: 'Client Partner',
        dataIndex: 'clientPartner',
        key: 'clientPartner',
      },
      
      
    ];

    const employeeColumns = [
      {
        title: 'Asset Type',
        dataIndex: 'assetType',
        key: 'assetType',
      },
      {
        title: 'Provided By',
        dataIndex: 'providedBy',
        key: 'providedBy',
      },
      {
        title: 'OS',
        dataIndex: 'os',
        key: 'os',
      },
      {
        title: 'Allocation Date',
        dataIndex: 'allocationDate',
        key: 'allocationDate',
      },
      {
        title: 'Asset Id',
        dataIndex: 'assestId',
        key: 'assestId',
      },
      {
        title: 'Client Partner',
        dataIndex: 'clientPartner',
        key: 'clientPartner',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Work Location',
        dataIndex: 'workLocation',
        key: 'workLocation',
      },
      {
        title: 'Work Type',
        dataIndex: 'workType',
        key: 'workType',
      },
    ];

    
    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
              <Sidebar />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
            
              <div className="card ctm-border-radius shadow-sm">
                <div className="card-header">
                  <h4 className="card-title mb-0">Asset Table</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          {columns.map((column) => (
                            <th key={column.key}>{column.title}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.id}>
                            {columns.map((column) => (
                              <td key={column.key}>{item[column.dataIndex]}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            
            
              <div className="card ctm-border-radius shadow-sm">
                <div className="card-header">
                  <h4 className="card-title mb-0">Assets Assigned to Employees</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          {employeeColumns.map((column) => (
                            <th key={column.key}>{column.title}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {employeeAssetsData.map((item) => (
                          <tr key={item.id}>
                            {employeeColumns.map((column) => (
                              <td key={column.key}>{item[column.dataIndex]}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    );
}



export default AssetPage;
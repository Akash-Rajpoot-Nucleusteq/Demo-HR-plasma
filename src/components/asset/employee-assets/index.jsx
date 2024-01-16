import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Table } from 'antd';


const EmployeeAssetsPage = () => {

    const [employeeAssetsData] = useState([
        {
            id: 1,
            assetType: 'Laptop',
            providedBy: 'Nucleus Teq',
            os: 'Windows 10',
            allocationDate: '2023-12-28',
            assetId: 'SDT233TFED',
            clientPartner: '--',
            name: 'Ashish Kumar Sahu',
            workLocation: 'Raipur',
            workType: 'Full-time',
        },
        {
            id: 2,
            assetType: 'Desktop',
            providedBy: 'Client',
            os: 'Mac-Book',
            allocationDate: '2023-11-15',
            assetId: '45RT345YT7',
            clientPartner: 'AAAI',
            name: 'Akash Rajpoot',
            workLocation: 'Indore',
            workType: 'Full-time',
        },
        // Add more data...
        {
            id: 3,
            assetType: 'Laptop',
            providedBy: 'Nucleus Teq',
            os: 'Windows 11',
            allocationDate: '2023-10-20',
            assetId: '34SR5678UI',
            clientPartner: '--',
            name: 'Diksha Mandal',
            workLocation: 'Indore',
            workType: 'Full-time',
        },
        {
            id: 4,
            assetType: 'Laptop',
            providedBy: 'Client',
            os: 'Windows 11',
            allocationDate: '2023-11-28',
            assetId: '34SR5678UI',
            clientPartner: 'AM-EX',
            name: 'Diksha Mandal',
            workLocation: 'Indore',
            workType: 'Full-time',
        },
        {
            id: 5,
            assetType: 'Desktop',
            providedBy: 'Nucleus Teq',
            os: 'Ubuntu',
            allocationDate: '2023-09-05',
            assetId: 'JKL876POI',
            clientPartner: '--',
            name: 'Priya Sharma',
            workLocation: 'Phoenix',
            workType: 'Full-time',
        },
        {
            id: 6,
            assetType: 'Laptop',
            providedBy: 'Client',
            os: 'Windows 10',
            allocationDate: '2023-11-10',
            assetId: '12AB34CD56',
            clientPartner: 'TechCorp',
            name: 'Amit Patel',
            workLocation: 'Mumbai',
            workType: 'Full-time',
        },
        {
            id: 7,
            assetType: 'Desktop',
            providedBy: 'Nucleus Teq',
            os: 'Ubuntu',
            allocationDate: '2023-08-15',
            assetId: 'XYZ789ABC',
            clientPartner: '--',
            name: 'Neha Gupta',
            workLocation: 'Jaipur',
            workType: 'Full-time',
        },
        {
            id: 8,
            assetType: 'Laptop',
            providedBy: 'Client',
            os: 'Windows 11',
            allocationDate: '2023-10-25',
            assetId: 'PQR456XYZ',
            clientPartner: 'InnoSoft',
            name: 'Rahul Verma',
            workLocation: 'Bangalore',
            workType: 'Full-time',
        },
        {
            id: 9,
            assetType: 'Desktop',
            providedBy: 'Nucleus Teq',
            os: 'Ubuntu',
            allocationDate: '2023-09-20',
            assetId: '456DEF789',
            clientPartner: '--',
            name: 'Shreya Singh',
            workLocation: 'Chennai',
            workType: 'Full-time',
        },
    ]);

    const employeeColumns = [
        {
            title: 'S.NO.',
            dataIndex: 'id',
            key: 'id',
            width: 70,
        },
        {
            title: 'Asset Type',
            dataIndex: 'assetType',
            key: 'assetType',
            width: 110,
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
            width: 150,
        },
        {
            title: 'Asset Id',
            dataIndex: 'assetId',
            key: 'assetId',
        },
        {
            title: 'Client Partner',
            dataIndex: 'clientPartner',
            key: 'clientPartner',
            width: 150,
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
            width: 150,
        },
        {
            title: 'Work Type',
            dataIndex: 'workType',
            key: 'workType',
            width: 110,
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
                            <div className="card-header align-center">
                                <h4 className="card-title mb-0">Assets Assigned to Employees</h4>
                            </div>
                            <div className="card-body align-center">
                                <div className="table-responsive">


                                    <Table className="table-striped"
                                        style={{ overflowX: 'auto' }}
                                        columns={employeeColumns}
                                        //bordered
                                        dataSource={employeeAssetsData}
                                        rowKey={record => record.id}
                                        pagination={false}
                                        scroll={{ x: 'max-content', y: 300 }}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );




}


export default EmployeeAssetsPage;
import React, { Component } from 'react'
import Sidebar from '../sidebar'
import RecentOnboardingEmployeeTable from '../employeetable/recentOnboardingTable'
export default class RecentOnboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RecentOnboardingData: [
        {
          employeeId: 'N0001',
          firstName: 'Ashish',
          middleName: 'Kumar',
          lastName: 'Sahu',
          startDate: '2023-04-23',
          customerName: 'Amex',
          customerManager: 'Archit',
          ClientPartner: 'NucleusTeq',
          engagementManager: 'Vishesh',

        },

        {
          employeeId: 'N0002',
          firstName: 'Akash',
          middleName: '',
          lastName: 'Rajpoot',
          startDate: '2023-12-11',
          customerName: 'Amex',
          customerManager: 'Archit',
          ClientPartner: 'NucleusTeq',
          engagementManager: 'Vishesh',
        },
        {
          employeeId: 'N0003',
          firstName: 'Diksha',
          middleName: '',
          lastName: 'Mandal',
          startDate: '2023-12-10',
          customerName: 'Amex',
          customerManager: 'Archit',
          ClientPartner: 'NucleusTeq',
          engagementManager: 'Vishesh',

        },
        {
          firstName: 'Abhay',
          middleName: 'Kumar',
          lastName: 'Gupta',
          employeeId: 'N0004',
          startDate: '2023-11-11',
          customerName: 'Amex',
          customerManager: 'Archit',
          ClientPartner: 'NucleusTeq',
          engagementManager: 'Vishesh',

        },
        {
          employeeId: 'N0005',
          firstName: 'Vivek',
          middleName: '',
          lastName: 'Dubey',
          phoneNumber: '36545676876',
          startDate: '2022-12-11',
          customerName: 'Amex',
          customerManager: 'Archit',
          ClientPartner: 'NucleusTeq',
          engagementManager: 'Vishesh',
        },
        {
          employeeId: 'N0006',
          firstName: 'Krishna',
          middleName: 'Kumar',
          lastName: 'Bharatiya',
          startDate: '2021-10-11',
          customerName: 'Amex',
          customerManager: 'Archit',
          ClientPartner: 'NucleusTeq',
          engagementManager: 'Vishesh',
        },
        {
          employeeId: 'N0007',
          firstName: 'Hemant',
          middleName: 'Kumar',
          lastName: 'Bandi',
          startDate: '2022-10-23',
          customerName: 'Amex',
          customerManager: 'Archit',
          ClientPartner: 'NucleusTeq',
          engagementManager: 'Vishesh',
        },
        {
          employeeId: 'N0008',
          firstName: 'Himanshu',
          middleName: '',
          lastName: 'Dhoke',
          startDate: '2023-11-19',
          customerName: 'Amex',
          customerManager: 'Archit',
          ClientPartner: 'NucleusTeq',
          engagementManager: 'Vishesh',
        },
        {
          employeeId: 'N0009',
          firstName: 'Chetan',
          middleName: '',
          lastName: 'Verma',
          startDate: '2020-10-19',
          customerName: 'Amex',
          customerManager: 'Archit',
          ClientPartner: 'NucleusTeq',
          engagementManager: 'Vishesh',
        },
      ]
    }
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
              <Sidebar />
            </div>
            <div className="col-xl-9 col-lg-8  col-md-12">
              <div className="card shadow-sm ctm-border-radius">
                {/* <Table striped bordered hover className="table-responsive ctm-border-radius">
                  <thead>
                    <tr>
                      <th>S. N.</th>
                      <th>Employee Id</th>
                      <th>First Name</th>
                      <th>Middle Name</th>
                      <th>Last Name</th>
                      <th>Start Date</th>
                      <th>Customer Name</th>
                      <th>Customer Manager</th>
                      <th>Client Partner</th>
                      <th>Emgagement Manager</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.RecentOnboardingData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.employeeId}</td>
                        <td>{data.firstName}</td>
                        <td>{data.middleName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.startDate}</td>
                        <td>{data.customerName}</td>
                        <td>{data.customerManager}</td>
                        <td>{data.ClientPartner}</td>
                        <td>{data.engagementManager}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table> */}
                <RecentOnboardingEmployeeTable recentOnboardingData={this.state.RecentOnboardingData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
export default class RecentOnboardingEmployeeTable extends Component {
    render() {

        const { recentOnboardingData } = this.props;

        return (
            <Table striped bordered hover className="table-responsive ctm-border-radius text-center">
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
                    {recentOnboardingData && recentOnboardingData.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            {/* <td> <button className="btn btn-theme button-1 text-white ctm-border-radius btn-block" onClick={()=>console.log(data)}>Approve or edit</button> </td> */}
                            <td>{data.employeeId ? data.employeeId : '--'}</td>
                            <td>{data.firstName ? data.firstName : '--'}</td>
                            <td>{data.middleName ? data.middleName : '--'}</td>
                            <td>{data.lastName ? data.lastName : '--'}</td>
                            <td>{data.startDate ? data.startDate : '--'}</td>
                            <td>{data.customerName ? data.customerName : '--'}</td>
                            <td>{data.customerManager ? data.customerManager : '--'}</td>
                            <td>{data.ClientPartner ? data.ClientPartner : '--'}</td>
                            <td>{data.engagementManager ? data.engagementManager : '--'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class OnboardingApprovalTable extends Component {

    handleButtonClick = (data) => {
        const { history } = this.context.router;
        history.push('/onboarding-form');
    };

    formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const [month, day, year] = new Date(dateString).toLocaleDateString('en-US', options).split(' ');
        const monthAbbreviation = month.slice(0, 3);
        const formattedDate = `${year}-${monthAbbreviation}-${day}`;
        return formattedDate.replace(/,\s*$/, '');
    };



    render() {
        const { tableData, tabPageName } = this.props;


        return (
            <Table striped bordered hover className="table-responsive ctm-border-radius text-center">
                <thead>
                    <tr>
                        <th>S. N.</th>
                        {tabPageName && tabPageName === 'onboardingApproval' && <th>Action</th>}
                        <th>Employee Id</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>

                        <th>Phone number</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Zipcode</th>
                        <th>Visa Status</th>
                        <th>Citizenship</th>
                        <th>Employment Nature</th>
                        <th>Contracting Rate</th>
                        <th>Employment Company</th>
                        <th>Working Remote</th>
                        <th>Employment Start Date</th>
                        <th>Role</th>
                        <th>Designation</th>
                        <th>Skill</th>
                        <th>Employment Status</th>
                        {/* <th>photo</th>
                        <th>resume</th>
                        <th>passport</th>
                        <th>workAuthorization</th> */}
                    </tr>
                </thead>
                <tbody>
                    {tableData && tableData.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            {tabPageName && tabPageName === 'onboardingApproval' && <td>
                                {/* <button className="btn btn-theme button-1 text-white ctm-border-radius btn-block"
                                    onClick={() => this.handleButtonClick(data)}>Approve or edit</button> */}
                                <span className='btn btn-theme button-1 text-dark ctm-border-radius btn-block mr-1'>
                                    <Link to={{
                                        pathname: "onboarding-approval-form",
                                        state: { employeeData: data } // Pass your data here

                                    }}
                                        className=" btn-ctm-space text-white ">
                                        <span className="d-none d-lg-inline ">Edit And Approve</span>
                                    </Link>
                                </span>
                            </td>}
                            <td>{data.employeeId ? data.employeeId : '--'}</td>
                            <td>{data.firstName ? data.firstName : '--'}</td>
                            <td>{data.middleName ? data.middleName : '--'}</td>
                            <td>{data.lastName ? data.lastName : '--'}</td>
                            <td>{data.phoneNumber ? data.phoneNumber : '--'}</td>
                            <td>{data.addressLine1 ? data.addressLine1 : '--'}</td>
                            <td>{data.addressLine2 ? data.addressLine2 : '--'}</td>
                            <td>{data.country ? data.country : '--'}</td>
                            <td>{data.state ? data.state : '--'}</td>
                            <td>{data.city ? data.city : '--'}</td>
                            <td>{data.zipCode ? data.zipCode : '--'}</td>
                            <td>{data.visaStatus ? data.visaStatus : '--'}</td>
                            <td>{data.citizenship ? data.citizenship : '--'}</td>
                            <td>{data.employmentNature ? data.employmentNature : '--'}</td>
                            <td>{data.contractingRate ? data.contractingRate : '--'}</td>
                            <td>{data.employmentCompany ? data.employmentCompany : '--'}</td>
                            <td>{data.workingRemote ? data.workingRemote : '--'}</td>
                            <td>{data.employmentStartDate ? this.formatDate(data.employmentStartDate) : '--'}</td>
                            <td>{data.role ? data.role : '--'}</td>
                            <td>{data.designation ? data.designation : '--'}</td>
                            <td>{data.skill ? data.skill : '--'}</td>
                            <td>{data.employmentStatus ? data.employmentStatus : '--'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

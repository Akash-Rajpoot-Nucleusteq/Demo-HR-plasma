import React, { Component } from 'react'
import Sidebar from '../sidebar'
import OnboardingApprovalTable from '../employeetable/onboardingApprovalTable'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [
                {
                    firstName: 'Ashish',
                    middleName: 'Kumar',
                    lastName: 'Sahu',
                    phoneNumber: '19685254367',
                    addressLine1: 'Om Nagar',
                    addressLine2: '',
                    city: 'Rochester City',
                    state: 'New York',
                    country: 'United States',
                    zipCode: '492013',
                    visaStatus: 'H1B',
                    citizenship: 'Albania',
                    employmentNature: 'Fulltime',
                    contractingRate: '',
                    employmentCompany: 'Nucleuseq',
                    employeeId: 'N0001',
                    workingRemote: 'Yes',
                    employmentStartDate: '2023-12-11',
                    role: 'Employee',
                    designation: 'Engineer',
                    skill: '',
                    employmentStatus: 'Approved',
                    photo: '',
                    resume: '',
                    passport: '',
                    workAuthorization: '',

                    
                },
                {
                    firstName: 'Akash',
                    middleName: '',
                    lastName: 'Rajpoot',
                    phoneNumber: '376984568765445',
                    addressLine1: 'Shantoshi nagar',
                    addressLine2: '',
                    city: 'Caselles',
                    state: 'Canillo',
                    country: 'Andorra',
                    zipCode: '545454',
                    visaStatus: 'H1B',
                    citizenship: 'Andorra',
                    employmentNature: 'Fulltime',
                    contractingRate: '',
                    employmentCompany: "NucleusTeq",
                    employeeId: 'N0002',
                    workingRemote: 'No',
                    employmentStartDate: '2023-11-10',
                    role: 'Employee',
                    designation: 'Engineer',
                    skill: '',
                    employmentStatus: 'Approved',
                    photo: '',
                    resume: '',
                    passport: '',
                    workAuthorization: '',
                },
                {
                    firstName: 'Diksha',
                    middleName: '',
                    lastName: 'Mandal',
                    phoneNumber: '549845687654',
                    addressLine1: 'Shankar nagar',
                    addressLine2: '',
                    city: 'Salta Villa San Lorenzo',
                    state: 'Salta',
                    country: 'Argentina',
                    zipCode: '492001',
                    visaStatus: 'H1B',
                    citizenship: 'Argentina',
                    employmentNature: 'Fulltime',
                    contractingRate: '',
                    employmentCompany: "NucleusTeq",
                    employeeId: 'N0003',
                    workingRemote: 'No',
                    employmentStartDate: '2021-10-12',
                    role: 'Employee',
                    designation: 'Engineer',
                    skill: '',
                    employmentStatus: 'Approved',
                    photo: '',
                    resume: '',
                    passport: '',
                    workAuthorization: '',
                },
                {
                    firstName: 'Abhay',
                    middleName: 'Kumar',
                    lastName: 'Gupta',
                    phoneNumber: '919845687654',
                    addressLine1: 'Vip road',
                    addressLine2: '',
                    city: 'Raipur',
                    state: 'Haryana',
                    country: 'India',
                    zipCode: '492001',
                    visaStatus: 'H1B',
                    citizenship: 'India',
                    employmentNature: 'Fulltime',
                    contractingRate: '',
                    employmentCompany: "NucleusTeq",
                    employeeId: 'N0004',
                    workingRemote: 'Yes',
                    employmentStartDate: '2020-12-11',
                    role: 'Manager',
                    designation: 'Engineer',
                    skill: '',
                    employmentStatus: 'Approved',
                    photo: '',
                    resume: '',
                    passport: '',
                    workAuthorization: '',
                },
                {
                    firstName: 'Vivek',
                    middleName: '',
                    lastName: 'Dubey',
                    phoneNumber: '36545676876',
                    addressLine1: 'Om Nagar',
                    addressLine2: '',
                    city: 'Budapest',
                    state: 'Pest',
                    country: 'Hungary',
                    zipCode: '492014',
                    visaStatus: 'H1B',
                    citizenship: 'Hungary',
                    employmentNature: 'Fulltime',
                    contractingRate: '',
                    employmentCompany: "NucleusTeq",
                    employeeId: 'N0005',
                    workingRemote: 'Yes',
                    employmentStartDate: '2020-12-18',
                    role: 'Employee',
                    designation: 'Engineer',
                    skill: '',
                    employmentStatus: 'Approved',
                    photo: '',
                    resume: '',
                    passport: '',
                    workAuthorization: '',
                },
                {
                    firstName: 'Krishna',
                    middleName: 'Kumar',
                    lastName: 'Bharatiya',
                    phoneNumber: '3545675544',
                    addressLine1: 'Gyan Nagar',
                    addressLine2: '',
                    city: 'Sogn og Fjordane',
                    state: 'Su urnes',
                    country: 'Iceland',
                    zipCode: '492013',
                    visaStatus: 'H1B',
                    citizenship: 'Iceland',
                    employmentNature: 'Fulltime',
                    contractingRate: '',
                    employmentCompany: "NucleusTeq",
                    employeeId: 'N0006',
                    workingRemote: 'Yes',
                    employmentStartDate: '2022-11-23',
                    role: 'Employee',
                    designation: 'Engineer',
                    skill: '',
                    employmentStatus: 'Approved',
                    photo: '',
                    resume: '',
                    passport: '',
                    workAuthorization: '',
                },
                {
                    firstName: 'Hemant',
                    middleName: 'Kumar',
                    lastName: 'Bandi',
                    phoneNumber: '986576786567',
                    addressLine1: 'Om Nagar',
                    addressLine2: '',
                    city: 'Ethnography',
                    state: 'Fars',
                    country: 'Iran',
                    zipCode: '492017',
                    visaStatus: 'H1B',
                    citizenship: 'Iran',
                    employmentNature: 'Fulltime',
                    contractingRate: '',
                    employmentCompany: "NucleusTeq",
                    employeeId: 'N0007',
                    workingRemote: 'Yes',
                    employmentStartDate: '2023-10-10',
                    role: 'Employee',
                    designation: 'Engineer',
                    skill: '',
                    employmentStatus: 'Approved',
                    photo: '',
                    resume: '',
                    passport: '',
                    workAuthorization: '',
                },
                {
                    firstName: 'Himanshu',
                    middleName: '',
                    lastName: 'Dhoke',
                    phoneNumber: '919845687654',
                    addressLine1: 'Rajendra nagar',
                    addressLine2: '',
                    city: 'Bhilai',
                    state: 'Chhattisgarh',
                    country: 'India',
                    zipCode: '492013',
                    visaStatus: 'H1B',
                    citizenship: 'India',
                    employmentNature: 'Fulltime',
                    contractingRate: '',
                    employmentCompany: "NucleusTeq",
                    employeeId: 'N0008',
                    workingRemote: 'Yes',
                    employmentStartDate: '2022-11-19',
                    role: 'Employee',
                    designation: 'Engineer',
                    skill: '',
                    employmentStatus: 'Approved',
                    photo: '',
                    resume: '',
                    passport: '',
                    workAuthorization: '',
                },
                {
                    firstName: 'Chetan',
                    middleName: '',
                    lastName: 'Verma',
                    phoneNumber: '396786456766',
                    addressLine1: 'Om Nagar',
                    addressLine2: '',
                    city: 'Adelfia',
                    state: 'Bari',
                    country: 'Italy',
                    zipCode: '492013',
                    visaStatus: 'H1B',
                    citizenship: 'Italy',
                    employmentNature: 'Fulltime',
                    contractingRate: '',
                    employmentCompany: "NucleusTeq",
                    employeeId: 'N0009',
                    workingRemote: 'Yes',
                    employmentStartDate: '2021-12-11',
                    role: 'Employee',
                    designation: 'Engineer',
                    skill: '',
                    employmentStatus: 'Approved',
                    photo: '',
                    resume: '',
                    passport: '',
                    workAuthorization: '',
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
                                <OnboardingApprovalTable tableData={this.state.tableData} tabPageName={'approvalHistory'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

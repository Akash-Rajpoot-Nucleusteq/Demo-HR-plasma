import React, { Component } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import InputValidator from '../../../validations/fieldValidation/InputValidator'
import countryStateData from '../../../assets/lists/countryStateData.json';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Sidebar from '../sidebar'
import EmployeeForm from '../commonform/commonForm'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeData: {},
        }
    }

    //It store value coming from the other component into a state variables .
    componentDidMount() {
        const { employeeData } = this.props.location.state ? this.props.location.state : '';

        this.setState({
            employeeData: employeeData,
        })
    }

    //Now render function.
    render() {

        return (

            < div className="page-wrapper" >
                <div className="container-fluid">
                    <div className="row">
                        {/* sidebar */}
                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <Sidebar />
                        </div>

                        {/* <div className="col-xl-12 col-lg-12  col-md-12"> */}
                        <div className="col-xl-9 col-lg-8  col-md-12">
                            <div className="card shadow-sm ctm-border-radius">
                                <div className='ctm-border-radius p-4'>
                                    <EmployeeForm employeeData={this.state.employeeData} parentComponentName={'onboardingApprovalFormPage'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

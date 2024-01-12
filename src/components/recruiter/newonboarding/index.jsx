import React, { Component } from 'react'
import Sidebar from '../sidebar'
import { Form, Col, Row, Button } from 'react-bootstrap';
import InputValidator from '../../../validations/fieldValidation/InputValidator'
import countryStateData from '../../../assets/lists/countryStateData.json';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import EmployeeForm from '../commonform/commonForm'


export default class NewOnboarding extends Component {
  constructor(props) {
    super(props);

  }


  //Now render function.
  render() {

    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            {/* div for sidebar */}
            <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
              <Sidebar />
            </div>

            <div className="col-xl-9 col-lg-8  col-md-12">
              <div className="card shadow-sm ctm-border-radius">
                <div className='ctm-border-radius p-4'>
                  {/* Form starting */}
                  <EmployeeForm parentComponentName={"newOnboarding"} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Sidebar from './sidebar'
import ProfilePhoto from '../../assets/images/Profile Photo.jpg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default class Recruiter extends Component {
    render() {
        const data = this.props.location.pathname;
        console.log('data: ', data);
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <Sidebar url={data} employeeName={'ashish'} employeeRole={'Employee'} profilePhoto={ProfilePhoto} />
                        </div>
                        <div className="col-xl-9 col-lg-8  col-md-12">
                            <div className="card shadow-sm ctm-border-radius">
                                <div className="card-body align-center">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className={`nav-item`}>
                                            <NavLink to="/reports" className="list-group-item text-center button-6"  activeClassName="active">Team Member Official Reports</NavLink>
                                        </li>
                                        <li className={`nav-item`}>
                                            <NavLink to="/reports" className="list-group-item text-center button-6"  activeClassName="active">Team Member Official Reports</NavLink>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

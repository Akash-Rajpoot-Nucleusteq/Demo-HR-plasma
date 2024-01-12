import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class TimesheetSidebar extends Component {
    constructor(props){
        super(props);
        this.state={
			show: null
		}
	}		
	

	render(){

		return (
			<aside className="sidebar sidebar-user">
				<div className="card ctm-border-radius shadow-sm">
					<div className="card-body py-4">
						<div className="row">
							<div className="col-md-12 mr-auto text-left">
								<div className="custom-search input-group">
									<div className="custom-breadcrumb">
										<ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
											<li className="breadcrumb-item d-inline-block"><Link to="admin" className="text-dark">Home</Link></li>
											<li className="breadcrumb-item d-inline-block active">Timesheet</li>
										</ol>
										<h4 className="text-dark">Timesheet</h4>
									</div>
								</div>
                               
							</div>
                            
						</div>

                        
					</div>
				</div>	
				<div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                    <div className="card-body">
                        {/* Modify the NavLink paths */}
                        <NavLink to="/timesheet/pending" className="list-group-item text-center button-6" activeClassName="active">
                            Pending Time-Sheet
                        </NavLink>

                        <NavLink to="/timesheet/approved" className="list-group-item text-center button-6" activeClassName="active">
                            Approved Time-Sheet
                        </NavLink>
                    </div>
                </div>
			</aside>
	   );
    }   
}

export default TimesheetSidebar;

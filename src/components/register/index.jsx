import React, { Component } from "react";
import IMG01 from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
  
    render(){
        return(
        	<div className="inner-wrapper login-body">
			<div className="login-wrapper">
				<div className="container">
					<div className="loginbox shadow-sm">
						<div className="login-left">
							<img className="img-fluid" src={IMG01} alt="Logo" />
						</div>
						<div className="login-right">
							<div className="login-right-wrap">
								<h1>Register</h1>
								<p className="account-subtitle">Access to our dashboard</p>
								
								
								<form>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Name" />
									</div>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Email" />
									</div>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Password" />
									</div>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Confirm Password" />
									</div>
									<div className="form-group mb-0">
										<button className="btn btn-theme button-1 text-white ctm-border-radius btn-block" type="submit">Register</button>
									</div>
								</form>
							
								
								<div className="login-or">
									<span className="or-line"></span>
									<span className="span-or">or</span>
								</div>
								
							
								<div className="social-login">
									<span>Register with</span>
									<a href="#0" className="facebook"><i className="fa fa-facebook"></i></a><a href="#0" className="google"><i className="fa fa-google"></i></a>
								</div>
							
								
								<div className="text-center dont-have">Already have an account? <Link to="/login">Login</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
             
        );
    }
}

export default Register;
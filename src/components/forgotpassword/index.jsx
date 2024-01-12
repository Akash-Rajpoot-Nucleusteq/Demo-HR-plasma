import React, { Component } from "react";
// import IMG01 from '../../assets/images/logo.png';
import IMG01 from '../../assets/images/logo_nucleusteq.png';
import { Link } from 'react-router-dom';
import InputValidator from '../../validations/fieldValidation/InputValidator'

class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emailId: '',
			errorEmail: '',
			successMessage: '',
		}
	}

	handleChange = (event) => {
		if (event.target.name === 'email') {
			const errorEmail = InputValidator.isValidEmail(event.target.value);
			this.setState({ emailId: event.target.value, errorEmail, successMessage: '' })
			// console.log("event.target.value: ", event.target.value);
		}
	}

	checkForError = () => {
		this.setState({
			errorEmail: InputValidator.isValidEmail(this.state.emailId),
		})
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		await this.checkForError();
		if (this.state.errorEmail === '') {
			// console.log("from handle submit event.target.value: ", this.state.emailId);
			this.setState({ successMessage: 'If your email already registered with us, you will get a reset link to your registered email id.' })
		}
	}

	render() {
		const { errorEmail, successMessage } = this.state;

		return (
			<div className="inner-wrapper login-body">
				<div className="login-wrapper">
					<div className="container">
						<div className="loginbox shadow-sm">
							<div className="login-left">
								<img className="img-fluid" src={IMG01} alt="Logo" />
							</div>
							<div className="login-right">
								<div className="login-right-wrap">
									<h1>Forgot Password?</h1>
									<p className="account-subtitle">Enter your email to get a reset link</p>


									<form onSubmit={this.handleSubmit}>
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Email" name="email" onBlur={this.handleChange} />
											{this.state.successMessage && <span className="text-success small">{this.state.successMessage}</span>}
											{this.state.errorEmail && <span className="text-danger small">{this.state.errorEmail}</span>}
										</div>
										<div className="form-group mb-0">
											<button className="btn btn-theme button-1 ctm-border-radius text-white btn-block" type="submit">Reset Password</button>
										</div>
									</form>


									<div className="text-center dont-have">Remember your password? <Link to="login">Login</Link></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default ForgotPassword;
import React, { Component } from "react";
import IMG01 from "../../assets/images/logo_nucleusteq.png";
import { Link } from "react-router-dom";
import InputValidator from "../../validations/fieldValidation/InputValidator";
import { determineUserRole, doLogin } from "../../authentication/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorEmail: "",
      errorPassword: "",
      emailId: "",
      password: "",
      recipientEmail: "recipient@gmail.com",
      gmailLink: `https://mail.google.com/mail/?view=cm&fs=1&to=ashish.sahu@nucleusteq.com`,
    };
  }

  componentDidMount = () => {
    localStorage.clear();
  };

  // Used to change the variable's value according to the inputfield name.
  handleChange = (event) => {
    if (event.target.name === "email") {
      const errorEmail = InputValidator.isValidEmail(event.target.value);
      this.setState({ emailId: event.target.value, errorEmail });
    }
    if (event.target.name === "password") {
      const errorPassword = InputValidator.isValidPassword(event.target.value);
      this.setState({ password: event.target.value, errorPassword });
    }
  };

  // Used to checking for error before the api call.
  checkForError = () => {
    this.setState({
      errorEmail: InputValidator.isValidEmail(this.state.emailId),
      errorPassword: InputValidator.isValidPassword(this.state.password),
    });
  };

  //Used to validate data and make an api call.
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.checkForError();
    if (this.state.errorEmail === "" && this.state.errorPassword === "") {
      const userData = {
        email: this.state.emailId,
        password: this.state.password,
      };
      doLogin(userData);
      console.log(this.state.emailId)
      let role = determineUserRole(this.state.emailId);
      // let role = "Manager"
;
      console.log(role + "mm role is" )
      if (role === "Employee") {
        this.props.history.push("employee/dashboard")
      } else if (role === "Manager") {
        this.props.history.push("/manager/dashboard")
      } else if (role === "Recruiter") {
        this.props.history.push("/recruiter/dashboard")
      } else if (role === "Recruiter Manager") {
        this.props.history.push("recruiter/manager/dashboard")
      } else if (role === "Client Manager") {
        this.props.history.push("client/dashboard")
      }
    }
  };
  render() {
    return (
      <div className='inner-wrapper login-body'>
        <div className='login-wrapper'>
          <div className='container'>
            <div className='loginbox shadow-sm'>
              <div className='login-left'>
                <img className='img-fluid' src={IMG01} alt='Logo' />
              </div>
              <div className='login-right'>
                <div className='login-right-wrap'>
                  <h1>Login</h1>
                  <p className='account-subtitle'>Access to our dashboard</p>

                  {/* Form */}
                  <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        type='text'
                        placeholder='Email'
                        name='email'
                        onBlur={this.handleChange}
                      />
                      {this.state.errorEmail && (
                        <span className='text-danger small'>
                          {this.state.errorEmail}
                        </span>
                      )}
                    </div>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        onBlur={this.handleChange}
                      />
                      {this.state.errorPassword && (
                        <span className='text-danger small'>
                          {this.state.errorPassword}
                        </span>
                      )}
                    </div>
                    <div className='form-group'>
                      <button
                        className='btn btn-theme button-1 text-white ctm-border-radius btn-block'
                        type='submit'>
                        Login
                      </button>
                    </div>
                  </form>

                  {/* forgot password */}
                  <div className='text-center forgotpass'>
                    <Link to='forgot-password'>Forgot Password?</Link>
                  </div>
                  <div className='login-or'>
                    <span className='or-line'></span>
                    <span className='span-or'>or</span>
                  </div>

                  {/* Register page */}
                  <div className='text-center dont-have'>
                    Don’t have an account?{" "}
                    <div>
                      <a
                        href={this.state.gmailLink}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Contact Administrator
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

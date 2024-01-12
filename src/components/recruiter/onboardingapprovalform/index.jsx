import React, { Component } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InputValidator from '../../../validations/fieldValidation/InputValidator'
import countryStateData from '../../../assets/lists/countryStateData.json';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //state variable for field values
            firstName: '',
            middleName: '',
            lastName: '',
            phoneNumber: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            country: '',
            zipCode: '',
            visaStatus: '',
            citizenship: '',
            employmentNature: '',
            contractingRate: '',
            employmentCompany: '',
            employeeId: '',
            workingRemote: '',
            employmentStartDate: '',
            formattedEmploymentStartDate: '',
            role: '',
            designation: '',
            skill: '',
            employmentStatus: '',
            photo: '',
            resume: '',
            passport: '',
            workAuthorization: '',
            ctc: '',
            bonus: '',
            visaExpense: '',
            otherExpense: '',

            //state variable for errors
            errorFirstName: '',
            errorLastName: '',
            errorPhoneNumber: '',
            errorAddressLine1: '',
            errorState: '',
            errorCountry: '',
            errorZipCode: '',
            errorCitizenship: '',
            errorEmploymentNature: '',
            errorEmploymentCompany: '',
            errorEmployeeId: '',
            errorWorkingRemote: '',
            errorEmploymentStartDate: '',
            errorRole: '',
            errorDesignation: '',
            errorEmploymentStatus: '',
            errorCtc: '',
            errorBonus: '',

            //to check whether form is editable state or not
            formEditable: "false",

            //state variable to store lists and selected values id(selectedCountry, selectedState, selectedCitizenship).
            countries: [],
            selectedCountry: '',
            states: [],
            selectedState: '',
            selectedCitizenship: '',
        }
    }

    //It store value coming from the other component into a state variables .
    componentDidMount() {
        const { employeeData } = this.props.location.state;

        const countries = countryStateData.map((country) => ({
            id: country.country_id,
            name: country.country_name,
        }));
        const states = this.getStatesListByCountry(employeeData.country)

        const selectedCountryId = this.getCountryIdByName(employeeData.country);
        const selectedStateId = this.getStateIdByName(employeeData.country, employeeData.state);
        const selectedCitizenship = this.getCountryIdByName(employeeData.citizenship)

        console.log('selected country id is: ', selectedCountryId);
        console.log('selected state id is: ', selectedStateId);
        this.setState({
            firstName: employeeData.firstName,
            middleName: employeeData.middleName,
            lastName: employeeData.lastName,
            phoneNumber: employeeData.phoneNumber,
            addressLine1: employeeData.addressLine1,
            addressLine2: employeeData.addressLine2,
            city: employeeData.city,
            state: employeeData.state,
            country: employeeData.country,
            zipCode: employeeData.zipCode,
            visaStatus: employeeData.visaStatus,
            citizenship: employeeData.citizenship,
            employmentNature: employeeData.employmentNature,
            contractingRate: employeeData.contractingRate,
            employmentCompany: employeeData.employmentCompany,
            employeeId: employeeData.employeeId,
            workingRemote: employeeData.workingRemote,
            employmentStartDate: employeeData.employmentStartDate,
            role: employeeData.role,
            designation: employeeData.designation,
            skill: employeeData.skill,
            employmentStatus: employeeData.employmentStatus,
            countries, states,
            selectedCountry: selectedCountryId,
            selectedState: selectedStateId,
            selectedCitizenship: selectedCitizenship,
        })
    }

    //used to get country id by name.
    getCountryIdByName = (countryName) => {
        const country = countryStateData.find((c) => c.country_name === countryName);
        return country ? country.country_id : null;
    };

    //used to get state id by country and state name.
    getStateIdByName = (countryName, stateName) => {
        const country = countryStateData.find((c) => c.country_name === countryName);
        if (country) {
            const state = country.states.find((s) => s.state_name === stateName);
            return state ? state.state_id : null;
        }
        return null;
    };
    //Used to get list of states by country name.
    getStatesListByCountry = (countryName) => {
        const country = countryStateData.find((c) => c.country_name === countryName);
        return country ? country.states : [];
    };

    //used to format date value.
    formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const [month, day, year] = new Date(dateString).toLocaleDateString('en-US', options).split(' ');
        const monthAbbreviation = month.slice(0, 3);
        return `${year}-${monthAbbreviation}-${day}`;
    };

    //Used to handle if country or citizenship field changes.
    handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        const country = countryStateData.find((c) => c.country_id === selectedCountry);
        if (e.target.id === 'country') {
            const states = country ? country.states : [];
            this.setState({
                selectedCountry,
                states,
                selectedState: '',

                country: country ? country.country_name : '',
                errorCountry: ''
            });
        } else if (e.target.id === 'citizenship') {
            this.setState({
                selectedCitizenship: selectedCountry,
                citizenship: country ? country.country_name : '',
                errorCitizenship: '',
            })
        }
    };

    //Used to handle if state field(on form) changes.
    handleStateChange = (e) => {
        const selectedStateId = e.target.value;
        const selectedState = this.state.states.find((state) => state.state_id === selectedStateId);
        this.setState({
            selectedState: selectedStateId,
            state: selectedState ? selectedState.state_name : '',
            errorState: ''
        });
    };

    // Used to return variable name with error prefix.
    giveNameWithError = (name) => {
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        const nameWithError = 'error' + capitalizedName;
        return nameWithError;
    }



    //Used to handle for any input field changes in form.
    handleInputChange = (event) => {
        const { id, value, files } = event.target;
        const errorId = this.giveNameWithError(id);

        if (id == 'middleName' || id === 'city' || id === 'visaStatus' || id === 'contractingRate' || id === 'skill' || id === 'addressLine2' || id === 'visaExpense' || id === 'otherExpense') {
            this.setState({ [id]: value })
        } else if (id === 'photo' || id === 'resume' || id === 'passport' || id === 'workAuthorization') {
            this.setState({ [id]: files[0] })
        } else if (id === 'employmentStartDate') {
            const formattedDate = this.formatDate(value); // Format the date
            this.setState({ [id]: value, [errorId]: '', formattedEmploymentStartDate: formattedDate });
        } else {
            this.setState({ [id]: value, [errorId]: '' });
        }
    };

    //Used to check for the existance of any error by calling the function and storing value.
    checkForError = () => {
        this.setState({
            errorFirstName: InputValidator.isEmpty(this.state.firstName),
            errorLastName: InputValidator.isEmpty(this.state.lastName),
            errorPhoneNumber: InputValidator.isEmpty(this.state.phoneNumber.toString()),
            errorAddressLine1: InputValidator.isEmpty(this.state.addressLine1),
            errorState: InputValidator.isEmpty(this.state.state),
            errorCountry: InputValidator.isEmpty(this.state.country),
            errorZipCode: InputValidator.isEmpty(this.state.zipCode),
            errorCitizenship: InputValidator.isEmpty(this.state.citizenship),
            errorEmploymentNature: InputValidator.isEmpty(this.state.employmentNature),
            errorEmploymentCompany: InputValidator.isEmpty(this.state.employmentCompany),
            errorEmployeeId: InputValidator.isEmpty(this.state.employeeId),
            errorWorkingRemote: InputValidator.isEmpty(this.state.workingRemote),
            errorEmploymentStartDate: InputValidator.isEmpty(this.state.employmentStartDate),
            errorRole: InputValidator.isEmpty(this.state.role),
            errorDesignation: InputValidator.isEmpty(this.state.designation),
            errorEmploymentStatus: InputValidator.isEmpty(this.state.employmentStatus),
            errorCtc: InputValidator.isEmpty(this.state.ctc),
            errorBonus: InputValidator.isEmpty(this.state.bonus),
        })
    }

    //Used to handle event after the form submission.
    handleSubmit = async (event) => {
        event.preventDefault();
        await this.checkForError();
        if (this.state.errorFirstName === '' && this.state.errorLastName === ''
            && this.state.errorPhoneNumber === '' && this.state.errorAddressLine1 === ''
            && this.state.errorState === ''
            && this.state.errorCountry === '' && this.state.errorZipCode === ''
            && this.state.errorCitizenship === '' && this.state.errorEmploymentNature === ''
            && this.state.errorEmploymentCompany === '' && this.state.errorEmployeeId === ''
            && this.state.errorWorkingRemote === '' && this.state.errorEmploymentStartDate === ''
            && this.state.errorRole === '' && this.state.errorDesignation === ''
            && this.state.errorEmploymentStatus === ''
            && this.state.errorCtc === '' && this.state.errorBonus === ''
        ) {
            console.log("Succed");
            console.log('Form Data:', this.state);
        } else {
            console.log('Failed data: ', this.state);
        }
    };

    //Used to make form editable after clicking the edit button.
    handleEditButtonClick = () => {
        this.setState({ formEditable: 'true' })
    }


    //Now render function.
    render() {

        //rerender the code if any changes happened on selected state variables.
        const {
            errorFirstName, errorLastName, errorPhoneNumber,
            errorAddressLine1, errorState,
            errorCountry, errorZipCode, errorCitizenship,
            errorEmploymentNature, errorEmploymentCompany,
            errorEmployeeId, errorWorkingRemote, errorEmploymentStartDate,
            errorRole, errorDesignation, errorEmploymentStatus,
            formEditable,
            countries, selectedCountry, states, selectedState,
        } = this.state;


        return (

            < div className="page-wrapper" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12  col-md-12">
                            <div className="card shadow-sm ctm-border-radius">
                                <div className='ctm-border-radius p-4'>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="firstName">
                                                    <Form.Label>First Name<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="text" placeholder="Enter first name" onChange={this.handleInputChange} value={this.state.firstName} disabled={this.state.formEditable === 'false'} />
                                                    {this.state.errorFirstName && <span className="text-danger small">{this.state.errorFirstName}</span>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="middleName">
                                                    <Form.Label>Middle Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter middle name" onChange={this.handleInputChange} value={this.state.middleName} disabled={this.state.formEditable === 'false'} />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="lastName">
                                                    <Form.Label>Last Name<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="text" placeholder="Enter last name" onChange={this.handleInputChange} value={this.state.lastName} disabled={this.state.formEditable === 'false'} />
                                                    {this.state.errorLastName && <span className="text-danger small">{this.state.errorLastName}</span>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="phoneNumber">
                                                    <Form.Label>Phone Number<span className="text-danger">*</span></Form.Label>
                                                    {/* <Form.Control type="text" placeholder="Enter phone number" onChange={this.handleInputChange} value={this.state.phoneNumber} disabled={this.state.formEditable === 'false'} /> */}
                                                    <PhoneInput
                                                        country={'in'}
                                                        value={this.state.phoneNumber}
                                                        onChange={(value) => this.handleInputChange({ target: { id: 'phoneNumber', value } })}
                                                        inputProps={{
                                                            required: true,
                                                        }}
                                                        disabled={this.state.formEditable === 'false'}

                                                        className='form-control'
                                                        inputClass='border-0'
                                                        buttonClass='border-0 bg-transparent'

                                                    />
                                                    {/* <Form.Row>
                                                        <Col xs={3} className='pr-2'>
                                                            <Form.Control type="text" placeholder="e.g. +91" onChange={this.handleInputChange} />
                                                        </Col>
                                                        <Col xs={9}>
                                                            <Form.Control type="number" placeholder="Enter phone number" onChange={this.handleInputChange} value={this.state.phoneNumber}/>
                                                        </Col>
                                                    </Form.Row> */}
                                                    {this.state.errorPhoneNumber && <span className="text-danger small">{this.state.errorPhoneNumber}</span>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>

                                            <Col>
                                                <Form.Group controlId="country">
                                                    <Form.Label>Country<span className="text-danger">*</span></Form.Label>
                                                    {/* <Form.Control placeholder="Enter country" onChange={this.handleInputChange} value={this.state.country} disabled={this.state.formEditable === 'false'} /> */}
                                                    <Form.Control as="select" onChange={this.handleCountryChange} value={selectedCountry} disabled={this.state.formEditable === 'false'}>
                                                        <option value="">--Select Country--</option>
                                                        {countries.map((country) => (
                                                            <option key={country.id} value={country.id}>
                                                                {country.name}
                                                            </option>
                                                        ))}

                                                    </Form.Control>
                                                    {this.state.errorCountry && <span className="text-danger small">{this.state.errorCountry}</span>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="state">
                                                    <Form.Label>State<span className="text-danger">*</span></Form.Label>
                                                    {/* <Form.Control placeholder="Enter state" onChange={this.handleInputChange} value={this.state.state} disabled={this.state.formEditable === 'false'} /> */}
                                                    {/* <Form.Control as="select" onChange={this.handleStateChange} value={selectedState} disabled={this.state.formEditable === 'false'}>
                                                        <option value="">--Select State--</option>
                                                        {states.map((state) => (
                                                            <option key={state.state_id} value={state.state_id}>
                                                                {state.state_name}
                                                            </option>
                                                        ))}
                                                    </Form.Control> */}
                                                    <Form.Control as="select" onChange={this.handleStateChange} value={selectedState} disabled={this.state.formEditable === 'false'}>
                                                        <option value="">--Select State--</option>
                                                        {states.map((state) => (
                                                            <option key={state.state_id} value={state.state_id}>
                                                                {state.state_name}
                                                            </option>
                                                        ))}
                                                    </Form.Control>
                                                    {this.state.errorState && <span className="text-danger small">{this.state.errorState}</span>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="city">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control placeholder="Enter city" onChange={this.handleInputChange} value={this.state.city} disabled={this.state.formEditable === 'false'} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="zipCode">
                                                    <Form.Label>Zip Code<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="Enter zip code" onChange={this.handleInputChange} value={this.state.zipCode} disabled={this.state.formEditable === 'false'} />
                                                    {this.state.errorZipCode && <span className="text-danger small">{this.state.errorZipCode}</span>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="addressLine1">
                                                    <Form.Label>Address Line 1<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="Enter address line 1" onChange={this.handleInputChange} value={this.state.addressLine1} disabled={this.state.formEditable === 'false'} />
                                                    {this.state.errorAddressLine1 && <span className="text-danger small">{this.state.errorAddressLine1}</span>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="addressLine2">
                                                    <Form.Label>Address Line 2</Form.Label>
                                                    <Form.Control placeholder="Enter address line 2" onChange={this.handleInputChange} value={this.state.addressLine2} disabled={this.state.formEditable === 'false'} />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="visaStatus">
                                                    <Form.Label>Visa Status</Form.Label>
                                                    <Form.Control as="select" onChange={this.handleInputChange} value={this.state.visaStatus} disabled={this.state.formEditable === 'false'}>
                                                        <option value={''}>Choose...</option>
                                                        <option value={'H1B'}>H1B</option>
                                                        <option value={'F1'}>F1</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="citizenship">
                                                    <Form.Label>Citizenship<span className="text-danger">*</span></Form.Label>
                                                    {/* <Form.Control placeholder="Enter citizenship" onChange={this.handleInputChange} value={this.state.citizenship} disabled={this.state.formEditable === 'false'} /> */}
                                                    <Form.Control as="select" onChange={this.handleCountryChange} value={this.state.selectedCitizenship} disabled={this.state.formEditable === 'false'}>
                                                        <option value="">--Select citizership--</option>
                                                        {countries.map((country) => (
                                                            <option key={country.id} value={country.id}>{country.name}</option>
                                                        ))}
                                                    </Form.Control>
                                                    {this.state.errorCitizenship && <span className="text-danger small">{this.state.errorCitizenship}</span>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="employmentNature">
                                                    <Form.Label>Employment Nature<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control as="select" onChange={this.handleInputChange} value={this.state.employmentNature} disabled={this.state.formEditable === 'false'}>
                                                        <option value={''}>Choose...</option>
                                                        <option value={'Fulltime'}>Fulltime</option>
                                                        <option value={'Contract'}>Contract</option>
                                                    </Form.Control>
                                                    {this.state.errorEmploymentNature && <span className="text-danger small">{this.state.errorEmploymentNature}</span>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="contractingRate">
                                                    <Form.Label>Contracting Rate</Form.Label>
                                                    <Form.Control placeholder="Enter contracting rate" onChange={this.handleInputChange} value={this.state.contractingRate} disabled={this.state.formEditable === 'false'} />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="employmentCompany">
                                                    <Form.Label>Employment Company<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="Enter employment company" onChange={this.handleInputChange} value={this.state.employmentCompany} disabled={this.state.formEditable === 'false'} />
                                                    {this.state.errorEmploymentCompany && <span className="text-danger small">{this.state.errorEmploymentCompany}</span>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="employeeId">
                                                    <Form.Label>Employee ID<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="Enter Employee ID" onChange={this.handleInputChange} value={this.state.employeeId} disabled={this.state.formEditable === 'false'} />
                                                    {this.state.errorEmployeeId && <span className="text-danger small">{this.state.errorEmployeeId}</span>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="workingRemote">
                                                    <Form.Label>Working Remote<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control as="select" onChange={this.handleInputChange} value={this.state.workingRemote} disabled={this.state.formEditable === 'false'}>
                                                        <option value={''}>Choose...</option>
                                                        <option value={'Yes'}>Yes</option>
                                                        <option value={'No'}>No</option>
                                                    </Form.Control>
                                                    {this.state.errorWorkingRemote && <span className="text-danger small">{this.state.errorWorkingRemote}</span>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="employmentStartDate">
                                                    <Form.Label>Employment Start Date (dd-mm-yyyy)<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type='date' placeholder="Enter start date" onChange={this.handleInputChange} value={this.state.employmentStartDate} disabled={this.state.formEditable === 'false'} />
                                                    {this.state.errorEmploymentStartDate && <span className="text-danger small">{this.state.errorEmploymentStartDate}</span>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="role">
                                                    <Form.Label>Role<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="Enter role" onChange={this.handleInputChange} value={this.state.role} disabled={this.state.formEditable === 'false'} />
                                                    {this.state.errorRole && <span className="text-danger small">{this.state.errorRole}</span>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="designation">
                                                    <Form.Label>Designation<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="Enter designation" onChange={this.handleInputChange} value={this.state.designation} disabled={this.state.formEditable === 'false'} />
                                                    {this.state.errorDesignation && <span className="text-danger small">{this.state.errorDesignation}</span>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="skill">
                                                    <Form.Label>Skill</Form.Label>
                                                    <Form.Control placeholder="Enter skills" onChange={this.handleInputChange} value={this.state.skill} disabled={this.state.formEditable === 'false'} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="employmentStatus">
                                                    <Form.Label>Employment Status<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="Enter employment status" onChange={this.handleInputChange} value={this.state.employmentStatus} disabled={this.state.formEditable === 'false'} />
                                                    {this.state.errorEmploymentStatus && <span className="text-danger small">{this.state.errorEmploymentStatus}</span>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="photo">
                                                    <Form.Label>Photo</Form.Label>
                                                    <Form.File
                                                        id="photo"
                                                        label="Choose photograph"
                                                        custom
                                                        onChange={this.handleInputChange}
                                                    />
                                                    {this.state.photo && <p>Selected file: {this.state.photo.name}</p>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="resume">
                                                    <Form.Label>Resume</Form.Label>
                                                    <Form.File
                                                        id="resume"
                                                        label="Choose resume"
                                                        custom
                                                        onChange={this.handleInputChange}
                                                    />
                                                    {this.state.resume && <p>Selected file: {this.state.resume.name}</p>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="passport">
                                                    <Form.Label>Passport</Form.Label>
                                                    <Form.File
                                                        id="passport"
                                                        label="Choose passport"
                                                        custom
                                                        onChange={this.handleInputChange}
                                                    />
                                                    {this.state.passport && <p>Selected file: {this.state.passport.name}</p>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="workAuthorization">
                                                    <Form.Label>Work Authorization</Form.Label>
                                                    <Form.File
                                                        id="workAuthorization"
                                                        label="Choose work authorization"
                                                        custom
                                                        onChange={this.handleInputChange}
                                                    />
                                                    {this.state.workAuthorization && <p>Selected file: {this.state.workAuthorization.name}</p>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="ctc">
                                                    <Form.Label>CTC<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="Enter CTC" onChange={this.handleInputChange} value={this.state.ctc} />
                                                    {this.state.errorCtc && <span className="text-danger small">{this.state.errorCtc}</span>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="bonus">
                                                    <Form.Label>Bonus<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="Enter bonus" onChange={this.handleInputChange} value={this.state.bonus} />
                                                    {this.state.errorBonus && <span className="text-danger small">{this.state.errorBonus}</span>}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="visaExpense">
                                                    <Form.Label>Visa expense</Form.Label>
                                                    <Form.Control placeholder="Enter visa expense" onChange={this.handleInputChange} value={this.state.visaExpense} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="otherExpense">
                                                    <Form.Label>Other Expense</Form.Label>
                                                    <Form.Control placeholder="Enter other expense" onChange={this.handleInputChange} value={this.state.otherExpense} />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Button variant="primary" type="submit">
                                            Approve
                                        </Button>

                                        <Link to='onboarding-approval' className="btn text-white bg-danger">
                                            <span className="d-none d-lg-inline ">Back</span>
                                        </Link>

                                        <Button className='bg-success' onClick={this.handleEditButtonClick}>Edit</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

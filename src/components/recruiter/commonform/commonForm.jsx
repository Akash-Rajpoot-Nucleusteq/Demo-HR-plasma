import React, { Component, useEffect, useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import InputValidator from '../../../validations/fieldValidation/InputValidator'
import countryStateData from '../../../assets/lists/countryStateData.json';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { currencyTypeList, roleList, designationList, yesNoList, employmentNatureList, visaStatusList, employmentStatusList } from '../../../assets/lists/lists'


export default function EmployeeForm({ employeeData, parentComponentName }) {

    const [formData, setFormData] = useState({
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
        employmentCompany: '',
        contractingCompany: '',

        // ctcCurrency: '',
        // bonusCurrency: '',
        // visaExpenseCurrency: '',
        // otherExpenseCurrency: '',
        // contractingRateCurrency: '',
        ctcCurrency: currencyTypeList[0],
        bonusCurrency: currencyTypeList[0],
        visaExpenseCurrency: currencyTypeList[0],
        otherExpenseCurrency: currencyTypeList[0],
        contractingRateCurrency: currencyTypeList[0],
    })

    const [formError, setFormError] = useState({
        errorFirstName: '',
        errorLastName: '',
        errorPhoneNumber: '',
        errorAddressLine1: '',
        errorState: '',
        errorCountry: '',
        errorCity: '',
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
        errorEmploymentCompany: '',
        errorContractingCompany: '',
        errorContractingRate: '',

        errorCtcCurrency: '',
        errorBonusCurrency: '',
        errorContractingRateCurrency: '',

    })

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCitizenship, setSelectedCitizenship] = useState('');

    const history = useHistory();


    useEffect(() => {

        console.log('employee data is : ', employeeData);
        console.log('parent page is : ', parentComponentName);

        const countries = countryStateData.map((country) => ({
            id: country.country_id,
            name: country.country_name,
        }));

        setCountries(countries);


        // setFormData({
        //     ...formData,
        //     ctcCurrency: currencyTypeList[0],
        //     bonusCurrency: currencyTypeList[0],
        //     visaExpenseCurrency: currencyTypeList[0],
        //     otherExpenseCurrency: currencyTypeList[0],
        //     contractingRateCurrency: currencyTypeList[0],
        // })

        if (employeeData) {
            const statesData = getStatesListByCountry(employeeData.country);
            const selectedCountryId = getCountryIdByName(employeeData.country);
            const selectedStateId = getStateIdByName(employeeData.country, employeeData.state);
            const selectedCitizenshipId = getCountryIdByName(employeeData.citizenship);

            setStates(statesData);
            setSelectedCountry(selectedCountryId);
            setSelectedState(selectedStateId);
            setSelectedCitizenship(selectedCitizenshipId);

            setFormData({
                ...formData,
                firstName: employeeData.firstName || '',
                middleName: employeeData.middleName || '',
                lastName: employeeData.lastName || '',
                phoneNumber: employeeData.phoneNumber || '',
                addressLine1: employeeData.addressLine1 || '',
                addressLine2: employeeData.addressLine2 || '',
                city: employeeData.city || '',
                state: employeeData.state || '',
                country: employeeData.country || '',
                zipCode: employeeData.zipCode || '',
                visaStatus: employeeData.visaStatus || '',
                citizenship: employeeData.citizenship || '',
                employmentNature: employeeData.employmentNature || '',
                contractingRate: employeeData.contractingRate || '',
                employmentCompany: employeeData.employmentCompany || '',
                employeeId: employeeData.employeeId || '',
                workingRemote: employeeData.workingRemote || '',
                employmentStartDate: employeeData.employmentStartDate || '',
                role: employeeData.role || '',
                designation: employeeData.designation || '',
                skill: employeeData.skill || '',
                employmentStatus: employeeData.employmentStatus || '',

            })

        }
    }, [employeeData, currencyTypeList, formData.ctcCurrency])

    //used to get country id by name.
    const getCountryIdByName = (countryName) => {
        const country = countryStateData.find((c) => c.country_name === countryName);
        return country ? country.country_id : null;
    };

    //used to get state id by country and state name.
    const getStateIdByName = (countryName, stateName) => {
        const country = countryStateData.find((c) => c.country_name === countryName);
        if (country) {
            const state = country.states.find((s) => s.state_name === stateName);
            return state ? state.state_id : null;
        }
        return null;
    };
    //Used to get list of states by country name.
    const getStatesListByCountry = (countryName) => {
        const country = countryStateData.find((c) => c.country_name === countryName);
        return country ? country.states : [];
    };

    //used to format date value.
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const [month, day, year] = new Date(dateString).toLocaleDateString('en-US', options).split(' ');
        const monthAbbreviation = month.slice(0, 3);
        return `${year}-${monthAbbreviation}-${day}`;
    };

    //Used to handle if country or citizenship field changes.
    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        const country = countryStateData.find((c) => c.country_id === selectedCountry);
        if (e.target.id === 'country') {
            const states = country ? country.states : [];
            setSelectedCountry(selectedCountry);
            setStates(states);
            setSelectedState('');
            setFormData({
                ...formData,
                country: country ? country.country_name : '',
            })
            setFormError({
                ...formError,
                errorCountry: '',
            })
        } else if (e.target.id === 'citizenship') {
            setSelectedCitizenship(selectedCountry);
            setFormData({
                ...formData,
                citizenship: country ? country.country_name : '',
            })
            setFormError({
                ...formError,
                errorCitizenship: '',
            })
        }
    };

    //Used to handle if state field(on form) changes.
    const handleStateChange = (e) => {
        const selectedStateId = e.target.value;
        const selectedState = states.find((state) => state.state_id === selectedStateId);
        setSelectedState(selectedStateId);
        setFormData({
            ...formData,
            state: selectedState ? selectedState.state_name : '',
        })
        setFormError({
            ...formError,
            errorState: '',
        })
    };

    // Used to return variable name with error prefix.
    const giveNameWithError = (name) => {
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        const nameWithError = 'error' + capitalizedName;
        return nameWithError;
    }


    //Used to handle for any input field changes in form.
    const handleInputChange = (event) => {
        const { id, value, files } = event.target;
        const errorId = giveNameWithError(id);
        // console.log("event is: ", event);
        if (id === 'middleName' || id === 'visaStatus' || id === 'contractingRate' || id === 'skill' || id === 'addressLine2' || id === 'visaExpense' || id === 'otherExpense') {
            setFormData(prevState => ({ ...prevState, [id]: value }));
            setFormError(prevState => ({ ...prevState, [errorId]: '' }))
        } else if (id === 'photo' || id === 'resume' || id === 'passport' || id === 'workAuthorization') {
            setFormData(prevState => ({ ...prevState, [id]: files[0] }));
            setFormError(prevState => ({ ...prevState, [errorId]: '' }))
        } else if (id === 'employmentStartDate') {
            const formattedDate = formatDate(value); // Format the date
            setFormData(prevState => ({ ...prevState, [id]: value }));
            setFormError(prevState => ({ ...prevState, [errorId]: '' }))
        } else if (id === 'employmentCompany' || id === 'contractingCompany') {
            setFormData(prevState => ({ ...prevState, [id]: value }));
            setFormError(prevState => ({ ...prevState, [errorId]: '' }))
        } else if (id === 'employmentNature') {
            setFormData(prevState => ({ ...prevState, [id]: value, contractingRate: '', contractingCompany: '' }));
            setFormError(prevState => ({ ...prevState, [errorId]: '', errorContractingRate: '', errorContractingCompany: '' }))
        } else {
            setFormData(prevState => ({ ...prevState, [id]: value }));
            setFormError(prevState => ({ ...prevState, [errorId]: '' }))
        }
    };

    //Used to check for the existance of any error by calling the function and storing value.
    const checkForError = () => {
        return new Promise(resolve => {
            setFormError(prevState => ({
                ...prevState,
                errorFirstName: InputValidator.isEmpty(formData.firstName),
                errorLastName: InputValidator.isEmpty(formData.lastName),
                errorPhoneNumber: InputValidator.isEmpty(formData.phoneNumber.toString()),
                errorAddressLine1: InputValidator.isEmpty(formData.addressLine1),
                errorState: InputValidator.isEmpty(formData.state),
                errorCountry: InputValidator.isEmpty(formData.country),
                errorCity: InputValidator.isEmpty(formData.city),
                errorZipCode: InputValidator.isEmpty(formData.zipCode),
                errorCitizenship: InputValidator.isEmpty(formData.citizenship),
                errorEmploymentNature: InputValidator.isEmpty(formData.employmentNature),
                errorEmploymentCompany: InputValidator.isEmpty(formData.employmentCompany),
                // errorEmployeeId: InputValidator.isEmpty(formData.employeeId),
                errorWorkingRemote: InputValidator.isEmpty(formData.workingRemote),
                errorEmploymentStartDate: InputValidator.isEmpty(formData.employmentStartDate),
                errorRole: InputValidator.isEmpty(formData.role),
                errorDesignation: InputValidator.isEmpty(formData.designation),
                errorEmploymentStatus: InputValidator.isEmpty(formData.employmentStatus),

                errorCtc: parentComponentName === 'onboardingApprovalFormPage' ? InputValidator.isEmpty(formData.ctc) : '',
                errorBonus: parentComponentName === 'onboardingApprovalFormPage' ? InputValidator.isEmpty(formData.bonus) : '',

                errorEmploymentCompany: InputValidator.isEmpty(formData.employmentCompany),
                errorContractingRate: formData.employmentNature === 'Contract' ? InputValidator.isEmpty(formData.contractingRate) : '',
                errorContractingCompany: formData.employmentNature === 'Contract' ? InputValidator.isEmpty(formData.contractingCompany) : '',

            }));
            resolve();  // Resolve the Promise after the state is updated
        });

    }

    //Used to handle event after the form submission.
    const handleSubmit = async (event) => {
        event.preventDefault();
        await checkForError();

        if (parentComponentName === 'onboardingApprovalFormPage' &&
            formError.errorFirstName === '' && formError.errorLastName === ''
            && formError.errorPhoneNumber === '' && formError.errorAddressLine1 === ''
            && formError.errorState === ''
            && formError.errorCountry === '' && formError.errorZipCode === ''
            && formError.errorCitizenship === '' && formError.errorEmploymentNature === ''
            && formError.errorEmploymentCompany === '' && formError.errorEmployeeId === ''
            && formError.errorWorkingRemote === '' && formError.errorEmploymentStartDate === ''
            && formError.errorRole === '' && formError.errorDesignation === ''
            && formError.errorEmploymentStatus === ''
            && formError.errorCtc === '' && formError.errorBonus === ''
            && formError.errorEmploymentCompany === '' && formError.errorContractingCompany === ''
            && formError.errorContractingRate === ''

        ) {
            console.log("Succed from approval");
            console.log('Form Data:', formData);
            console.log('error data: ', formError);
        } else if (parentComponentName === 'newOnboarding' &&
            formError.errorFirstName === '' && formError.errorLastName === ''
            && formError.errorPhoneNumber === '' && formError.errorAddressLine1 === ''
            && formError.errorState === ''
            && formError.errorCountry === '' && formError.errorZipCode === ''
            && formError.errorCitizenship === '' && formError.errorEmploymentNature === ''
            && formError.errorEmploymentCompany === '' && formError.errorEmployeeId === ''
            && formError.errorWorkingRemote === '' && formError.errorEmploymentStartDate === ''
            && formError.errorRole === '' && formError.errorDesignation === ''
            && formError.errorEmploymentStatus === ''
            && formError.errorEmploymentCompany === '' && formError.errorContractingCompany === ''
            && formError.errorContractingRate === '') {
            console.log("Succed from new onboarding");
            console.log('Form Data:', formData);
            console.log('error data: ', formError);
        } else {
            console.log('Failed data error: ', formError);
            console.log('Failed data: ', formData);
        }

    };

    //Used to go to the onboarding approval page.
    const handleBackButtonClick = () => {
        history.push("/recruiter/manager/onboarding-approval");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name<span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" onChange={handleInputChange} value={formData.firstName || ''} />
                        {formError.errorFirstName && <span className="text-danger small">{formError.errorFirstName}</span>}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="middleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Middle Name" onChange={handleInputChange} value={formData.middleName || ''} />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name<span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" onChange={handleInputChange} value={formData.lastName || ''} />
                        {formError.errorLastName && <span className="text-danger small">{formError.errorLastName}</span>}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="phoneNumber">
                        <Form.Label>Phone Number<span className="text-danger">*</span></Form.Label>
                        {/* <Form.Control type="text" placeholder="Enter phone number" onChange={handleInputChange} value={formData.phoneNumber}  /> */}
                        <PhoneInput
                            country={'in'}
                            value={formData.phoneNumber || ''}
                            onChange={(value) => handleInputChange({ target: { id: 'phoneNumber', value } })}
                            inputProps={{
                                required: true,
                            }}
                            className='form-control'
                            inputClass='border-0'
                            buttonClass='border-0 bg-transparent'
                        />
                        {formError.errorPhoneNumber && <span className="text-danger small">{formError.errorPhoneNumber}</span>}
                    </Form.Group>
                </Col>
            </Row>

            <Row>

                <Col md={6}>
                    <Form.Group controlId="country">
                        <Form.Label>Country<span className="text-danger">*</span></Form.Label>
                        <Form.Control as="select" onChange={handleCountryChange} value={selectedCountry} >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                            ))}

                        </Form.Control>
                        {formError.errorCountry && <span className="text-danger small">{formError.errorCountry}</span>}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="state">
                        <Form.Label>State<span className="text-danger">*</span></Form.Label>

                        <Form.Control as="select" onChange={handleStateChange} value={selectedState} >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state.state_id} value={state.state_id}>
                                    {state.state_name}
                                </option>
                            ))}
                        </Form.Control>
                        {formError.errorState && <span className="text-danger small">{formError.errorState}</span>}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="city">
                        <Form.Label>City<span className="text-danger">*</span></Form.Label>
                        <Form.Control placeholder="Enter City" onChange={handleInputChange} value={formData.city} />
                        {formError.errorCity && <span className="text-danger small">{formError.errorCity}</span>}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="addressLine1">
                        <Form.Label>Address Line 1<span className="text-danger">*</span></Form.Label>
                        <Form.Control placeholder="Enter Address Line 1" onChange={handleInputChange} value={formData.addressLine1} />
                        {formError.errorAddressLine1 && <span className="text-danger small">{formError.errorAddressLine1}</span>}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="addressLine2">
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control placeholder="Enter Address Line 2" onChange={handleInputChange} value={formData.addressLine2} />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group controlId="zipCode">
                        <Form.Label>Zip Code<span className="text-danger">*</span></Form.Label>
                        <Form.Control placeholder="Enter Zip Code" onChange={handleInputChange} value={formData.zipCode} />
                        {formError.errorZipCode && <span className="text-danger small">{formError.errorZipCode}</span>}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="visaStatus">
                        <Form.Label>Visa Status</Form.Label>
                        {/* <Form.Control as="select" onChange={handleInputChange} value={formData.visaStatus} >
                            <option value={''}>Choose...</option>
                            <option value={'H1B'}>H1B</option>
                            <option value={'F1'}>F1</option>
                        </Form.Control> */}
                        <Form.Control as="select" onChange={handleInputChange} value={formData.visaStatus}>
                            <option value="">Select Visa Status</option>
                            {visaStatusList.map((value, index) => (
                                <option key={index} value={value}>
                                    {value}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="citizenship">
                        <Form.Label>Citizenship<span className="text-danger">*</span></Form.Label>
                        {/* <Form.Control placeholder="Enter citizenship" onChange={handleInputChange} value={formData.citizenship}  /> */}
                        <Form.Control as="select" onChange={handleCountryChange} value={selectedCitizenship} >
                            <option value="">Select Citizership</option>
                            {countries.map((country) => (
                                <option key={country.id} value={country.id}>{country.name}</option>
                            ))}
                        </Form.Control>
                        {formError.errorCitizenship && <span className="text-danger small">{formError.errorCitizenship}</span>}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="employmentNature">
                        <Form.Label>Employment Nature<span className="text-danger">*</span></Form.Label>
                        {/* <Form.Control as="select" onChange={handleInputChange} value={formData.employmentNature} >
                            <option value={''}>Choose...</option>
                            <option value={'Fulltime'}>Fulltime</option>
                            <option value={'Contract'}>Contract</option>
                        </Form.Control> */}
                        <Form.Control as="select" onChange={handleInputChange} value={formData.employmentNature}>
                            <option value="">Select Employment nature</option>
                            {employmentNatureList.map((value, index) => (
                                <option key={index} value={value}>
                                    {value}
                                </option>
                            ))}
                        </Form.Control>
                        {formError.errorEmploymentNature && <span className="text-danger small">{formError.errorEmploymentNature}</span>}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="employmentCompany">
                        <Form.Label>Employment Company<span className="text-danger">*</span></Form.Label>
                        <Form.Control placeholder="Enter Employment Company" onChange={handleInputChange} value={formData.employmentCompany} />
                        {formError.errorEmploymentCompany && <span className="text-danger small">{formError.errorEmploymentCompany}</span>}
                    </Form.Group>
                </Col>
            </Row>

            {formData.employmentNature === 'Contract' && <Row>
                <Col md={3}>
                    <Form.Group controlId="contractingRate">
                        <Form.Label>Contracting Rate{formData.employmentNature === 'Contract' && <span className="text-danger">*</span>}</Form.Label>
                        <Form.Control placeholder="Enter Contracting Rate" onChange={handleInputChange} value={formData.contractingRate} />
                        {formError.errorContractingRate && <span className="text-danger small">{formError.errorContractingRate}</span>}
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId="contractingRateCurrency">
                        <Form.Label>Currency(Contracting Rate){formData.employmentNature === 'Contract' && <span className="text-danger">*</span>}</Form.Label>
                        {/* <Form.Control placeholder="Enter Currency" onChange={handleInputChange} value={formData.contractingRateCurrency} /> */}
                        <Form.Control as="select" onChange={handleInputChange} value={formData.contractingRateCurrency}>
                            {/* <option value="">Select Currency</option> */}
                            {currencyTypeList.map((currency, index) => (
                                <option key={index} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </Form.Control>
                        {formError.errorContractingRateCurrency && <span className="text-danger small">{formError.errorContractingRateCurrency}</span>}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="contractingCompany">
                        <Form.Label>Contracting Company{formData.employmentNature === 'Contract' && <span className="text-danger">*</span>}</Form.Label>
                        <Form.Control placeholder="Enter Contracting Company" onChange={handleInputChange} value={formData.contractingCompany} />
                        {formError.errorContractingCompany && <span className="text-danger small">{formError.errorContractingCompany}</span>}
                    </Form.Group>
                </Col>
            </Row>}

            <Row>
                <Col md={6}>
                    <Form.Group controlId="workingRemote">
                        <Form.Label>Working Remote<span className="text-danger">*</span></Form.Label>
                        {/* <Form.Control as="select" onChange={handleInputChange} value={formData.workingRemote} >
                            <option value={''}>Choose...</option>
                            <option value={'Yes'}>Yes</option>
                            <option value={'No'}>No</option>
                        </Form.Control> */}
                        <Form.Control as="select" onChange={handleInputChange} value={formData.workingRemote}>
                            <option value="">select option</option>
                            {yesNoList.map((value, index) => (
                                <option key={index} value={value}>
                                    {value}
                                </option>
                            ))}
                        </Form.Control>
                        {formError.errorWorkingRemote && <span className="text-danger small">{formError.errorWorkingRemote}</span>}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="employmentStartDate">
                        <Form.Label>Employment Start Date (dd-mm-yyyy)<span className="text-danger">*</span></Form.Label>
                        <Form.Control type='date' placeholder="Enter Start Date" onChange={handleInputChange} value={formData.employmentStartDate} />
                        {formError.errorEmploymentStartDate && <span className="text-danger small">{formError.errorEmploymentStartDate}</span>}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="role">
                        <Form.Label>Role<span className="text-danger">*</span></Form.Label>
                        {/* <Form.Control placeholder="Enter role" onChange={handleInputChange} value={formData.role} /> */}
                        <Form.Control as="select" onChange={handleInputChange} value={formData.role}>
                            <option value="">Select Role</option>
                            {roleList.map((value, index) => (
                                <option key={index} value={value}>
                                    {value}
                                </option>
                            ))}
                        </Form.Control>
                        {formError.errorRole && <span className="text-danger small">{formError.errorRole}</span>}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="designation">
                        <Form.Label>Designation<span className="text-danger">*</span></Form.Label>
                        {/* <Form.Control placeholder="Enter designation" onChange={handleInputChange} value={formData.designation} /> */}
                        <Form.Control as="select" onChange={handleInputChange} value={formData.designation}>
                            <option value="">Select Designation</option>
                            {designationList.map((value, index) => (
                                <option key={index} value={value}>
                                    {value}
                                </option>
                            ))}
                        </Form.Control>
                        {formError.errorDesignation && <span className="text-danger small">{formError.errorDesignation}</span>}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="skill">
                        <Form.Label>Skill</Form.Label>
                        <Form.Control placeholder="Enter Skills" onChange={handleInputChange} value={formData.skill} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="employmentStatus">
                        <Form.Label>Employment Status<span className="text-danger">*</span></Form.Label>
                        {/* <Form.Control placeholder="Enter employment status" onChange={handleInputChange} value={formData.employmentStatus} /> */}
                        <Form.Control as="select" onChange={handleInputChange} value={formData.employmentStatus}>
                            <option value="">Select status</option>
                            {employmentStatusList.map((value, index) => (
                                <option key={index} value={value}>
                                    {value}
                                </option>
                            ))}
                        </Form.Control>
                        {formError.errorEmploymentStatus && <span className="text-danger small">{formError.errorEmploymentStatus}</span>}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="photo">
                        <Form.Label>Photo</Form.Label>
                        <Form.File
                            id="photo"
                            label="Choose photograph"
                            custom
                            onChange={handleInputChange}
                        />
                        {formData.photo && <p>Selected file: {formData.photo.name}</p>}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="resume">
                        <Form.Label>Resume</Form.Label>
                        <Form.File
                            id="resume"
                            label="Choose resume"
                            custom
                            onChange={handleInputChange}
                        />
                        {formData.resume && <p>Selected file: {formData.resume.name}</p>}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="passport">
                        <Form.Label>Passport</Form.Label>
                        <Form.File
                            id="passport"
                            label="Choose passport"
                            custom
                            onChange={handleInputChange}
                        />
                        {formData.passport && <p>Selected file: {formData.passport.name}</p>}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="workAuthorization">
                        <Form.Label>Work Authorization</Form.Label>
                        <Form.File
                            id="workAuthorization"
                            label="Choose work authorization"
                            custom
                            onChange={handleInputChange}
                        />
                        {formData.workAuthorization && <p>Selected file: {formData.workAuthorization.name}</p>}
                    </Form.Group>
                </Col>
            </Row>

            {parentComponentName === 'onboardingApprovalFormPage' &&
                (<Row>
                    <Col md={3}>
                        <Form.Group controlId="ctc">
                            <Form.Label>CTC<span className="text-danger">*</span></Form.Label>
                            <Form.Control placeholder="Enter CTC" onChange={handleInputChange} value={formData.ctc} />
                            {formError.errorCtc && <span className="text-danger small">{formError.errorCtc}</span>}
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="ctcCurrency">
                            <Form.Label>Select Currency (CTC)<span className="text-danger">*</span></Form.Label>
                            {/* <Form.Control placeholder="Select Currency" onChange={handleInputChange} value={formData.ctcCurrency} /> */}
                            <Form.Control as="select" onChange={handleInputChange} value={formData.ctcCurrency}>
                                {/* <option value="">Select Currency</option> */}
                                {currencyTypeList.map((currency, index) => (
                                    <option key={index} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </Form.Control>
                            {formError.errorCtcCurrency && <span className="text-danger small">{formError.errorCtcCurrency}</span>}
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group controlId="bonus">
                            <Form.Label>Bonus<span className="text-danger">*</span></Form.Label>
                            <Form.Control placeholder="Enter Bonus" onChange={handleInputChange} value={formData.bonus} />
                            {formError.errorBonus && <span className="text-danger small">{formError.errorBonus}</span>}
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="bonusCurrency">
                            <Form.Label>Select Currency (Bonus)<span className="text-danger">*</span></Form.Label>
                            {/* <Form.Control placeholder="Select Currency" onChange={handleInputChange} value={formData.bonusCurrency} /> */}
                            <Form.Control as="select" onChange={handleInputChange} value={formData.bonusCurrency}>
                                {/* <option value="">Select Currency</option> */}
                                {currencyTypeList.map((currency, index) => (
                                    <option key={index} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </Form.Control>
                            {formError.errorBonusCurrency && <span className="text-danger small">{formError.errorBonusCurrency}</span>}
                        </Form.Group>
                    </Col>
                </Row>)}

            {parentComponentName === 'onboardingApprovalFormPage' &&
                (<Row>
                    <Col md={3}>
                        <Form.Group controlId="visaExpense">
                            <Form.Label>Visa expense</Form.Label>
                            <Form.Control placeholder="Enter Visa Expense" onChange={handleInputChange} value={formData.visaExpense} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="visaExpenseCurrency">
                            <Form.Label>Select Currency (Visa)</Form.Label>
                            {/* <Form.Control placeholder="select currency" onChange={handleInputChange} value={formData.visaExpenseCurrency} /> */}
                            <Form.Control as="select" onChange={handleInputChange} value={formData.visaExpenseCurrency}>
                                {/* <option value="">Select Currency</option> */}
                                {currencyTypeList.map((currency, index) => (
                                    <option key={index} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group controlId="otherExpense">
                            <Form.Label>Other Expense</Form.Label>
                            <Form.Control placeholder="Enter Other Expense" onChange={handleInputChange} value={formData.otherExpense} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="otherExpenseCurrency">
                            <Form.Label>Select Currency (Other)</Form.Label>
                            {/* <Form.Control placeholder="select currency" onChange={handleInputChange} value={formData.otherExpenseCurrency} /> */}
                            <Form.Control as="select" onChange={handleInputChange} >
                                {/* <option value="">Select Currency</option> */}
                                {currencyTypeList.map((currency, index) => (
                                    <option key={index} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>)}


            {parentComponentName === 'newOnboarding' && <Button variant="primary" type="submit">
                Onboard
            </Button>}

            {/* {parentComponentName === 'onboardingApprovalFormPage' && <Button variant="primary" type="submit">
                Approve
            </Button>}

            {parentComponentName === 'onboardingApprovalFormPage' && <Button variant="primary" className='bg-danger'>
                Reject
            </Button>}

            {parentComponentName === 'onboardingApprovalFormPage' && <Button variant="primary" className='bg-danger' onClick={handleBackButtonClick}>
                Back
            </Button>} */}

            {parentComponentName === 'onboardingApprovalFormPage' && <div>
                {/* <div>
                    <Button variant="primary" type="submit">Approve</Button>
                    <Button variant="primary" className='bg-danger'>Reject </Button>
                </div>
                <div>
                    <Button variant="primary" className='bg-danger' onClick={handleBackButtonClick}>Back</Button>
                </div> */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <Button variant="primary" type="submit">Approve</Button>
                        <Button variant="primary" className='bg-danger ml-2'>Reject</Button>
                    </div>
                    <div>
                        <Button variant="primary" className='bg-primary' onClick={handleBackButtonClick}>Back</Button>
                    </div>
                </div>
            </div>}
        </Form>
    )

}

import React, { Component, useEffect, useState } from 'react'
import { Form, Col, Row, Button, Modal } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import InputValidator from '../../../validations/fieldValidation/InputValidator'
import countryStateData from '../../../assets/lists/countryStateData.json';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
    AdharPopUpUpload, PhotoPopUpUpload, ResumePopUpUpload,
    PassportPopUpUpload, WorkAuthorizationPopUpUpload, I94TravelHistoryPopUpUpload,
    PhotoIdPopUpUpload, RentalAgreementPopUpUpload, EducationDetailsPopUpUpload,
    I9CopyPopUpUpload, PanPopUpUpload
} from './PopUpForDocuments';

import { currencyTypeList, roleList, designationList, yesNoList, employmentNatureList, visaStatusList, employmentStatusList, onshoreOrOffshoreList } from '../../../assets/lists/lists'


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
        employmentStatus: employmentStatusList[0],

        workLocation: '',
        onshoreOrOffshore: '',

        ctc: '',
        bonus: '',
        visaExpense: '',
        otherExpense: '',
        employmentCompany: '',
        contractingCompany: '',

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

        errorWorkLocation: '',
        errorOnshoreOrOffshore: '',

        errorCtcCurrency: '',
        errorBonusCurrency: '',
        errorContractingRateCurrency: '',

        errorPhoto: '',
        errorResume: '',

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

                workLocation: employeeData.workLocation || '',
                onshoreOrOffshore: employeeData.onshoreOrOffshore || '',

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

                errorWorkLocation: InputValidator.isEmpty(formData.workLocation),
                errorOnshoreOrOffshore: InputValidator.isEmpty(formData.onshoreOrOffshore),

                errorPhoto: InputValidator.isObjectEmpty(photo) ? "Select Attachment" : '',
                errorResume: InputValidator.isObjectEmpty(resume) ? "Select Attachment" : '',
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
            console.log('photo id details: ', photoIdDetails);
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
            // console.log('photo id details: ', photoIdDetails);
        } else {
            console.log('Failed data error: ', formError);
            console.log('Failed data: ', formData);
            // console.log('photo id details: ', photoIdDetails);
        }

    };

    //Used to go to the onboarding approval page.
    const handleBackButtonClick = () => {
        history.push("/recruiter/manager/onboarding-approval");
    }

    //For adhar Card
    const [adharCard, setAdharCard] = useState({
        showAttachmentModal: false,
        showViewModal: false,
        document: null,
        adharNumber: '',
        dob: '',
    })
    function showAdharAttachment() {
        setAdharCard((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveAdharCard() {
        setAdharCard((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            showViewModal: false,
            document: null,
            adharNumber: '',
        }))
    }
    //End for adhar card


    //Starting for attach photo
    const [photo, setPhoto] = useState({
        showAttachmentModal: false,
        document: null,
    })
    function showPhotoAttachment() {
        setFormError({
            ...formError,
            errorPhoto: '',
        })
        setPhoto((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemovePhoto() {
        setPhoto((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //End for attach photo


    //Starting for attach Resume
    const [resume, setResume] = useState({
        showAttachmentModal: false,
        document: null,
    })
    function showResumeAttachment() {
        setFormError({
            ...formError,
            errorResume: '',
        })
        setResume((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveResume() {
        setResume((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //End for attach Resume

    //Starting for attach Passport
    const [passport, setPassport] = useState({
        showAttachmentModal: false,
        document: null,
        country: '',
        issueDate: '',
        passportNumber: '',
        expDate: '',
    })
    function showPassportAttachment() {
        setPassport((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemovePassport() {
        setPassport((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
            country: '',
            issueDate: '',
            passportNumber: '',
            expDate: '',
        }))
    }
    //End for attach Passport

    //Starting for attach Work Autorization
    const [workAuthorization, setWorkAuthorization] = useState({
        showAttachmentModal: false,
        document: null,
        workAuthorizationNumber: '',
        validTill: '',
    })
    function showWorkAuthorizationAttachment() {
        setWorkAuthorization((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveWorkAuthorization() {
        setWorkAuthorization((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //End for attach Work Autorization

    //Starting for attach I94 Travel History
    const [i94TravelHistory, setI94TravelHistory] = useState({
        showAttachmentModal: false,
        document: null,
    })
    function showI94TravelHistoryAttachment() {
        setI94TravelHistory((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveI94TravelHistory() {
        setI94TravelHistory((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //End for attach I94 Travel History

    //Starting for attach Photo id.
    const [photoId, setPhotoId] = useState({
        showAttachmentModal: false,
        document: null,
    })
    function showPhotoIdAttachment() {
        setPhotoId((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemovePhotoId() {
        setPhotoId((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //End for attach Photo id

    //Starting for attach Rental Agreement.
    const [rentalAgreememt, setRentalAgreememt] = useState({
        showAttachmentModal: false,
        document: null,
    })
    function showRentalAgreememtAttachment() {
        setRentalAgreememt((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveRentalAgreememtd() {
        setRentalAgreememt((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //End for attach Rental Agreement

    //Starting for attach Education Details.
    const [educationDetails, setEducationDetails] = useState({
        showAttachmentModal: false,
        document: null,
    })
    function showEducationDetailsAttachment() {
        setEducationDetails((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveEducationDetails() {
        setEducationDetails((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //End for attach Education Details.

    //Starting for attach I9 copy.
    const [i9Copy, setI9Copy] = useState({
        showAttachmentModal: false,
        document: null,
    })
    function showI9CopyAttachment() {
        setI9Copy((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveI9Copy() {
        setI9Copy((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //End for attach i9 copy.

    //Starting for attach Pan card.
    const [pan, setPan] = useState({
        showAttachmentModal: false,
        document: null,
        panNumber: '',
    })
    function showPanAttachment() {
        setPan((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemovePan() {
        setPan((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //End for attach Pan card.



    return (
        <>
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
                        <Form.Group controlId="workLocation">
                            <Form.Label>Work Location (City)<span className="text-danger">*</span></Form.Label>
                            <Form.Control placeholder="Enter Work Location" onChange={handleInputChange} value={formData.workLocation} />
                            {formError.errorWorkLocation && <span className="text-danger small">{formError.errorWorkLocation}</span>}
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="onshoreOrOffshore">
                            <Form.Label>On Shore / Off Shore<span className="text-danger">*</span></Form.Label>
                            <Form.Control as="select" onChange={handleInputChange} value={formData.onshoreOrOffshore}>
                                <option value="">Select Option</option>
                                {onshoreOrOffshoreList.map((value, index) => (
                                    <option key={index} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </Form.Control>
                            {formError.errorOnshoreOrOffshore && <span className="text-danger small">{formError.errorOnshoreOrOffshore}</span>}
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="visaStatus">
                            <Form.Label>Visa Status</Form.Label>
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
                            <Form.Control as="select" onChange={handleInputChange} value={formData.workingRemote}>
                                <option value="">Select Option</option>
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
                            <Form.Control as="select" onChange={handleInputChange} value={formData.employmentStatus} disabled>
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

                {/* Attachment for photo and resume. */}
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="photo">
                            <Form.Label>Photo</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {photo.document ? 'View Your Document' : 'Select Document'}

                                {photo.document ? (
                                    <>
                                        <button type='button' className='float-right btn bg-danger text-white ctm-border-radius' onClick={handleRemovePhoto} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showPhotoAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button variant="danger" type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showPhotoAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                            {formError.errorPhoto && <span className="text-danger small">{formError.errorPhoto}</span>}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="resume">
                            <Form.Label>Resume</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {resume.document ? 'View Your Document' : 'Select Document'}

                                {resume.document ? (
                                    <>
                                        <button type='button' className='float-right btn bg-danger text-white ctm-border-radius' onClick={handleRemoveResume} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showResumeAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button variant="danger" type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showResumeAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                            {formError.errorResume && <span className="text-danger small">{formError.errorResume}</span>}
                        </Form.Group>
                    </Col>
                </Row>

                {/* Attachment for adhar card and rental agreement. */}
                {formData.onshoreOrOffshore === onshoreOrOffshoreList[0] && <Row>
                    <Col md={6}>
                        <Form.Group controlId="adhar">
                            <Form.Label>Aadhaar Card</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {adharCard.document ? 'View Your Document' : 'Select Document'}

                                {adharCard.document ? (
                                    <>
                                        <button type='button' className='float-right btn bg-danger text-white ctm-border-radius' onClick={handleRemoveAdharCard} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showAdharAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button variant="danger" type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showAdharAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="rentalAgreememt">
                            <Form.Label>Rental Agreement</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {rentalAgreememt.document ? 'View Your Document' : 'Select Document'}

                                {rentalAgreememt.document ? (
                                    <>
                                        <button type='button' className='float-right btn bg-danger text-white ctm-border-radius' onClick={handleRemoveRentalAgreememtd} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showRentalAgreememtAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button variant="danger" type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showRentalAgreememtAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                    </Col>
                </Row>}

                {/* attachment for Highest education certificates and Photo id */}
                {formData.onshoreOrOffshore === onshoreOrOffshoreList[0] && <Row>
                    <Col md={6}>
                        <Form.Group controlId="educationCertificate">
                            <Form.Label>Highest Education Certificate</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {educationDetails.document ? 'View Your Document' : 'Select Document'}

                                {educationDetails.document ? (
                                    <>
                                        <button type='button' className='float-right  btn bg-danger text-white ctm-border-radius' onClick={handleRemoveEducationDetails} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showEducationDetailsAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button variant="danger" type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showEducationDetailsAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                    </Col>

                    {/* popup form */}
                    <Col md={6}>
                        <Form.Group controlId="photoId">
                            <Form.Label>Photo Id</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {photoId.document ? 'View Your Document' : 'Select Document'}

                                {photoId.document ? (
                                    <>
                                        <button type='button' className='float-right btn bg-danger text-white ctm-border-radius' onClick={handleRemovePhotoId} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showPhotoIdAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button variant="danger" type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showPhotoIdAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                    </Col>
                </Row>}

                {/* pan */}
                {formData.onshoreOrOffshore === onshoreOrOffshoreList[0] && <Row>
                    <Col md={6}>
                        <Form.Group controlId="pan">
                            <Form.Label>PAN</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {pan.document ? 'View Your Document' : 'Select Document'}

                                {pan.document ? (
                                    <>
                                        <button type='button' className='float-right btn bg-danger text-white ctm-border-radius' onClick={handleRemovePan} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showPanAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button variant="danger" type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showPanAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                    </Col>
                </Row>}

                {/* Education Certificate and I9 copy. */}
                {formData.onshoreOrOffshore === onshoreOrOffshoreList[1] && <Row>
                    <Col md={6}>
                        <Form.Group controlId="i94TravelHistory">
                            <Form.Label>I94 Travel History</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {i94TravelHistory.document ? 'View Your Document' : 'Select Document'}

                                {i94TravelHistory.document ? (
                                    <>
                                        <button type='button' className='float-right btn bg-danger text-white ctm-border-radius' onClick={handleRemoveI94TravelHistory} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showI94TravelHistoryAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button variant="danger" type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showI94TravelHistoryAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="i9Copy">
                            <Form.Label>I9 Copy</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {i9Copy.document ? 'View Your Document' : 'Select Document'}

                                {i9Copy.document ? (
                                    <>
                                        <button type='button' className='float-right btn bg-danger text-white ctm-border-radius' onClick={handleRemoveI9Copy} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showI9CopyAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showI9CopyAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                    </Col>
                </Row>}

                {/* Attachment for passport and work authorization. */}
                {formData.onshoreOrOffshore === onshoreOrOffshoreList[1] && <Row>
                    <Col md={6}>
                        <Form.Group controlId="passport">
                            <Form.Label>Passport</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {passport.document ? 'View Your Document' : 'Select Document'}

                                {passport.document ? (
                                    <>
                                        <button type='button' className='float-right btn bg-danger text-white ctm-border-radius' onClick={handleRemovePassport} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showPassportAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button variant="danger" type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showPassportAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="workAuthorization">
                            <Form.Label>Work Authorization</Form.Label>
                            <div className='document-up col-12'>
                                <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'>
                                </i>
                                {workAuthorization.document ? 'View Your Document' : 'Select Document'}

                                {workAuthorization.document ? (
                                    <>
                                        <button type='button' className='float-right btn bg-danger text-white ctm-border-radius' onClick={handleRemoveWorkAuthorization} >
                                            Remove
                                        </button>
                                        <button type='button' className='float-right ml-2 btn bg-success text-white ctm-border-radius' onClick={showWorkAuthorizationAttachment} >
                                            View
                                        </button>
                                    </>
                                ) : (
                                    <button variant="danger" type='button' className='float-right btn btn-info text-white ctm-border-radius' onClick={showWorkAuthorizationAttachment} >
                                        Upload
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                    </Col>
                </Row>}

                {/* CTC and Bonus */}
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

                {/* Visa expense and Other expense */}
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
                                <Form.Control as="select" onChange={handleInputChange} value={formData.otherExpenseCurrency} >
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


                {parentComponentName === 'newOnboarding' &&
                    <div className='d-flex justify-content-between align-items-center mt-2 mb-2 mr-2 float-right'>
                        <Button variant="primary" type="submit" className='btn btn-theme button-1 text-white ctm-border-radius '>
                            Onboard
                        </Button>
                    </div>
                }

                {parentComponentName === 'onboardingApprovalFormPage' && <div>
                    {parentComponentName === 'onboardingApprovalFormPage' && (
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="d-flex">
                                <Button variant="primary" type="submit" className='btn btn-theme button-1 text-white ctm-border-radius'>Approve</Button>
                                <Button variant="danger" className='btn btn-danger ctm-border-radius text-center'>Reject</Button>
                            </div>
                            <div>
                                <Button variant="primary" className='btn bg-secondary ctm-border-radius text-center ' onClick={handleBackButtonClick}>Back</Button>
                            </div>
                        </div>
                    )}

                </div>}
            </Form>

            {/* Upload Adhar*/}
            <AdharPopUpUpload
                adharCard={adharCard}
                setAdharCard={setAdharCard}
            />
            {/* Upload Photo*/}
            <PhotoPopUpUpload
                photo={photo}
                setPhoto={setPhoto}
            />
            {/* Upload Resume*/}
            <ResumePopUpUpload
                resume={resume}
                setResume={setResume}
            />
            {/* Upload Passport*/}
            <PassportPopUpUpload
                passport={passport}
                setPassport={setPassport}
            />
            {/* Upload Work Authorization*/}
            <WorkAuthorizationPopUpUpload
                workAuthorization={workAuthorization}
                setWorkAuthorization={setWorkAuthorization}
            />
            {/* Upload I94 Travel History*/}
            <I94TravelHistoryPopUpUpload
                i94TravelHistory={i94TravelHistory}
                setI94TravelHistory={setI94TravelHistory}
            />
            {/* Upload Photo id*/}
            <PhotoIdPopUpUpload
                photoId={photoId}
                setPhotoId={setPhotoId}
            />
            {/* Upload Rental Agreeement*/}
            <RentalAgreementPopUpUpload
                rentalAgreement={rentalAgreememt}
                setRentalAgreement={setRentalAgreememt}
            />
            {/* Upload Education Details*/}
            <EducationDetailsPopUpUpload
                educationDetails={educationDetails}
                setEducationDetails={setEducationDetails}
            />
            {/* Upload I9 Copy*/}
            <I9CopyPopUpUpload
                i9Copy={i9Copy}
                setI9Copy={setI9Copy}
            />
            {/* Upload Pan card*/}
            <PanPopUpUpload
                pan={pan}
                setPan={setPan}
            />


        </>
    )

}
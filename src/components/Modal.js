import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MapSearch from './MapSearch';

function SignupModal(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipcode] = useState("");
  const [volunteerInterest, setVolunteerInterest] = useState("");
  const [availability, setAvailability] = useState("");
  const [isRepresentingOrganization, setIsRepresentingOrganization] = useState(false);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handleVolunteerInterestChange = (event) => {
    setVolunteerInterest(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  function validatePhone(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  }

  function validateZipCode(zipCode) {
    const regex = /^\d{6}$/;
    return regex.test(zipCode);
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validateName(name) {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return regex.test(name);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let errorMessage =
      " Kindly input valid details for the following fields: \n";

    if (!validateName(name)) {
      errorMessage += " Name\n";
    }

    if (!validateEmail(email)) {
      errorMessage += " Email\n";
    }

    if (!validatePhone(phone)) {
      errorMessage += " PhoneNumber\n";
    }

    if (!validateZipCode(zipCode)) {
      errorMessage += " PIN\n";
    }

    if (errorMessage !== " Kindly input valid details for the following fields: \n") {
      alert(errorMessage);
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Name:", name);
    console.log("Phone number:", phone);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("State:", state);
    console.log("Zip code:", zipCode);
    console.log("Interested in volunteering:", volunteerInterest);
    if (volunteerInterest === "Yes") {
      console.log("Availability:", availability);
    }
    if (isRepresentingOrganization) {
        const organizationType = document.getElementById('formBasicOrganizationType').value;
        const organizationHours = document.getElementById('formBasicOrganizationHours').value;
      
        console.log("Type of organization:", organizationType);
        console.log("Hours of operation:", organizationHours);
      }

  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Phone number"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              value={state}
              onChange={handleStateChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={city}
              onChange={handleCityChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicZipcode">
            <Form.Label>Zip code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip code"
              value={zipCode}
              onChange={handleZipcodeChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicVolunteerInterest">
            <Form.Label>Are you interested in volunteering?</Form.Label>
            <div key={"inline-radio"} className="mb-3">
              <Form.Check
                inline
                label="Yes"
                name="volunteerInterest"
                type={"radio"}
                id={`inline-radio-1`}
                value={"Yes"}
                onChange={handleVolunteerInterestChange}
              />
              <Form.Check
                inline
                label="No"
                name="volunteerInterest"
                type={"radio"}
                id={`inline-radio-2`}
                value={"No"}
                onChange={handleVolunteerInterestChange}
              />
            </div>
          </Form.Group>

          {volunteerInterest === "Yes" && (
  <Form.Group controlId="formBasicAvailability">
    <Form.Label>Availability</Form.Label>
    <div className="mb-3">
      <Form.Check
        label="Monday"
        name="availability"
        type="checkbox"
        id="inline-checkbox-1"
        value="Monday"
        onChange={handleAvailabilityChange}
      />
      <Form.Check
        label="Tuesday"
        name="availability"
        type="checkbox"
        id="inline-checkbox-2"
        value="Tuesday"
        onChange={handleAvailabilityChange}
      />
      <Form.Check
        label="Wednesday"
        name="availability"
        type="checkbox"
        id="inline-checkbox-3"
        value="Wednesday"
        onChange={handleAvailabilityChange}
      />
      <Form.Check
        label="Thursday"
        name="availability"
        type="checkbox"
        id="inline-checkbox-4"
        value="Thursday"
        onChange={handleAvailabilityChange}
      />
      <Form.Check
        label="Friday"
        name="availability"
        type="checkbox"
        id="inline-checkbox-5"
        value="Friday"
        onChange={handleAvailabilityChange}
      />
      <Form.Check
        label="Saturday"
        name="availability"
        type="checkbox"
        id="inline-checkbox-6"
        value="Saturday"
        onChange={handleAvailabilityChange}
      />
      <Form.Check
        label="Sunday"
        name="availability"
        type="checkbox"
        id="inline-checkbox-7"
        value="Sunday"
        onChange={handleAvailabilityChange}
      />
    </div>
  </Form.Group>
)}

<Form.Group controlId="formBasicOrganization">
  <Form.Label>Are you representing an organization?</Form.Label>
  <div key="inline-radio">
    <Form.Check
      inline
      label="Yes"
      type="radio"
      id="inline-radio-yes"
      checked={isRepresentingOrganization}
      onChange={() => setIsRepresentingOrganization(true)}
    />
    <Form.Check
      inline
      label="No"
      type="radio"
      id="inline-radio-no"
      checked={!isRepresentingOrganization}
      onChange={() => setIsRepresentingOrganization(false)}
    />
  </div>
</Form.Group>

{isRepresentingOrganization && (
  <>
    <Form.Group controlId="formBasicOrganizationType">
      <Form.Label>Type of organization</Form.Label>
      <Form.Control as="select">
        <option>Food bank</option>
        <option>Grocery store</option>
        <option>Restaurant</option>
      </Form.Control>
    </Form.Group>
    
    <Form.Group controlId="formBasicOrganizationHours">
      <Form.Label>Hours of operation</Form.Label>
      <Form.Control type="text" placeholder="Organization hours" />
    </Form.Group>

    <Form.Group style={{ 
    position: 'relative',
    margin: '0 auto',
    marginTop:'10px',
    width: '60%',
    marginRight: '310px'
  }}>
    <MapSearch />
</Form.Group>
  </>
)}
          <Button
            variant="primary"
            onClick={handleSubmit}
            style={{
              backgroundColor: "#990000",
              color: "white",
              marginTop: "15px",
              marginLeft: '680px'
            }}
          >
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignupModal;
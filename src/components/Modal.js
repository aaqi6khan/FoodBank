import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import GoogleMapReact from "google-map-react";
import firebase from "firebase/compat/app";
import { database } from "../firebase";

function SignupModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipcode] = useState("");
  const [volunteerInterest, setVolunteerInterest] = useState("");
  const [availability, setAvailability] = useState([]);
  const [isRepresentingOrganization, setIsRepresentingOrganization] =
    useState(false);
  const [organizationType, setOrganizationType] = useState("");
  const [organizationHours, setOrganizationHours] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [address, setAddress] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
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
    const value = event.target.value;
    if (availability.includes(value)) {
      setAvailability(availability.filter((item) => item !== value));
    } else {
      setAvailability([...availability, value]);
    }
  };

  const handleOrganizationTypeChange = (event) => {
    setOrganizationType(event.target.value);
  };

  const handleOrganizationHoursChange = (event) => {
    setOrganizationHours(event.target.value);
  };

  const [marker, setMarker] = useState(null);

  const onMapClick = (event) => {
    const { lat, lng } = event;
    setMarker({ lat, lng });
    setAddress(`${lat}, ${lng}`);
  };

  const onInputChange = (event) => {
    setOrganizationName(event.target.value);
  };

  const center = { lat: 20.5937, lng: 78.9629 }; // India

  const Marker = () => <div className="marker">+</div>;

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errorMessage = "Kindly input valid details for the following fields:\n";

    if (!validateName(name)) {
      errorMessage += "- Name\n";
    }

    if (!validateEmail(email)) {
      errorMessage += "- Email\n";
    }

    if (!validatePhone(phone)) {
      errorMessage += "- Phone Number\n";
    }

    if (!validateZipCode(zipCode)) {
      errorMessage += "- ZIP Code\n";
    }

    if (
      errorMessage !== "Kindly input valid details for the following fields:\n"
    ) {
      alert(errorMessage);
      return;
    }

    try {
      // Create a new user in Firebase Authentication
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      // Create a new user object with the form data
      const user = {
        name,
        email: authUser.user.email,
        phone,
        city,
        state,
        zipCode,
        volunteerInterest,
        availability: volunteerInterest === "Yes" ? availability : null,
        isRepresentingOrganization,
        organizationType: isRepresentingOrganization ? organizationType : null,
        organizationHours: isRepresentingOrganization
          ? organizationHours
          : null,
        organizationName: isRepresentingOrganization ? organizationName : null,
        organizationAddress: isRepresentingOrganization ? address : null,
      };

      // Push the user object to the Firebase database
      database.ref("users").push(user);

      //seperating data based on the type of organization
      let collectionName = "";
      if (isRepresentingOrganization) {
        switch (organizationType) {
          case "Grocery store":
            collectionName = "groceries";
            break;
          case "Restaurant":
            collectionName = "restaurants";
            break;
          default:
            collectionName = "foodbanks";
        }
      }
      const org = {
        name,
        email: authUser.user.email,
        phone,
        city,
        state,
        zipCode,
        volunteerInterest,
        availability: volunteerInterest === "Yes" ? availability : null,
        isRepresentingOrganization,
        organizationType: isRepresentingOrganization ? organizationType : null,
        organizationHours: isRepresentingOrganization
          ? organizationHours
          : null,
        organizationName: isRepresentingOrganization ? organizationName : null,
        organizationAddress: isRepresentingOrganization ? address : null,
      };

      // Push the user object to the appropriate collection in the Firestore database
      database.ref(collectionName).push(org);

      setEmail("");
      setPassword("");
      setName("");
      setPhone("");
      setCity("");
      setState("");
      setZipcode("");
      setVolunteerInterest("");
      setAvailability([]);
      setIsRepresentingOrganization(false);
      setOrganizationType("");
      setOrganizationHours("");
      setOrganizationName("");
      setAddress("");
    } catch (error) {
      console.log("Error creating user:", error);
      alert(
        "It seems like this email is already registered. Please use a different email or try logging in."
      );
      // Handle error, display an error message, etc.
    }
    alert("Your account has been successfully created.");
    props.onHide();
    // Close the modal
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
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={city}
              onChange={handleCityChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              value={state}
              onChange={handleStateChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicZipcode">
            <Form.Label>Zip code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip code"
              value={zipCode}
              onChange={handleZipcodeChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicVolunteerInterest">
            <Form.Label>Are you interested in volunteering?</Form.Label>
            <div key="inline-radio" className="mb-3">
              <Form.Check
                inline
                label="Yes"
                name="volunteerInterest"
                type="radio"
                id="inline-radio-1"
                value="Yes"
                onChange={handleVolunteerInterestChange}
              />
              <Form.Check
                inline
                label="No"
                name="volunteerInterest"
                type="radio"
                id="inline-radio-2"
                value="No"
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
                <Form.Control
                  as="select"
                  value={organizationType}
                  onChange={handleOrganizationTypeChange}
                >
                  <option>FoodBank/NGO</option>
                  <option>Grocery store</option>
                  <option>Restaurant</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicOrganizationHours">
                <Form.Label>Hours of operation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Organization hours"
                  value={organizationHours}
                  onChange={handleOrganizationHoursChange}
                />
              </Form.Group>

              <Form.Group>
                <div
                  style={{
                    height: "350px",
                    width: "760px",
                    marginBottom: "20px",
                  }}
                >
                  <label>
                    Organization Name:
                    <input type="text" onChange={onInputChange} />
                  </label>
                  <label>
                    Address:
                    <input type="text" value={address} readOnly />
                  </label>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyBFBFcLIDFEoIX2utTyxDnPMbNE4ukqbv0&libraries=places",
                      libraries: "places",
                    }}
                    defaultCenter={center}
                    defaultZoom={5}
                    onClick={onMapClick}
                  >
                    {marker && <Marker lat={marker.lat} lng={marker.lng} />}
                  </GoogleMapReact>
                </div>
              </Form.Group>
            </>
          )}

          <Button
            variant="primary"
            type="submit"
            style={{
              backgroundColor: "#990000",
              color: "white",
              marginTop: "20px",
            }}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignupModal;

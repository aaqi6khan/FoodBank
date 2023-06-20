import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { Box } from "@mui/material";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import LoginModal from "../components/LoginModal";
import Link from '@mui/material/Link';

const Profile = () => {
  const [userUID, setUserUID] = useState(null);
  const [userDataUID, setUserDataUID] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [loginShow, setLoginShow] = React.useState(false);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserUID(user.uid);
        retrieveUserDataUID(user.email);
      } else {
        setUserUID(null);
        setUserDataUID("");
        setUserDetails(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const retrieveUserDataUID = (email) => {
    const usersRef = firebase.database().ref("users");
    usersRef
      .orderByChild("email")
      .equalTo(email)
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val()[Object.keys(snapshot.val())[0]];
          setUserDataUID(userData.uid);
          setUserDetails(userData);
        } else {
          console.log("User data not found");
        }
      })
      .catch((error) => {
        console.log("Error retrieving user data:", error);
      });
  };

  return (
    <Box
      width="400px"
      sx={{ width: { xl: "1788px" }, marginTop: "80px", minHeight: "75vh" }}
      m="auto"
    >
    
      {userUID ? (
        
        <div>
          <h1 class="display-1">User Profile</h1>
          {userDetails && (
            <>
              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      {userDetails.isRepresentingOrganization ? (
                        <>
                          {userDetails.organizationType === "FoodBank/NGO" ||
                          userDetails.organizationType === "Other" ? (
                            <>
                              <MDBCardImage
                                src="./ngoo.jpg"
                                alt="foodbank"
                                className="rounded-circle"
                                style={{ width: "auto" }}
                                fluid
                              />
                              <h3 className="text-muted mb-1">
                                {userDetails.organizationName}
                              </h3>
                            </>
                          ) : userDetails.organizationType ===
                            "Grocery store" ? (
                            <>
                              <MDBCardImage
                                src={process.env.PUBLIC_URL + "/grocc.jpg"}
                                alt="grocery"
                                className="rounded-circle"
                                style={{ width: "auto" }}
                                fluid
                              />
                              <h3 className="text-muted mb-1">
                                {userDetails.organizationName}
                              </h3>
                            </>
                          ) : userDetails.organizationType === "Restaurant" ? (
                            <>
                              <MDBCardImage
                                src="./restt.jpg"
                                alt="restaurant"
                                className="rounded-circle"
                                style={{ width: "auto" }}
                                fluid
                              />
                              <h3 className="text-muted mb-1">
                                {userDetails.organizationName}
                              </h3>
                            </>
                          ) : null}
                        </>
                      ) : (
                        <>
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="user"
                            className="rounded-circle"
                            style={{ width: "auto" }}
                            fluid
                          />
                          <h3 className="text-muted mb-1">
                            {userDetails.name}
                          </h3>
                        </>
                      )}
                      
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="8">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.name}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Email</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.email}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Phone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.phone}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>City</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.city}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>State</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.state}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>ZIP Code</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.zipCode}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Volunteer Interest</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.volunteerInterest}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>
                            Is Representing Organization
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.isRepresentingOrganization
                              ? "Yes"
                              : "No"}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Organization Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.organizationName}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Organization Type</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.organizationType}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Organization Hours</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userDetails.organizationHours}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                      <Button variant="contained" color="error" onClick={handleLogout}>Logout</Button>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </>
          )}
        </div>
      ) : (
        <>
        <LoginModal/>
        <h1 class="display-1" style={{textAlign:"center"}}>To view your profile, please <Link underline="none" href="#" onClick={() => setLoginShow(true)}>Login</Link>. <ReportProblemIcon style={{ fontSize: '30vh' }}/></h1>
        <LoginModal show={loginShow} onHide={() => setLoginShow(false)} />

        </>
      )}
    </Box>
  );
};

export default Profile;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SignupModal from "./Modal";
import LoginModal from "./LoginModal";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

function CustomNavbar() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [loginShow, setLoginShow] = React.useState(false);

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#ADD8E6",
          opacity: "0.8",
          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
          paddingTop: "10px",
        }}
        variant="dark"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{
              fontFamily: "cursive",
              fontSize: "39px",
              fontWeight: "bold",
              color: "white",
              textShadow: "none",
              WebkitTextStroke: "2px black",
              textStroke: "1px black",
              position: "relative",
            }}
          >
            <span
              style={{
                color: "red",
                position: "absolute",
                top: "50%",
                left: "calc(100% + 10px)",
                transform: "translateY(-50%)",
              }}
            >
              {" "}
              &lt;3
            </span>
            Share-A-Meal
          </Navbar.Brand>
          <Button
            variant="light"
            style={{ backgroundColor: "#87CEFA", color: "white" }}
            onClick={handleShow}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                style={{
                  fontFamily: "cursive",
                  color: "black",
                  fontSize: "30px",
                  backgroundColor: "#E0FFFF",
                }}
              >
                Make a Difference
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex mt-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{
                    fontFamily: "cursive",
                    fontSize: "20px",
                    backgroundColor: "#E0FFFF",
                  }}
                />
                <Button
                  variant="success"
                  type="submit"
                  style={{
                    fontFamily: "cursive",
                    fontSize: "20px",
                    backgroundColor: "#E0FFFF",
                    color: "black",
                  }}
                >
                  Search
                </Button>
              </Form>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                style={{
                  fontFamily: "cursive",
                  fontSize: "20px",
                  backgroundColor: "#E0FFFF",
                }}
              >
                <Nav.Link href="/" activeKey="/">
                  Home
                </Nav.Link>
                <Nav.Link onClick={() => setModalShow(true)}>
                  Register
                </Nav.Link>
                <SignupModal show={modalShow} onHide={() => setModalShow(false)} />
                <Nav.Link onClick={() => setLoginShow(true)}>
                  Login
                </Nav.Link>
                <LoginModal show={loginShow} onHide={() => setLoginShow(false)} />
                <Nav.Link href="#" active>
                  About
                </Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                <NavDropdown title="Contribute" id="offcanvas-nav-dropdown">
                  <NavDropdown.Item href="#">Donate Food</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Volunteer Your Time
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Spread The Word</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;

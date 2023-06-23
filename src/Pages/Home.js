import React from "react";
import { Box } from "@material-ui/core";
import "./Home.css";
import IndividualIntervalsExample from "../components/Carousel";
import SignupModal from "../components/Modal";
import MapWithSearchBar from "../components/MapWithSearchBar";
import ImageComponent from "../components/Imagecomponent";
import { Button } from "react-bootstrap";
function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Box>
      <div style={{ position: "relative", top: "80px" }}>
        <IndividualIntervalsExample />
        <hr
          style={{
            borderTopColor: "#28282B",
            borderTopWidth: "50px",
            marginTop: "0px",
            opacity: "1",
          }}
        />
        <div
          style={{
            marginTop: "10px",
            marginLeft: "5px",
            marginRight: "5px",
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
            border: "5px outset #82B366",
            padding: "100px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          >
            <img
              src="./background.jpg"
              alt="Background"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.4,
              }}
            />
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "300px", maxWidth: "100%" }}>
              <h1
                style={{
                  fontSize: "calc(2vw + 15px)",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                <strong>
                  The Global Crisis of Food Waste: How Our Platform Can Make a
                  Difference
                </strong>
              </h1>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "300px", maxWidth: "1200px" }}>
              <p
                style={{
                  fontSize: "calc(1vw + 7px)",
                  fontWeight: "normal",
                  marginBottom: "10px",
                }}
              >
                <strong>Reducing food waste</strong> is an important issue
                worldwide, with an estimated 1.3 billion tons of food being
                wasted globally each year. This not only causes{" "}
                <em>economic losses</em> but also has significant{" "}
                <em>environmental impacts</em>, contributing to{" "}
                <em>greenhouse gas emissions</em> and other environmental
                issues.
              </p>
              <p
                style={{
                  fontSize: "calc(1vw + 7px)",
                  fontWeight: "normal",
                  marginBottom: "10px",
                }}
              >
                Additionally, there are millions of people around the world who
                suffer from <strong>hunger and malnutrition</strong>, and yet, a
                significant amount of <strong>edible food goes to waste</strong>
                . Our platform connects{" "}
                <strong>food banks, grocery stores, and restaurants</strong> to
                ensure that surplus food is not wasted and instead reaches those
                in need.
              </p>
              <p
                style={{
                  fontSize: "calc(1vw + 7px)",
                  fontWeight: "normal",
                  marginBottom: "10px",
                }}
              >
                By providing an <strong>easy-to-use platform</strong> for food
                donors to connect with local food banks and other charities, we
                can ensure that surplus food is quickly and efficiently{" "}
                <strong>redistributed to people who need it</strong>. Through
                our platform, we hope to help reduce food waste and alleviate
                hunger, making a positive impact on both the environment and
                society as a whole.
              </p>
              <p
                style={{
                  fontSize: "calc(1vw + 7px)",
                  fontWeight: "normal",
                  marginBottom: "10px",
                }}
              >
                In India alone, it is estimated that 40% of food is wasted each
                year, while at the same time, millions of people suffer from
                hunger and malnutrition. Our platform aims to make a difference
                by connecting food donors with local food banks and charities,
                helping to reduce food waste and ensure that surplus food
                reaches those who need it most.
              </p>
              <p
                style={{
                  fontSize: "calc(1vw + 7px)",
                  fontWeight: "normal",
                  marginBottom: "10px",
                }}
              >
                Check out{" "}
                <a
                  href="https://www.worldwildlife.org/stories/food-waste-the-facts"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  this resource
                </a>{" "}
                for more information on food waste.
              </p>
              <button
                style={{
                  backgroundColor: "#990000",
                  color: "white",
                  padding: "0.5em 1em",
                  border: "none",
                  borderRadius: "7px",
                  fontSize: "1em",
                  cursor: "pointer",
                  marginTop: "0.5em",
                  width: "30%",
                }}
                onClick={() => setModalShow(true)}
              >
                Register Now!
              </button>
            </div>
            <style>
              {`
    @media (max-width: 1200px) {
      .image-container {
        display: none;
      }
    }
  `}
            </style>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <div className="image-container">
                <ImageComponent />
              </div>
            </div>
          </div>
        </div>

        <SignupModal show={modalShow} onHide={() => setModalShow(false)} />

        <div>
          <div style={{ marginLeft: "100px", marginTop: "30px" }}>
            <h1 className="title">
              <strong>
                Discover registered organizations near you with our interactive
                map
              </strong>
            </h1>
          </div>
        </div>
        <MapWithSearchBar />
        <Button  variant="outline-success" style={{fontSize:"23px", marginLeft:"auto", marginRight: "10px", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)" }} onClick={() => (window.location.href = '/Restaurants')}> Restaurants</Button>{' '}
      </div>
    </Box>
  );
}

export default Home;

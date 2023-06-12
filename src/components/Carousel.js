import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <div style={{ position: "relative" }}>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            width="1280"
            height="720"
            className="d-block w-100"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilMGL7LWgywCEe1gHrQvYKpWMS3RL-6pE7MqAVGbpRXYSFUEckOdWMBWl_LHk2_pncHLHw_JpBStdwkBtwkcYARJgm5oCHTXrWlqQuXXQv5O5VMZZUT5e07iqTu0PWonqzOJSnHR8sGkZJj6WoQWSA0rh7kbUixAHhadTk5KyZryxw_-G53A14Evv6/s1024/foodbank.jpeg"
            alt="First slide"
            style={{ objectFit: "cover", height: "90vh" }}
          />
          <Carousel.Caption
            style={{
              color: "white",
              textShadow: "0px 4px 3px rgba(0,0,0,0.4)",
              WebkitTextStroke: "0.8px black",
              textStroke: "0.5px black",
            }}
          >
            <h1>FoodBank</h1>
            <h2>
              Connect with grocery stores and restaurants in your area to
              receive surplus food donations and help feed those in need.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            width="1280"
            height="720"
            className="d-block w-100"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSVEVp7W7pciemxGexoF2siVTsiDFkjco6osUO_cw4FQFnl4r6NYLDIy7QGfZh_tk8f9mlJkdZeujAx1IiITFSlPqg7rFTYj5Hy-K0NxCIN6pI-RXO50RWmsEtdHXjNYhRRIbVpQamVINacRwrlmjpRlcJzxF3pRpmNc3z4liPAo_BJqNao5tV8oj1/s1024/grocery.jpeg"
            alt="Second slide"
            style={{ objectFit: "cover", height: "90vh" }}
          />
          <Carousel.Caption
            style={{
              color: "white",
              textShadow: "0px 4px 3px rgba(0,0,0,0.4)",
              WebkitTextStroke: "0.8px black",
              textStroke: "0.5px black",
            }}
          >
            <h1>GroceryStores, Make a difference with your surplus food!</h1>
            <h2>
              You can easily donate excess food from your store to local food
              banks and shelters. Together, we can reduce food waste and help
              those in need."
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            width="1280"
            height="720"
            className="d-block w-100"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9jyi7Xj90U-D5XnyRM7NhWaqtlwNeLOnXpiE62s0UUbaCXZlrzS8HqjAMYU6imBfVQl-ksEiHMzkaQiU9rZAxV5l1bKAh2zqcesoEbnBDf2nya4gFWiYXgUlr2y21iPO1CcEFab4UHJYxBl0qu8Nqc3ViO-rc9sp_lovGFYP2EhZPr5GdV6f03kUD/s1024/restuarant.jpeg"
            alt="Third slide"
            style={{ objectFit: "cover", height: "90vh" }}
          />
          <Carousel.Caption
            style={{
              color: "white",
              textShadow: "0px 4px 3px rgba(0,0,0,0.4)",
              WebkitTextStroke: "0.8px black",
              textStroke: "0.5px black",
            }}
          >
            <h1>Restuarants, Share your love for food!</h1>
            <h2>
              As a restaurant, you can now make a difference by indicating when
              you have excess food available for purchase at a discounted rate.
              Sign up today and join our community!
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            width="1280"
            height="720"
            className="d-block w-100"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSeHooem8Ircjua3ZmdgpjmADUDvQEZOq6308v98Pn1DyIQmF4uYyq9c369BMIz5t1IC8e-7odfo2P2Z7ZC9KRIq9-qXO5K3g4XmNgBzD6AcUIPxBu9668YTtWNtD4RCdPmOM9OH9DuHDYoSm3-A8wFwdtdzoSU05KiDjs3Rmj1QdYQSPMJ-MXAaFT/s1024/help.jpeg"
            alt="Third slide"
            style={{ objectFit: "cover", height: "90vh" }}
          />
          <Carousel.Caption
            style={{
              color: "white",
              textShadow: "0px 4px 3px rgba(0,0,0,0.4)",
              WebkitTextStroke: "0.8px black",
              textStroke: "0.5px black",
            }}
          >
            <h1>Register now!</h1>
            <h2>
              let's work together to make a positive impact on our environment
              and help those who are struggling with food insecurity. Register
              now as an individual on our platform and be part of the solution!
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%" }}>
  <h1
    style={{
      margin: "0",
      padding: "1rem",
      color: "white",
      fontWeight: "bold",
      fontSize: "calc(1rem + 1vw)",
      textShadow: "0 0 1px black",
      WebkitTextStroke: "1.5px black",
      textAlign: "center",
      whiteSpace: "pre-wrap",
    }}
  >
    <strong>Join our platform and become part of the solution to reduce food waste!</strong>
  </h1>
</div>

    </div>
  );
}

export default IndividualIntervalsExample;

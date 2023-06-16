import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class MapSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationName: "",
      marker: null,
      address: ""
    };
  }

  onMapClick = (event) => {
    const { lat, lng } = event;
    this.setState({ marker: { lat, lng }, address: `${lat}, ${lng}` });
  };

  onInputChange = (event) => {
    this.setState({ organizationName: event.target.value });
  };

  render() {
    const { marker, address } = this.state;
    const center = { lat: 20.5937, lng: 78.9629 }; // India
    return (
      <div style={{ height: "350px", width: "760px", marginBottom: "20px" }}>
        <form>
          <label>
            Organization Name:
            <input type="text" onChange={this.onInputChange} />
          </label>
          <label>
            Address:
            <input type="text" value={address} readOnly />
          </label>
        </form>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBFBFcLIDFEoIX2utTyxDnPMbNE4ukqbv0&libraries=places",
            libraries: "places"
          }}
          defaultCenter={center}
          defaultZoom={5}
          onClick={this.onMapClick}
        >
          {marker && <Marker lat={marker.lat} lng={marker.lng} />}
        </GoogleMapReact>
      </div>
    );
  }
}

const Marker = () => <div className="marker">+</div>;

export default MapSearch;

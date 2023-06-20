import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import firebase from "firebase/compat/app";
import "firebase/database";
import ButtonGroup from './ButtonGroup'; // Assuming ButtonGroup component is in a separate file

const restaurantIcon = L.icon({
  iconUrl: "./restaurant-icon.png",
  iconSize: [52, 52],
});

const foodbankIcon = L.icon({ 
  iconUrl: "./foodbank-icon.png",
  iconSize: [48, 48],
});  

const groceryIcon = L.icon({
  iconUrl: "./grocery-icon.png",
  iconSize: [52, 52],
});

const position = [22.9734, 78.6569];

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        12,
        {
          animate: true,
        }
      );
    }
  }, [selectPosition, map]);

  return null;
}

export default function Maps(props) {
  const { selectPosition } = props;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from Firebase Realtime Database
    const database = firebase.database();
    const foodbanksRef = database.ref("foodbanks");
    const groceriesRef = database.ref("groceries");
    const restaurantsRef = database.ref("restaurants");

    // Attach listeners to the database references
    foodbanksRef.on("value", (snapshot) => {
      const foodbanksData = snapshot.val();
      // Process the data and update state
      setData((prevData) => ({
        ...prevData,
        foodbanks: foodbanksData,
      }));
    });

    groceriesRef.on("value", (snapshot) => {
      const groceriesData = snapshot.val();
      // Process the data and update state
      setData((prevData) => ({
        ...prevData,
        groceries: groceriesData,
      }));
    });

    restaurantsRef.on("value", (snapshot) => {
      const restaurantsData = snapshot.val();
      // Process the data and update state
      setData((prevData) => ({
        ...prevData,
        restaurants: restaurantsData,
      }));
    });

    // Cleanup function to remove the listeners
    return () => {
      foodbanksRef.off();
      groceriesRef.off();
      restaurantsRef.off();
    };
  }, []);

  return (
    <>
      <ButtonGroup setSelectedCategory={setSelectedCategory} />
      <MapContainer
        center={position}
        zoom={6}
        style={{ width: "1400px", height: "400px", border: "0px outset #82B366" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=gakmZ6je8Ta7N0dR0RnD"
        />
      
        {selectedCategory === 'foodbank' && data?.foodbanks && Object.values(data.foodbanks).map((foodbank) => (
          <Marker
            position={foodbank.organizationAddress.split(", ")}
            icon={foodbankIcon}
            key={foodbank.organizationName}
          >
            <Popup>
              <div>
                <h3>{foodbank.organizationName}</h3>
                <p>Phone: {foodbank.phone}</p>
                <p>Email: {foodbank.email}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        
        {selectedCategory === 'grocery' && data?.groceries && Object.values(data.groceries).map((grocery) => (
          <Marker
            position={grocery.organizationAddress.split(", ")}
            icon={groceryIcon}
            key={grocery.organizationName}
          >
            <Popup>
              <div>
                <h3>{grocery.organizationName}</h3>
                <p>Phone: {grocery.phone}</p>
                <p>Email: {grocery.email}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        
        {selectedCategory === 'restaurant' && data?.restaurants && Object.values(data.restaurants).map((restaurant) => (
          <Marker
            position={restaurant.organizationAddress.split(", ")}
            icon={restaurantIcon}
            key={restaurant.organizationName}
          >
            <Popup>
              <div>
                <h3>{restaurant.organizationName}</h3>
                <p>Phone: {restaurant.phone}</p>
                <p>Email: {restaurant.email}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        
        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
    </>
  );
}

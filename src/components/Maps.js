import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { restaurantCoords, foodbankCoords, groceryCoords } from './coordinates';

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

  return (
    <MapContainer
      center={position}
      zoom={6}
      style={{ width: "1400px", height: "400px", border: "10px outset #ccc" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=gakmZ6je8Ta7N0dR0RnD"
      />
      {restaurantCoords.map(coord => (
        <Marker position={coord.coordinates} icon={restaurantIcon} key={`restaurant-${coord.coordinates[0]}-${coord.coordinates[1]}`}>
          <Popup>
            <div>
              <h3>Restaurant</h3>
              <p>Coordinates: {coord.coordinates[0]}, {coord.coordinates[1]}</p>
              <p>Phone: {coord.contact.phone}</p>
              <p>Email: {coord.contact.email}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      {foodbankCoords.map(coord => (
        <Marker position={coord.coordinates} icon={foodbankIcon} key={`foodbank-${coord.coordinates[0]}-${coord.coordinates[1]}`}>
          <Popup>
            <div>
              <h3>Food Bank</h3>
              <p>Coordinates: {coord.coordinates[0]}, {coord.coordinates[1]}</p>
              <p>Phone: {coord.contact.phone}</p>
              <p>Email: {coord.contact.email}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      {groceryCoords.map(coord => (
        <Marker position={coord.coordinates} icon={groceryIcon} key={`grocery-${coord.coordinates[0]}-${coord.coordinates[1]}`}>
          <Popup>
            <div>
              <h3>Grocery Store</h3>
              <p>Coordinates: {coord.coordinates[0]}, {coord.coordinates[1]}</p>
              <p>Phone: {coord.contact.phone}</p>
              <p>Email: {coord.contact.email}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}
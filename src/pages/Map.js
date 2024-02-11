import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import React, { useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L, { Icon } from "leaflet";
import Navbar from "./Navbar";

export default function Map({ targetPeople }) {
  const { latitude, longitude } = targetPeople[0].location.coordinates;
  const name = targetPeople[0].name.first;
  const marker = {
    geocode: [latitude, longitude],
    popUp: `hey, ${name} is over here`,
    iconAnchor: [17, 46],
    popUpAnchor: [0, -46],
  };

  const customeIcon = new Icon({
    iconUrl: require("./Resource/location.png"),
    iconSize: [40, 40], // size of an icon
  });
  const [center, setCenter] = useState({ lat: longitude, lng: longitude });
  console.log(center);

  return (
    <>
      <Navbar />
      <div className="map-container1">
        <div>
          <MapContainer className="leaflet" center={center} zoom={2}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={marker.geocode} icon={customeIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}

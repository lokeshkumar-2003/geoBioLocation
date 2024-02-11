import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./Navbar";
import React from "react";
import { Link } from "react-router-dom";

export default function PoepleBio({ targetPeople }) {
  return (
    <>
      <Navbar />
      <div className="bio-container">
        <div className="bio-content">
          <img
            src={targetPeople[0].picture.large}
            alt={targetPeople[0].name.first}
            className="bio-img mb-2"
          />
          <p className="bio-name text-white">
            {targetPeople[0].name.title} {targetPeople[0].name.first}{" "}
            {targetPeople[0].name.last}
          </p>
          <p className=" fs-5 text-white bio-details">
            <span className="h5 " style={{ color: "#93c5fd" }}>
              Email:
            </span>
            {targetPeople[0].email}
          </p>
          <p className=" fs-5 text-white bio-details">
            <span className="h5" style={{ color: "#93c5fd" }}>
              Age:
            </span>
            {targetPeople[0].dob.age}
          </p>
          <p className=" fs-5  text-white bio-details">
            <span className="h5" style={{ color: "#93c5fd" }}>
              Phone:
            </span>
            {targetPeople[0].phone}
          </p>
          <p className=" fs-5 text-white bio-details">
            <span className="h5" style={{ color: "#93c5fd" }}>
              Country:
            </span>
            {targetPeople[0].location.country}
          </p>
          <div className="bio-btn">
            <button className="btn btn-primary fs-5 pt-1 pb-1 mt-3 ">
              <Link
                className="text-white"
                to="/map"
                style={{ textDecoration: "none" }}
              >
                Get Track
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

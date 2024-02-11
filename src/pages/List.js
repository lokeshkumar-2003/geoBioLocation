import { useState } from "react";
import { Link } from "react-router-dom";

export default function PeopleLists({
  people,
  peoplesData,
  index,
  targetPeople,
  setTargetPeople,
}) {
  function handlePeopleData(id) {
    console.log(id);
    setTargetPeople(peoplesData.filter((_, index) => index == id));
    console.log(targetPeople);
  }

  console.log(index);

  return (
    <div className="card-container">
      <div className="people-card">
        <div className="content">
          <img
            className="img-icon"
            src={people.picture.large}
            alt={people.name.first}
          />
          <p className="people-name">
            {people.name.first} {people.name.last}
          </p>
        </div>
        <Link to="/details">
          <span
            className="btn btn-primary"
            style={{ borderRadius: "50%", height: "40px" }}
            id={index}
            onClick={(e) => handlePeopleData(e.target.id)}
          >
            <i className="arrow right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}

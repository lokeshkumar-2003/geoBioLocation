import React, { useEffect, useState } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

import List from "./List";
import Navbar from "./Navbar";

export default function ListPeople({ targetPeople, setTargetPeople }) {
  const [peoplesData, setPeoplesData] = useState("");

  useEffect(function () {
    async function fetchData() {
      const data = await fetch(`https://randomuser.me/api/?results=10`);
      const res = await data.json();
      setPeoplesData(res.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="list-container ">
        <div className="people-card-container">
          {peoplesData === "" ? (
            <p className="display-5 text-white" style={{ textAlign: "center" }}>
              Loading...
            </p>
          ) : (
            peoplesData.map((people, index) => (
              <List
                people={people}
                peoplesData={peoplesData}
                targetPeople={targetPeople}
                setTargetPeople={setTargetPeople}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

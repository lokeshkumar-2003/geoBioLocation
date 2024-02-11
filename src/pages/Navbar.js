import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import { Outlet, Link } from "react-router-dom";

import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-3 pb-3 ">
      <div class="container-fluid">
        <a class="navbar-brand fs-3" href="#">
          <Link className="nav-link" to="/">
            bioGeoLocation 🌐
          </Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </a>
            <a class="nav-link active" aria-current="page" href="#">
              <Link className="nav-link" to="/details">
                Details
              </Link>
            </a>
            <a class="nav-link active" aria-current="page" href="#">
              <Link className="nav-link" to="/map">
                Map
              </Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

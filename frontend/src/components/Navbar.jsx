import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <>
      <div className="container-lg mt-2 ">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark p-3 rounded-2">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto nav-area">
              <li class="nav-item">
                <Link to={"/"}><Button variant="contained">Contained</Button></Link>
              </li>

              <li class="nav-item">
                <Link to={"/start"}>Take Quiz</Link>
              </li>

              <li class="nav-item">
                <Link to={"/leader"}>LeaderBoard</Link>
              </li>

              <li class="nav-item">
                <Link to={"/result"}>Result</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

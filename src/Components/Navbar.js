import React from "react";
import '../StyleSheet/Navbar.css'

// Import images here
import ironman from "../Assets/ironman.png";


const Navbar = () => {
  return (
    <section id="navbar-example" className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={ironman} alt=".." height="50" />
        </a>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skillpage">
              Skill
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projpage">
              Projects
            </a>
          </li>      
          <li className="nav-item">
            <a className="nav-link" href="#edupage">
              Education
            </a>
          </li>
          {/* <li classNameName="nav-item">
            <a className="nav-link" href="#contactpage">
              Contact
            </a>
          </li> */}
        </ul>

        <a className="github-btn" href="https://github.com/Youngswadhin">GitHub Profile</a>

      </div>


    
    </section>
  );
}

export default Navbar;

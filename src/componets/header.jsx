import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" height="50" width="50"></img>
              <span className="blog-header-logo text-light">My Direct Admission</span>
            </Link>
            
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/colleges">Colleges</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/onlineReg">Online Registration</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactUs">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

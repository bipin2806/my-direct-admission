import React, { Component } from "react";
import logo from "../logo.svg";
import SectionConatiner from "./section-container";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://www.google.com">
              <img src={logo} alt="logo" height="50" width="50"></img>
              <span className="blog-header-logo text-light">My Direct Admission</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.google.com">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">
                    Colleges
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">
                    Online Registration
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="overlay"></div>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          width="100%"
        >
          <source
            src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
        </video>

        <SectionConatiner/>
      </div>
    );
  }
}

export default Header;

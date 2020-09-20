import React, { Component } from "react";
import College from "./college";
import colleges from "../../data/colleges.json";

class CollegeContainer extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid mt-5">
        {colleges.length !== 0 &&
          colleges.map((college) => (
            <College key={college.id} college={college} />
          ))}
      </div>
    );
  }
}

export default CollegeContainer;

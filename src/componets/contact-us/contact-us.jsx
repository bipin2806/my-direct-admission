import React, { Component } from "react";
import bgImg from "../../static/carousel-three.jpg";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid">
        <div>
          <img
            style={{ maxWidth: "100%", maxHeight: "1000px" }}
            src={bgImg}
            alt=""
          ></img>
        </div>
        <div class="container">
          <br />
          <div class="row">
            <div class="col-md-4">
              <h2>Bihar</h2>
              <p>
                <span class="material-icons">location_on</span>AICCB, 3rd Floor,
                Above Gyan Ganga Book Store, Infront of Pillar No-15, Jagdeo
                Path, Bailey Road, Patna – 800014
              </p>
            </div>
            <div class="col-md-4 border-left">
              <h2>Jharkhand</h2>
              <p>
                <span class="material-icons">location_on</span>
                AICCB, 3rd Floor, Above Gyan Ganga Book Store, Infront of Pillar
                No-15, Jagdeo Path, Bailey Road, Patna – 800014
              </p>
              <p></p>
            </div>
            <div class="col-md-4 border-left">
              <h2>Orrisa</h2>
              <p>
                <span class="material-icons">location_on</span>
                AICCB, 3rd Floor, Above Gyan Ganga Book Store, Infront of Pillar
                No-15, Jagdeo Path, Bailey Road, Patna – 800014
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;

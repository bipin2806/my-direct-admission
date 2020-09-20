import React, { Component } from "react";
import aboutUs from "../static/about-us.jpg";

class SectionContainer extends Component {
  state = {};
  render() {
    return (
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img
                  class="card-img-top"
                  alt="Thumbnail [100%x225]"
                  height="150px"
                  width="100%"
                  style={{ display: "block" }}
                  src={aboutUs}
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">
                  AICCB has invited online Scholarship Applications Form 2018 for the students of various courses under Welfare and Scholarship Scheme for the reserved quota in Govt. approved colleges or Universities in India.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img
                  class="card-img-top"
                  alt="Thumbnail [100%x225]"
                  height="150px"
                  width="100%"
                  style={{ display: "block" }}
                  src={aboutUs}
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">
                  Associated Institutions have reserved 20% seats for SC/ST/OBC/Minority/ General Candidates of all states. Most of the students are not aware of these facilities & financial support provided by State Government,
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Read More</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img
                  class="card-img-top"
                  alt="Thumbnail [100%x225]"
                  height="150px"
                  width="100%"
                  style={{ display: "block" }}
                  src={aboutUs}
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">
                  All participating colleges are approved by AICTE, UGC & MHRD-Govt. of India and affiliated to State Government Technical University and other required departments of Govt. Of India.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Read More</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionContainer;

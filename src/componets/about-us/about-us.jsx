import React, { Component } from "react";
import bgImg from "../../static/carousel-three.jpg";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          style={{ maxWidth: "100%", maxHeight: "1000px" }}
          src={bgImg}
          alt=""
        ></img>
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-3">About Us</h1>
            <p>
            AICCB has invited online Scholarship Applications Form 2018 for the students of various courses under Welfare and Scholarship Scheme for the reserved quota in Govt. approved colleges or Universities in India. Associated Institutions have reserved 20% seats for SC/ST/OBC/Minority/ General Candidates of all states. Most of the students are not aware of these facilities & financial support provided by State Government, Government of India and College Trusts and they miss the opportunity to get higher education. Students get benefit of 1 to 4 lakhs rupees as discount fee in different courses in this Programme. All participating colleges are approved by AICTE, UGC & MHRD-Govt. of India and affiliated to State Government Technical University and other required departments of Govt. Of India. To avail this benefit, you must fill up the online scholarship application form and take admission in your choice colleges through AICCB in its participating institutions. All participating colleges are approved by AICTE, UGC & MHRD-Govt. of India and affiliated to State Government Technical University and other required departments of Govt. Of India. To avail this benefit, you must fill up the online scholarship application form and take admission in your choice colleges through AICCB in its participating institutions. All participating colleges are approved by AICTE, UGC & MHRD-Govt. of India and affiliated to State Government Technical University and other required departments of Govt. Of India. To avail this benefit, you must fill up the online scholarship application form and take admission in your choice colleges through AICCB in its participating institutions.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;

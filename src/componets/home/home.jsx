import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden p-3 p-md-10 m-md-3 text-center bg-dark text-light">
          <div className="col-md-10 p-lg-10 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Engineering</h1>
            <p className="lead font-weight-normal">
              The demand for engineering courses has only increased over the
              years. New specialisations and subjects are being introduced to
              engineering so as to keep the programme updated in accordance with
              the recent technical developments.
            </p>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">IIT</h2>
              <p className="lead">JEE (Advanced) 2020 registration for all eligible candidates is now open for admission.
              <br/>For more details <a href="https://jeeadv.nic.in/jeeadvapp/root/loginpage.aspx">click here</a></p>
            </div>
          </div>

          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">NEET</h2>
              <p className="lead">NEET (UG) 2020 will be conducted by National Testing Agency for admission.
              <br/>For more details <a href="https://ntaneet.nic.in/ntaneet/welcome.aspx">click Here</a></p>
            </div>
          </div>

        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">VIT</h2>
              <p className="lead">VIT (Vellore Institue of Technology) or Vellore University is a private deemed University located in Vellore, TN.
              <br/>For more details <a href="https://ntaneet.nic.in/ntaneet/welcome.aspx">click Here</a></p>
            </div>
          </div>
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">BITS Pilani</h2>
              <p className="lead">BITS (Birla Institute of Technology and Science) Pilani is an all-India Institute for higher education.
              <br/>For more details <a href="https://ntaneet.nic.in/ntaneet/welcome.aspx">click Here</a></p>
            </div>
          </div>
        </div>

        
      
      </div>
    );
  }
}

export default Home;

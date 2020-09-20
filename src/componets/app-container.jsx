import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./about-us/about-us";
import CollegeContainer from "./colleges/college-container";
import Registration from "./registration/registration";
import ContactUs from "./contact-us/contact-us";
import Home from "./home/home";

import Header from "./header";

class AppContainer extends Component {
  state = {};
  render() {
    return (
        <div>
          <Header />
            <Switch>
              <Route path="/about" component={AboutUs}></Route>
              <Route path="/colleges" component={CollegeContainer}></Route>
              <Route path="/onlineReg" component={Registration}></Route>
              <Route path="/contactUs" component={ContactUs}></Route>
              <Route path="/" exact component={Home}></Route>
            </Switch>
        </div>
    );
  }
}

export default AppContainer;

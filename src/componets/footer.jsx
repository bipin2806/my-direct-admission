import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2017-2020 Company, Inc. · <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a>
        </p>
      </footer>
    );
  }
}

export default Footer;

import React, { Component } from "react";

import MainHeader from "./components/MainHeader";
import MainNavbar from "./components/MainNavbar";
import MainBody from "./components/MainBody";
import MainFooter from "./components/MainFooter";

// CSS
import "./Main39.css";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <MainHeader />
        <MainNavbar />
        <MainBody />
        <MainFooter />
      </React.Fragment>
    );
  }
}

export default Main;

import React, { Component } from "react";

import MainHeader from "./components/MainHeader";
import MainNavbar from "./components/MainNavbar";
import MainBody from "./components/MainBody";
import MainFooter from "./components/MainFooter";

// CSS
import "./Main.css";

class Main40 extends Component {
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

export default Main40;

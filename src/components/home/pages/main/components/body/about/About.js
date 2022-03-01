import React, { Component } from "react";

import Cover from "./components/Cover";
import AboutNUSSSC from "./components/AboutNUSSSC";
import MissionVision from "./components/MissionVision";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Cover />
        <AboutNUSSSC />
        <MissionVision />
      </React.Fragment>
    );
  }
}

export default About;

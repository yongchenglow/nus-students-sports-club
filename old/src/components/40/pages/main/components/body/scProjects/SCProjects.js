import React, { Component } from "react";

import Cover from "./components/Cover";
import Projects from "./components/Projects";

class SCProjects extends Component {
  render() {
    return (
      <React.Fragment>
        <Cover />
        <Projects />
      </React.Fragment>
    );
  }
}

export default SCProjects;

import React, { Component } from "react";

import Cover from "./components/Cover";
import Projects from "./components/Projects";

class SCProjects extends Component {
  render() {
    var mc = this.props.match.params.mc ?? "";
    return (
      <React.Fragment>
        <Cover mc={mc ? mc : "current"} />
        <Projects mc={mc ? mc : "current"} />
      </React.Fragment>
    );
  }
}

export default SCProjects;

import React, { Component } from "react";

import Cover from "./components/Cover";
import Cells from "./components/Cells";

class Committee extends Component {
  render() {
    var mc = this.props.match.params.mc ?? "";
    console.log(mc);
    return (
      <React.Fragment>
        <Cover mc={mc ? mc : "current"} />
        <Cells mc={mc ? mc : "current"} />
      </React.Fragment>
    );
  }
}

export default Committee;

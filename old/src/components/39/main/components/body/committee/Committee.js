import React, { Component } from "react";

import Cover from "./components/Cover";
import Cells from "./components/Cells";

class Committee extends Component {
  render() {
    return (
      <React.Fragment>
        <Cover />
        <Cells />
      </React.Fragment>
    );
  }
}

export default Committee;

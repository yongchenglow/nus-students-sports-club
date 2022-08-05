import React, { Component } from "react";

import Cover from "./components/Cover";
import OurPartners from "./components/OurPartners";

class Partners extends Component {
  render() {
    return (
      <React.Fragment>
        <Cover />
        <OurPartners />
      </React.Fragment>
    );
  }
}

export default Partners;

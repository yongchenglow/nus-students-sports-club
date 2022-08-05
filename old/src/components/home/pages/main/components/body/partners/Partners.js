import React, { Component } from "react";

import Cover from "./components/Cover";
import OurPartners from "./components/OurPartners";

class Partners extends Component {
  render() {
    var mc = this.props.match.params.mc ?? "";
    return (
      <React.Fragment>
        <Cover mc={mc ? mc : "current"} />
        <OurPartners mc={mc ? mc : "current"} />
      </React.Fragment>
    );
  }
}

export default Partners;

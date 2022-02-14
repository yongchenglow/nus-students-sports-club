import React, { Component } from "react";

import Cover from "./components/Cover";
import Event from "./components/Event";

class Events extends Component {
  render() {
    var mc = this.props.match.params.mc ?? "";
    return (
      <React.Fragment>
        <Cover mc={mc ? mc : "current"} />
        <Event mc={mc ? mc : "current"} />
      </React.Fragment>
    );
  }
}

export default Events;

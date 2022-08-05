import React, { Component } from "react";

import Clubs from "./components/Clubs";

class MemberClubs extends Component {
  render() {
    var mc = this.props.match.params.mc ?? "";
    return (
      <React.Fragment>
        <Clubs mc={mc ? mc : "current"} />
      </React.Fragment>
    );
  }
}

export default MemberClubs;

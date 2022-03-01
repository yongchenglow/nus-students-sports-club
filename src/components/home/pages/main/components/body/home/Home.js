import React, { Component } from "react";

import Collage from "./components/Collage";
import FeaturedEvents from "./components/FeaturedEvents";
import OurStakeholders from "./components/OurStakeholders";
import CorporateVideo from "./components/CorporateVideo";

class Home extends Component {
  render() {
    var mc = this.props.match.params.mc ?? "";
    return (
      <React.Fragment>
        <Collage mc={mc ? mc : "current"} />
        <FeaturedEvents mc={mc ? mc : "current"} />
        <OurStakeholders mc={mc ? mc : "current"} />
        <CorporateVideo mc={mc ? mc : "current"} />
      </React.Fragment>
    );
  }
}

export default Home;

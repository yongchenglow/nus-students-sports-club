import React, { Component } from "react";

import Collage from "./components/Collage";
import FeaturedEvents from "./components/FeaturedEvents";
import OurStakeholders from "./components/OurStakeholders";
import CorporateVideo from "./components/CorporateVideo";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Collage />
        <FeaturedEvents />
        <OurStakeholders />
        <CorporateVideo />
      </React.Fragment>
    );
  }
}

export default Home;

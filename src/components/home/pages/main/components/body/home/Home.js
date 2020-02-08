import React, { Component } from 'react';

import Collage from './components/Collage';
import FeaturedEvents from './components/FeaturedEvents';
import OurStakeholders from './components/OurStakeholders';

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <Collage />
        <FeaturedEvents />
        <OurStakeholders />
      </React.Fragment>
    );
  }
};

export default Home;

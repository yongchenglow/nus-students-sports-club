import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Collage from './components/Collage';
import FeaturedEvents from './components/FeaturedEvents';

class Home extends Component {
  render () {
    return (
      <Container>
        <Collage />
        <FeaturedEvents />
      </Container>
    );
  }
};

export default Home;

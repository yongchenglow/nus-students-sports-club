import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Collage from './components/Collage';

class Home extends Component {
  render () {
    return (
      <Container>
        <Collage />
      </Container>
    );
  }
};

export default Home;

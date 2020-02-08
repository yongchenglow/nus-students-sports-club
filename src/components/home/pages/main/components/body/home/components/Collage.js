import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import SportsClubCollage from '../images/sports_club_collage.png';
import SportsClubLogo from '../../../../../../images/logos/SportsClubLogo.js';

class Collage extends Component {
  render () {
    return (
      <Row className='section'>
        <Col sm={6} md={5} className='text-center aligner'>
          <div>
            <SportsClubLogo className='img-fluid img-logo'/>
            <div className='tagline'>Unite & Ignite</div>
          </div>
        </Col>
        <Col sm={6} md={7}>
          <img className='img-fluid' src={SportsClubCollage} alt='Sports Club Collage'/>
        </Col>
      </Row>
    );
  }
};

export default Collage;

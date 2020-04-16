import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MissionImage from '../images/Boxing.png';
import VisionImage from '../images/IFG_Soccer.png';

class MissionVision extends Component {
  render () {
    return (
      <Container className='text-center section pt-0'>
        <Row>
          <Col className='pr-md-0 parent-vertical-center' md={6}>
            <div className='child-vertical-center'>
              <div className='section-heading'>Our Mission</div>
              <div className='about-description'>
                To promote recreational sports through active engagement with the NUS community to enrich student life
              </div>
              <div className='about-description'>
                To value add and support member clubs as well as Sports Club Projects, ensuring quality and excellence
              </div>
            </div>
          </Col>
          <Col className='pl-md-0' md={6}>
            <img className='img-fluid' src={MissionImage} alt='NUS Boxing Club' />
          </Col>
        </Row>
        <Row>
          <Col className='pr-md-0 order-2 order-md-1' md={6}>
            <img className='img-fluid' src={VisionImage} alt='IFG Soccer' />
          </Col>
          <Col className='pl-md-0 parent-vertical-center order-1 order-md-2 mt-5 mt-md-0' md={6}>
            <div className='child-vertical-center'>
              <div className='section-heading'>Our Vision</div>
              <div className='about-description'>
                To be the leading platform for promoting community bonding through recreational sports
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default MissionVision;

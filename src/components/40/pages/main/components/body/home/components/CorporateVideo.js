import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class CorporateVideo extends Component {
  render () {
    return (
      <Container className='section text-center'>
        <div className='section-heading'>Corporate Video</div>
        <Row className='justify-content-center'>
          <Col md={9} lg={8} xl={7}>
            <div className='embed-responsive embed-responsive-16by9'>
              <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/_pXxmsIkRF0' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' title='NUS Sports Club Coporate Video' allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default CorporateVideo;

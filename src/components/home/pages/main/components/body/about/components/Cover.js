import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Cover extends Component {
  render () {
    return (
      <div className='about-cover'>
        <Container>
          <Row className='about-cover-container justify-content-center'>
            <Col className='about-container' xs={11} sm={11} md={10} lg={9} xl={8}>
              <div className='about-title'>About Us</div>
              <div className='about-text'>We cater to the recreational needs of the students and seek to promote a healthier lifestyle among everyone</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Cover;

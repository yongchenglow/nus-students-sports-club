import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Cover extends Component {
  render () {
    return (
      <div className='contact-us-cover'>
        <Container>
          <Row className='cover-row-container justify-content-center'>
            <Col className='cover-container' xs={11} sm={11} md={10} lg={9} xl={8}>
              <div className='cover-title'>Contact Us</div>
              <div className='cover-text'>Let us know how we can help you</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Cover;

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Cover extends Component {
  render () {
    return (
      <div className='committee-cover'>
        <Container>
          <Row className='cover-row-container justify-content-center'>
            <Col className='cover-container' xs={11} sm={11} md={10} lg={9} xl={8}>
              <div className='cover-title'>Management Committee</div>
              <div className='cover-text'>The adminstrative body of Sports Club</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Cover;

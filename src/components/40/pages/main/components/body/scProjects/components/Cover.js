import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Cover extends Component {
  render () {
    return (
      <div className='plain-cover'>
        <Container>
          <Row className='cover-row-container justify-content-center'>
            <Col className='cover-container' xs={11} sm={11} md={10} lg={9} xl={8}>
              <div className='cover-title'>Sports Club Projects</div>
              <div className='cover-text-large'><span className='red-text'>5</span> Annual Flagship Projects</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Cover;

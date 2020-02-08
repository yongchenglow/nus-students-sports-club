import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

class MainFooter extends Component {
  render () {
    return (
      <div className='footer'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} sm={8} md={6} lg={5} xl={4}>
               <div class="copyright text-white">Copyright &copy; NUS Students' Sports Club 2020</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default MainFooter;

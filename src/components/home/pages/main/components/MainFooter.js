import React, { Component } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

class MainFooter extends Component {
  render () {
    return (
      <div className='footer'>
        <Container>
          <Row>
            <Col className='text-left'>
              <div className='footer-text'><strong>Address:</strong> 8 Sports Drive 1 S(117564)</div>
              <div className='footer-text'><strong>Email:</strong> enquiry@nussportsclub.org</div>
            </Col>
            <Col>
              <Button variant='outline-light' className='social-button' href='https://www.facebook.com/NUSSportsClub/'>
                <FontAwesomeIcon icon={faFacebookF}/>
              </Button>
              <Button variant='outline-light' className='social-button' style={{ fontSize: '1.8rem', padding: '0.15rem' }} href='https://www.instagram.com/nussportsclub/?hl=en'>
                <FontAwesomeIcon icon={faInstagram}/>
              </Button>
              <Button variant='outline-light' className='social-button' style={{ fontSize: '1.7rem', padding: '0.2rem' }} href='https://t.me/NUSSportsClub'>
                <FontAwesomeIcon icon={faTelegramPlane}/>
              </Button>
            </Col>
            <Col>
              <small className='copyright'>&copy; Copyright 2020 NUS Students' Sports Club <br/> All Rights Reserved</small>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default MainFooter;

import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import IFGClosingPoster from '../images/IFG_Closing_Ceremony_Poster.png';
import RunNUSPoster from '../images/RunNUS_Poster.png';
import SportsClubDayPoster from '../images/Sports_Club_Day_Poster.jpg';

class Event extends Component {
  render () {
    return (
      <div className='section'>
        <Container>
          <Row className='justify-content-center'>
            <Col className='event-block' md={11} lg={10} xl={9}>
              <img class='event-image' src={IFGClosingPoster} alt='IFG Closing Ceremony' />
              <div className='event-text'>
                <Row>
                  <Col md='auto' className='text-center text-md-left'>
                    <div className='event-title'>
                      IFG Swimming X Closing Ceremony
                    </div>
                    <div className='event-date'>
                      19th September 2019 6pm - 10pm
                    </div>
                  </Col>
                  <Col className='text-md-right text-center'>
                    <Button className='btn-outline-sc-red'>Sign Up Now!</Button>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='event-description text-left'>
                  <div className='paragraph'>
                    Join us for an evening of fun while supporting your faculty at IFG Swimming.
                  </div>
                  <div className='paragraph'>
                    Celebrate your wins together as a faculty during the award ceremony and enjoy the food and drinks at the different carnival booths.
                  </div>
                  <div className='paragraph'>
                    Find out which faculty will be crowned the IFG Champions and walking away with the Tan Eng Chye Challenge Trophy for 2019.
                  </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Event;

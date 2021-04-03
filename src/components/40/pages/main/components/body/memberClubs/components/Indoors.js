import React, { Component } from 'react';
import { Container, CardDeck, Card } from 'react-bootstrap';

import Aerobics from '../images/Aerobics.jpg';
import Climbing from '../images/Climbing.jpg';
import Cuesports from '../images/Cuesports.jpg';
import IGC from '../images/IGC.jpg';

class Indoors extends Component {
  render () {
    return (
      <div className='section text-center'>
        <Container>
          <div className='section-heading'>Indoors</div>
          <CardDeck className='justify-content-center'>
            <Card className='club-card'>
              <a href={process.env.PUBLIC_URL + '/clubs/aerobics'}>
                <div>
                  <Card.Img variant='top' className='project-image' src={Aerobics} alt='NUS Aerobics Club'/>
                </div>
                <Card.Body className='club-name'>
                  <Card.Title>Aerobics</Card.Title>
                </Card.Body>
                <h6 className='find-out'>
                  Find out more!
                </h6>
              </a>
            </Card>
            <Card className='club-card'>
              <a href={process.env.PUBLIC_URL + '/clubs/climbing'}>
                <div>
                  <Card.Img variant='top' className='project-image' src={Climbing} alt='NUS Climbing Club'/>
                </div>
                <Card.Body className='club-name'>
                  <Card.Title>Climbing</Card.Title>
                  <h6 className='find-out'>
                    Find out more!
                  </h6>
                </Card.Body>
              </a>
            </Card>
            <Card className='club-card'>
              <a href={process.env.PUBLIC_URL + '/clubs/cuesports'}>
                <div>
                  <Card.Img variant='top' className='project-image' src={Cuesports} alt='NUS Cuesports Club'/>
                </div>
                <Card.Body className='club-name'>
                  <Card.Title>Cuesports</Card.Title>
                  <h6 className='find-out'>
                    Find out more!
                  </h6>
                </Card.Body>
              </a>
            </Card>
            <Card className='club-card'>
              <a href={process.env.PUBLIC_URL + '/clubs/igc'}>
                <div>
                  <Card.Img variant='top' className='project-image' src={IGC} alt='NUS Intellectual Games Club'/>
                </div>
                <Card.Body className='club-name'>
                  <Card.Title>Intellectual Games Club</Card.Title>
                  <h6 className='find-out'>
                    Find out more!
                  </h6>
                </Card.Body>
              </a>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
};

export default Indoors;

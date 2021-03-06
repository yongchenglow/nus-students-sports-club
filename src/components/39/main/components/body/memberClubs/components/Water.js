import React, { Component } from 'react';
import { Container, CardDeck, Card } from 'react-bootstrap';

import ULC from '../images/ULC.jpg';

class Water extends Component {
  render () {
    return (
      <div className='section text-center'>
        <Container>
          <div className='section-heading'>Water</div>
          <CardDeck className='justify-content-center'>
            <Card className='club-card'>
              <div>
                <Card.Img variant='top' className='project-image' src={ULC} alt='NUS University Lifeguard Corps'/>
              </div>
              <Card.Body className='club-name'>
                <Card.Title>University Lifegaurd Corps</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
};

export default Water;

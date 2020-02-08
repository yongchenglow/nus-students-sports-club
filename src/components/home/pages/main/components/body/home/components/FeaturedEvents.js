import React, { Component } from 'react';
import { CardDeck, Card } from 'react-bootstrap';

import IFGClosingPoster from '../images/IFG_Closing_Ceremony_Poster.png';
import RunNUSPoster from '../images/RunNUS_Poster.jpg';
import SportsClubDayPoster from '../images/Sports_Club_Day_Poster.jpg';

class FeaturedEvents extends Component {
  render () {
    return (
      <div className='section text-center'>
        <div className='section-heading'>Featured Events</div>
        <CardDeck>
          <Card>
            <Card.Img variant='top' src={SportsClubDayPoster} />
            <Card.Body className='text-left'>
              <Card.Title>Sports Club Day</Card.Title>
              <Card.Text>
                Join us for a day of fun, find out the different recreational sports avialable in NUS and our upcoming evnts!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant='top' src={RunNUSPoster} />
            <Card.Body className='text-left'>
              <Card.Title>RunNUS 2019</Card.Title>
              <Card.Text>
                Take part NUS Biggest annual Running event to raise awarness for Disability Support.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant='top' src={IFGClosingPoster} />
            <Card.Body className='text-left'>
              <Card.Title>IFG Closing Ceremony</Card.Title>
              <Card.Text>
                Come down and support your faculty. Find out who will be crown the IFG Champions of 2019.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
};

export default FeaturedEvents;

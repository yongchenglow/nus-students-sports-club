import React, { Component } from 'react';
import { CardDeck, Card, Container } from 'react-bootstrap';

import ManagementCommittee from '../images/39_Management_Committee.JPG';
import NUSClimibingClub from '../images/NUS_Climbing_Club.png';
import RunNUS from '../images/RunNUS.jpg';

class OurStakeholders extends Component {
  render () {
    return (
      <div className='section text-center stakeholders'>
        <Container>
          <div className='section-heading'>Our Stakeholders</div>
          <CardDeck className='row justify-content-center'>
            <div className='col-md-6 col-lg-4'>
              <Card className='stakeholder-card'>
                <Card.Img variant='top' src={NUSClimibingClub} />
                <Card.Body className='text-left'>
                  <Card.Title>Member Clubs</Card.Title>
                  <Card.Text>
                    We have a family of 18 member clubs, categorised into Land, Water, Martial Arts and Indoor Sports to meet the recreational needs of NUS Students.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-md-6 col-lg-4'>
              <Card className='stakeholder-card'>
                <Card.Img variant='top' src={RunNUS} />
                <Card.Body className='text-left'>
                  <Card.Title>Sports Club Projects</Card.Title>
                  <Card.Text>
                    There are 5 major Sports Club Projects, namely NUS Biathlon, SunNUS, NUS Sports Camp, RunNUS and Inter-Faculty Games(IFG).
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-md-6 col-lg-4'>
              <Card className='stakeholder-card'>
                <Card.Img variant='top' src={ManagementCommittee} />
                <Card.Body className='text-left'>
                  <Card.Title>Management Committee</Card.Title>
                  <Card.Text>
                    The management committee is the administrative body of Sports Club that oversees the operations of member clubs and sports club projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </CardDeck>
        </Container>
      </div>
    );
  }
};

export default OurStakeholders;

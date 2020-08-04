import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class AboutNUSSSC extends Component {
  render () {
    return (
      <Container className='section text-center'>
        <div className='section-heading'>About NUSSSC</div>
        <div className='text-left about-description'>
          NUS Students’ Sports Club (NUSSSC) is the largest non-faculty constituent club in NUS. As one of the most active and wide-reaching student-run organisations on campus, we are dedicated to be the leading platform to promote community bonding through recreational sports.
        </div>
        <div className='text-left about-description'>
          To achieve this, we are a family of 18 Member Clubs (categorised into Martial Arts, Water, Land & Indoor sports) and 5 Sports Club Projects (NUS Biathlon, SunNUS, NUS Sports Camp, RunNUS and Inter-Faculty Games), providing the NUS population with an array of sporting activities and multiple channels to enrich their university experience.
        </div>
        <div className='text-left about-description'>
          The Management Committee oversees the operations of all Member Clubs and Sports Club Projects by providing administrative, financial and logistical support. As the bridge between Sports Club and the general NUS population, Office of Student Affairs (OSA) and external organisations, we are also able to strategically brand these entities and assist in maximising the impact of each of their events and operations.
        </div>
      </Container>
    );
  }
};

export default AboutNUSSSC;

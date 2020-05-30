import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import SportsCamp2020 from '../images/SportsCamp2020.jpeg';
import ProjectX from '../images/ProjectX.jpg';

class Event extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://static.addtoany.com/menu/page.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render () {
    return (
      <div className='section'>
        <Container>
          <Row className='justify-content-center'>
            <Col className='event-block' md={11} lg={10} xl={9}>
              <img class='event-image' src={SportsCamp2020} alt='NUS Sports Camp 2020' />
              <div className='event-text'>
                <Row>
                  <Col md='auto' className='text-center text-md-left'>
                    <div className='event-title'>
                      NUS Sports Camp 2020
                    </div>
                    <div className='event-date'>
                      29th to 30th June
                    </div>
                    <div class="a2a_kit a2a_kit_size_32 a2a_default_style" data-a2a-url="http://www.bit.ly/NUSSportsCamp2020" data-a2a-title="NUS Sports Camp Sign Up Link">
                      {/* <a class="a2a_dd" href="https://www.addtoany.com/share"></a> */}
                      <a class="a2a_button_facebook"></a>
                      <a class="a2a_button_whatsapp"></a>
                      <a class="a2a_button_telegram"></a>
                      <a class="a2a_button_copy_link"></a>
                    </div>
                  </Col>
                  <Col className='text-md-right text-center'>
                    <Button className='btn-outline-sc-red' href='http://www.bit.ly/NUSSportsCamp2020' target='_blank'>Sign Up Now!</Button>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='event-description text-left'>
                    <div className='paragraph'>
                      Gear up for NUS Sports Camp. We will bring you an orientation programme like no other!
                    </div>
                    <div className='paragraph'>
                      NUS Sports Camp is the largest non-faculty camp an NUS that aims to expose freshmen to the various sporting avenues in NUS in a fun and exciting way. The camp is catered to freshmen who are generally interested in sports, health an fitness or just want to make friends outside of their own faculty.
                    </div>
                    <div className='paragraph small mb-0' style={{lineHeight:'18px'}}>
                      *Due to Covid-19, NUS Sports Camp will be held online, but do not worry, we will show you how we utilise technology to our advantage here in NUS.
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col className='event-block' md={11} lg={10} xl={9}>
              <img class='event-image' src={ProjectX} alt='IFG Closing Ceremony' />
              <div className='event-text'>
                <Row>
                  <Col md='auto' className='text-center text-md-left'>
                    <div className='event-title'>
                      Sports Club's Virtual Series
                    </div>
                    <div className='event-date'>
                      13 July to 16 August 2020
                    </div>
                  </Col>
                  <Col className='text-md-right text-center'>
                    Sign Ups TBC
                    {/* <Button className='btn-outline-sc-red'>Sign Up Now!</Button> */}
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='event-description text-left'>
                    <div className='paragraph'>
                      The Sports Club’s Virtual Series is a special Ruby Jubilee project organised by NUS Students’ Sports Club. The series comprises a Run & Swim component and a Run & Cycle component.
                    </div>
                    <div className='paragraph'>
                      The series features Sports Club’s very own Ruby Jubilee medals that participants can look forward to collecting. Each component entitles participants to a unique medal that can be stacked with the other 2 medals to form an exclusive Ruby Jubilee medal!
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

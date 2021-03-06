import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import SportsCamp2020 from '../images/SportsCamp2020.jpeg';
import SunNUS from '../images/SunNUS2020.jpeg';
import ProjectX from '../images/ProjectX.jpeg';
import Netball from '../images/Netball.jpeg';
import RunNUS from '../images/RunNUSEarlyBird.jpeg';

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
              <img class='event-image' src={SunNUS} alt='SunNUS Breaker' />
              <div className='event-text'>
                <Row>
                  <Col md='auto' className='text-center text-md-left'>
                    <div className='event-title'>
                      SunNUS SUNbreaker
                    </div>
                    <div className='event-date'>
                      30 May to 4th July 2020
                    </div>
                  </Col>
                  <Col className='text-md-right text-center'>
                    <Button className='btn-outline-sc-red' href='https://www.instagram.com/sunnus_official/' target='_blank'>Join Now!</Button>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='event-description text-left'>
                    <div className='paragraph'>
                      Feeling bored at home? Join us online with SUNbreaker 2020, complete 1 of the 3 challenges below!
                    </div>
                    <div className='paragraph'>
                      EVERY participant will receive an exclusive SunNUS medal and stand a chance to win $20 GRABFOOD VOUCHERS (15 Total)
                    </div>

                    <div className='paragraph'>
                      <div>1) Tiktok challenge 🎶🎬</div>
                      <div>Show your creative side by making a sports-related tiktok that best represents SunNUS and your friends</div>
                    </div>

                    <div className='paragraph'>
                      <div>2) HIIT challenge 🏃🤸🏻‍♀️</div>
                      <div>Film a timelapse of yourself doing the SUNbreaker HIIT workout</div>
                    </div>

                    <div className='paragraph'>
                      <div>3) Paper Roll challenge ⚾️⚽️</div>
                      <div>Grab a paper roll and show us how long you can juggle it for</div>
                    </div>

                    <div className='paragraph'>Post your videos on your Instagram story, and TAG US @sunnus_official with the hashtag #SUNbreaker2020</div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          {/* <Row className='justify-content-center'>
            <Col className='event-block' md={11} lg={10} xl={9}>
              <img class='event-image' src={SportsCamp2020} alt='NUS Sports Camp 2020' />
              <div className='event-text'>
                <Row>
                  <Col md='auto' className='text-center text-md-left'>
                    <div className='event-title'>
                      NUS Sports Camp 2020
                    </div>
                    <div className='event-date'>
                      29th to 30th June 2020
                    </div>
                    <div class="a2a_kit a2a_kit_size_32 a2a_default_style share-buttons" data-a2a-url="http://www.bit.ly/NUSSportsCamp2020" data-a2a-title="NUS Sports Camp Sign Up Link">
                      <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
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
          </Row> */}
          <Row className='justify-content-center'>
            <Col className='event-block' md={11} lg={10} xl={9}>
              <img class='event-image' src={ProjectX} alt='Project X' />
              <div className='event-text'>
                <Row>
                  <Col md='auto' className='text-center text-md-left'>
                    <div className='event-title'>
                      Sports Club's Virtual Series
                    </div>
                    <div className='event-date'>
                      29th June to 10th August 2020
                    </div>
                  </Col>
                  <Col className='text-md-right text-center'>
                    <Button className='btn-outline-sc-red' href='http://www.bit.ly/iwantniceshirt' target='_blank'>Sign Up Now!</Button>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='event-description text-left'>
                    <div className='paragraph'>
                      Start gearing up because NUS’ first virtual Aquathlon and Duathlon events are coming to you!
                    </div>
                    <div className='paragraph'>
                      Featuring Novice and Advanced categories, Virtual Series welcomes everyone who’s willing to push themselves and take on the challenge. It’s time to show the world that your time in Circuit Breaker wasn’t wasted! 
                    </div>
                    <div className='paragraph'>
                      Stay tuned for our registration opening on the 29th of June. 
                    </div>
                    <div className='paragraph'>
                      PS. Check out our collectible medals 😍
                    </div>
                    <div className='text-center'>
                      <Button className='btn-outline-sc-red' href='http://virtualseries.nussportsclub.org' target='_blank'>Find Out More!</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col className='event-block' md={11} lg={10} xl={9}>
              <img class='event-image' src={Netball} alt='Internetballuxion X' />
              <div className='event-text'>
                <Row>
                  <Col md='auto' className='text-center text-md-left'>
                    <div className='event-title'>
                      InterNetballuxion 2020
                    </div>
                    <div className='event-date'>
                      22nd June to 11th July 2020
                    </div>
                  </Col>
                  <Col className='text-md-right text-center'>
                    <Button className='btn-outline-sc-red' href='https://www.instagram.com/nus.nrc/' target='_blank'>Join Now</Button>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='event-description text-left'>
                    <div className='paragraph'>
                      Feeling cooped up at home? Don't worry, NUS NRC has got you covered!
                    </div>
                    <div className='paragraph'>
                      Introducing NRC's first ever ONLINE Netball event - InterNetballuxion 2020 📱, that you can participate in from the comfort of your homes and WIN some attractive prizes!!🏅
                    </div>
                    <div className='paragraph'>
                      InterNetballuxion 2020 will be held on Instagram (@nus.nrc) from 22 June to 11 July with $600 worth of grabfood vouchers up for grabs! ✨On top of that, stand a chance to be eligible for Netballuxion 2021 discounts as well!💰
                    </div>
                    <div className='paragraph'>
                      More details can be found on our Instagram (@nus.nrc) so what are you waiting for? Join us at InterNetballuxion 2020!!🔥
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col className='event-block' md={11} lg={10} xl={9}>
              <img class='event-image' src={RunNUS} alt='RunNUS' />
              <div className='event-text'>
                <Row>
                  <Col md='auto' className='text-center text-md-left'>
                    <div className='event-title'>
                      RunNUS 2020
                    </div>
                    <div className='event-date'>
                      13th July to 27th September 2020
                    </div>
                  </Col>
                  <Col className='text-md-right text-center'>
                    <Button className='btn-outline-sc-red' href='http://www.bit.ly/runnus2020' target='_blank'>Sign Up Now!</Button>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='event-description text-left'>
                    <div className='paragraph'>
                      In light of Covid-19, it is pivotal to practice social distancing even while exercising. 🏃🏻‍♀️🏃🏻‍♂️
                    </div>
                    <div className='paragraph'>
                      Introducing RunNUS’s very own VIRTUAL RUN!!!✨ Complete the race anywhere and at your own pace - be it out at the park or indoors on a treadmill! Track yourself with any distance tracking app or take a photo of your treadmill as proof of completion, and upload your image to the submission page.
                    </div>
                    <div className='paragraph'>
                      RunNUS aims promote and support people with disabilities and special needs with Disabled People's Association(DPA) and Singapore Disability Sports Council(SDSC). For each shirt purchased $2 will be donated to our beneficiaries.
                    </div>
                    <div className='paragraph'>
                      Join now and save up to 11.5% off your registration fees during early bird. 
                    </div>
                    <div className='text-center'>
                      <Button className='btn-outline-sc-red' href='http://www.nussportsclub.org/runnus' target='_blank'>Find Out More!</Button>
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

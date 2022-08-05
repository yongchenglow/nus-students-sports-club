import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import IFGClosingPoster from "../images/IFG_Closing_Ceremony_Poster.png";
import RunNUSPoster from "../images/RunNUS_Poster.png";
import SportsClubDayPoster from "../images/Sports_Club_Day_Poster.jpg";

class Event extends Component {
  render() {
    return (
      <div className="section">
        <Container>
          <Row className="justify-content-center">
            <Col className="event-block" md={11} lg={10} xl={9}>
              <img
                class="event-image"
                src={IFGClosingPoster}
                alt="IFG Closing Ceremony"
              />
              <div className="event-text">
                <Row>
                  <Col md="auto" className="text-center text-md-left">
                    <div className="event-title">
                      IFG Swimming X Closing Ceremony
                    </div>
                    <div className="event-date">
                      19th September 2019 6pm-10pm
                    </div>
                  </Col>
                  <Col className="text-md-right text-center">
                    <Button className="btn-outline-sc-red">Sign Up Now!</Button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="event-description text-left">
                    <div className="paragraph">
                      Join us for an evening of fun while supporting your
                      faculty at IFG Swimming.
                    </div>
                    <div className="paragraph">
                      Celebrate your wins together as a faculty during the award
                      ceremony and enjoy the food and drinks at the different
                      carnival booths.
                    </div>
                    <div className="paragraph">
                      Find out which faculty will be crowned the IFG Champions
                      and walking away with the Tan Eng Chye Challenge Trophy
                      for 2019.
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="event-block" md={11} lg={10} xl={9}>
              <img
                class="event-image"
                src={RunNUSPoster}
                alt="IFG Closing Ceremony"
              />
              <div className="event-text">
                <Row>
                  <Col md="auto" className="text-center text-md-left">
                    <div className="event-title">RunNUS 2019</div>
                    <div className="event-date">
                      8th September 2019 7am-11am
                    </div>
                  </Col>
                  <Col className="text-md-right text-center">
                    <Button className="btn-outline-sc-red">Sign Up Now!</Button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="event-description text-left">
                    <div className="paragraph">
                      Take on a challenge and participate in NUS Annual Biggest
                      Running event to raise awarness for Disability Support.
                    </div>
                    <div className="paragraph">
                      This year, RunNUS will be graced by Minister of Culture,
                      Community and Youth Ms Grace Fu. She will be taking part
                      in our 3km challenge to run alongside those with
                      disabilities or special needs. RunNUS 2019 will also be
                      held in conjunction with the launch of the NUS Healthy
                      Campus Initiative between NUS, ActiveSG and HPB.
                    </div>
                    <div className="paragraph">
                      After the run, don't miss out on our race carnival where
                      you will get to enjoy the food and drinks, as well as
                      games booth to learn more about disability support and
                      living a healthy lifestyle.
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="event-block" md={11} lg={10} xl={9}>
              <img
                class="event-image"
                src={SportsClubDayPoster}
                alt="IFG Closing Ceremony"
              />
              <div className="event-text">
                <Row>
                  <Col md="auto" className="text-center text-md-left">
                    <div className="event-title">Sports Club Day</div>
                    <div className="event-date">22nd January 2019 10am-5pm</div>
                  </Col>
                  <Col className="text-md-right text-center">
                    <Button className="btn-outline-sc-red">Sign Up Now!</Button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="event-description text-left">
                    <div className="paragraph">
                      Join us for an ultimate day of fun and get a chance to win
                      different types of pizes for participating.
                    </div>
                    <div className="paragraph">
                      Sports Club Day will have a total of 23 booths for your to
                      explore and try out the different types of recreational
                      sports and recreational events that you can take up in
                      NUS. If you do enjoy the try-out sessions, you can
                      continue to join their free opening training sessions to
                      learn more!
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
}

export default Event;

import React, { Component } from "react";
import { Container, Card, CardDeck, Button } from "react-bootstrap";

import IFGLogo from "../images/IFG_Logo_No_Year.png";
import NUSBiathlon from "../images/NUS_Biathlon_Logo_No_Year.png";
import RunNUS from "../images/RunNUS_Logo_No_Year.jpg";
import NUSSportsCamp from "../images/NUS_Sports_Camp_Logo.png";
import SunNUS from "../images/SunNUS_Logo_No_Year.png";

class Projects extends Component {
  render() {
    return (
      <div className="section text-center">
        <Container>
          <CardDeck className="justify-content-center">
            <Card className="cell-card">
              <Card.Img
                variant="top"
                className="project-image"
                src={NUSBiathlon}
                alt="NUS Biathlon"
              />
              <Card.Body className="text-left">
                <Card.Title>NUS Biathlon</Card.Title>
                <div className="card-sub-title">
                  20th March to 27th March 2021
                </div>
                <Card.Text>
                  <span className="paragraph">
                    NUS Biathlon is the largest swim and run event in the
                    National University of Singapore. It has consistently
                    attracted over 200 participants ranging from the NUS
                    community, various educational institutions and the public.
                  </span>
                  <span className="paragraph">
                    With a huge outreach to both athletes and non-athletes, NUS
                    Biathlon serves as a platform for varsity teams to compete
                    and at the same time, a great opportunity for novices to
                    indulge in the sport.
                  </span>
                </Card.Text>
                <div className="text-center">
                  <Button
                    className="btn-outline-sc-red"
                    href="http://www.nussportsclub.org/nusbiathlon"
                    target="_blank"
                  >
                    Find Out More!
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="cell-card">
              <Card.Img
                variant="top"
                className="project-image"
                src={SunNUS}
                alt="SunNUS"
              />
              <Card.Body className="text-left">
                <Card.Title>SunNUS</Card.Title>
                <div className="card-sub-title">TBA</div>
                <Card.Text>
                  <span className="paragraph">
                    SunNUS is the National University of Singapore's largest
                    annual beach event for anyone to do sports. SunNUS empowers
                    individuals from all walks of life to pursue an active
                    lifestyle and have fun under the sun!
                  </span>
                  <span className="paragraph">
                    Both NUS students and the general public alike can look
                    forward to the Mount Imbiah Challenge, several beach sports,
                    a performance by beach pageants and an exciting array for
                    fringe games.
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cell-card">
              <Card.Img
                variant="top"
                className="project-image"
                src={NUSSportsCamp}
                alt="NUS Sports Camp"
              />
              <Card.Body className="text-left">
                <Card.Title>NUS Sports Camp</Card.Title>
                <div className="card-sub-title">TBA</div>
                <Card.Text>
                  <span className="paragraph">
                    NUS Sports Camp is the largest non-faculty freshmen
                    orientation camp. This 4D3N camp brings together students of
                    different backgrounds and advocates the need to live a
                    healthy and active lifestyle.
                  </span>
                  <span className="paragraph">
                    In this camp, Freshmen will be exposed to a variety of
                    Martial Arts, Indoor, Land, Water and outdoor sports.
                    Through team-building activities, freshmen are bound to have
                    an exciting start to their university life through the
                    strong friendships forged.
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cell-card">
              <Card.Img
                variant="top"
                className="project-image"
                src={IFGLogo}
                alt="Inter-Faculty Games"
              />
              <Card.Body className="text-left">
                <Card.Title>Inter-Faculty Games</Card.Title>
                <div className="card-sub-title">TBA</div>
                <Card.Text>
                  <span className="paragraph">
                    Inter-Faculty Games (IFG) is the largest and most
                    anticipated student life event in NUS. For 5 weeks, 3500+
                    athletes across 11 faculties take part in 23 sporting events
                    in hopes of clinching the Tan Eng Chye Challenge Trophy.
                  </span>
                  <span className="paragraph">
                    Along with various performing arts groups and student
                    volunteers, we kick start the season with an Opening
                    Ceremony extravaganza, and end it on a high note with a
                    celebratory Closing Ceremony.
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cell-card">
              <Card.Img
                variant="top"
                className="project-image"
                src={RunNUS}
                alt="RunNUS"
              />
              <Card.Body className="text-left">
                <Card.Title>RunNUS</Card.Title>
                <div className="card-sub-title">TBA</div>
                <Card.Text>
                  <span className="paragraph">
                    RunNUS is a running event that includes a 3km, 5km and 10km
                    run bundled with a spectacular carnival that includes games,
                    refreshments and lucky draws.
                  </span>
                  <span className="paragraph">
                    With the tagline ‘Run For A Cause’, RunNUS partners with NUS
                    Disability Support Office (DSO) and Disabled People's
                    Association, to promote the empowerment of people with
                    disabilities through inclusiveness and to encourage running
                    to keep a healthy lifestyle.
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import { Container, CardDeck, Card } from "react-bootstrap";

import Archery from "../images/Archery.jpg";
import Basketball from "../images/Basketball.jpg";
import Netball from "../images/Netball.jpg";
import Skating from "../images/Skating.jpg";
import Volleyball from "../images/Volleyball.jpg";

class Land extends Component {
  render() {
    return (
      <div className="section text-center">
        <Container>
          <div className="section-heading">Land</div>
          <CardDeck className="justify-content-center">
            <Card className="club-card">
              <a href={process.env.PUBLIC_URL + "/clubs/archery"}>
                <div>
                  <Card.Img
                    variant="top"
                    className="project-image"
                    src={Archery}
                    alt="NUS Archery Club"
                  />
                </div>
                <Card.Body className="club-name">
                  <Card.Title>Archery</Card.Title>
                  <h6 className="find-out">Find out more!</h6>
                </Card.Body>
              </a>
            </Card>
            <Card className="club-card">
              <a href={process.env.PUBLIC_URL + "/clubs/basketball"}>
                <div>
                  <Card.Img
                    variant="top"
                    className="project-image"
                    src={Basketball}
                    alt="NUS Basketball Club"
                  />
                </div>
                <Card.Body className="club-name">
                  <Card.Title>Basketball</Card.Title>
                  <h6 className="find-out">Find out more!</h6>
                </Card.Body>
              </a>
            </Card>
            <Card className="club-card">
              <a href={process.env.PUBLIC_URL + "/clubs/netball"}>
                <div>
                  <Card.Img
                    variant="top"
                    className="project-image"
                    src={Netball}
                    alt="NUS Netball Club"
                  />
                </div>
                <Card.Body className="club-name">
                  <Card.Title>Netball</Card.Title>
                  <h6 className="find-out">Find out more!</h6>
                </Card.Body>
              </a>
            </Card>
            <Card className="club-card">
              <a href={process.env.PUBLIC_URL + "/clubs/skating"}>
                <div>
                  <Card.Img
                    variant="top"
                    className="project-image"
                    src={Skating}
                    alt="NUS Skating Club"
                  />
                </div>
                <Card.Body className="club-name">
                  <Card.Title>Skating</Card.Title>
                  <h6 className="find-out">Find out more!</h6>
                </Card.Body>
              </a>
            </Card>
            <Card className="club-card">
              <a href={process.env.PUBLIC_URL + "/clubs/volleyball"}>
                <div>
                  <Card.Img
                    variant="top"
                    className="project-image"
                    src={Volleyball}
                    alt="NUS Volleyball Club"
                  />
                </div>
                <Card.Body className="club-name">
                  <Card.Title>Volleyball</Card.Title>
                  <h6 className="find-out">Find out more!</h6>
                </Card.Body>
              </a>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Land;

import React, { Component } from "react";
import { Container, CardDeck, Card } from "react-bootstrap";

import Aikido from "../images/Aikido.jpg";
import Boxing from "../images/Boxing.jpg";
import Capoeira from "../images/Capoeira.jpg";
import Karate from "../images/Karate.jpg";
import Kendo from "../images/Kendo.jpg";
import MuayThai from "../images/MuayThai.jpg";
import NWP from "../images/NWP.jpg";
import Wushu from "../images/Wushu.jpg";

class MartialArts extends Component {
  render() {
    return (
      <div className="section text-center">
        <Container>
          <div className="section-heading">Martial Arts</div>
          <CardDeck className="justify-content-center">
            <Card className="club-card">
              <div>
                <Card.Img
                  variant="top"
                  className="project-image"
                  src={Aikido}
                  alt="NUS Aikido Club"
                />
              </div>
              <Card.Body className="club-name">
                <Card.Title>Aikido</Card.Title>
              </Card.Body>
            </Card>
            <Card className="club-card">
              <div>
                <Card.Img
                  variant="top"
                  className="project-image"
                  src={Boxing}
                  alt="NUS Boxing Club"
                />
              </div>
              <Card.Body className="club-name">
                <Card.Title>Boxing</Card.Title>
              </Card.Body>
            </Card>
            <Card className="club-card">
              <div>
                <Card.Img
                  variant="top"
                  className="project-image"
                  src={Capoeira}
                  alt="NUS Capoeira Club"
                />
              </div>
              <Card.Body className="club-name">
                <Card.Title>Capoeira</Card.Title>
              </Card.Body>
            </Card>
            <Card className="club-card">
              <div>
                <Card.Img
                  variant="top"
                  className="project-image"
                  src={Karate}
                  alt="NUS Karate Club"
                />
              </div>
              <Card.Body className="club-name">
                <Card.Title>Karate</Card.Title>
              </Card.Body>
            </Card>
            <Card className="club-card">
              <div>
                <Card.Img
                  variant="top"
                  className="project-image"
                  src={Kendo}
                  alt="NUS Kendo Club"
                />
              </div>
              <Card.Body className="club-name">
                <Card.Title>Kendo</Card.Title>
              </Card.Body>
            </Card>
            <Card className="club-card">
              <div>
                <Card.Img
                  variant="top"
                  className="project-image"
                  src={MuayThai}
                  alt="NUS Muay Thai Club"
                />
              </div>
              <Card.Body className="club-name">
                <Card.Title>Muay Thai</Card.Title>
              </Card.Body>
            </Card>
            <Card className="club-card">
              <div>
                <Card.Img
                  variant="top"
                  className="project-image"
                  src={NWP}
                  alt="NUS Nam Wah Pai Self Defence"
                />
              </div>
              <Card.Body className="club-name">
                <Card.Title>Nam Wah Pai Self Defense</Card.Title>
              </Card.Body>
            </Card>
            <Card className="club-card">
              <div>
                <Card.Img
                  variant="top"
                  className="project-image"
                  src={Wushu}
                  alt="NUS Wushu Club"
                />
              </div>
              <Card.Body className="club-name">
                <Card.Title>Wushu</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default MartialArts;

import React, { Component } from "react";
import { Container, CardDeck, Card } from "react-bootstrap";

import ULC from "../images/ULC.jpg";

class Water extends Component {
  render() {
    return (
      <div className="section text-center">
        <Container>
          <div className="section-heading">Water</div>
          <CardDeck className="justify-content-center">
            <Card className="club-card">
              <a href={process.env.PUBLIC_URL + "/clubs/ulc"}>
                <div>
                  <Card.Img
                    variant="top"
                    className="project-image"
                    src={ULC}
                    alt="NUS University Lifegaurd Corps"
                  />
                </div>
                <Card.Body className="club-name">
                  <Card.Title>University Lifeguard Corps</Card.Title>
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

export default Water;

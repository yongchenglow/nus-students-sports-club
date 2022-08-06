import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import SportsClubCollage from "../images/sports_club_collage.jpg";
import SportsClubLogo from "../../../../../../images/logos/SportsClubLogo.js";

class Collage extends Component {
  render() {
    return (
      <Container>
        <Row className="section">
          <Col sm={6} md={5} className="text-center aligner">
            <div>
              <SportsClubLogo className="img-fluid img-logo" />
              <div className="tagline mb-2">Unite & Ignite</div>
              <Button
                className="btn-outline-sc-red"
                href="https://www.nussportsclub.org/elections"
                target="_blank"
              >
                Find out about Elections
              </Button>
            </div>
          </Col>
          <Col sm={6} md={7}>
            <img
              className="img-fluid"
              src={SportsClubCollage}
              alt="Sports Club Collage"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Collage;

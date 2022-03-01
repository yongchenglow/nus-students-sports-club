import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Cover extends Component {
  render() {
    return (
      <div className="about-cover">
        <Container>
          <Row className="cover-row-container justify-content-center">
            <Col
              className="cover-container"
              xs={11}
              sm={11}
              md={10}
              lg={9}
              xl={8}
            >
              <div className="cover-title">Sports Club Events</div>
              <div className="cover-text">
                We organise events suitable for all sports enthusiasts and the
                adventurous, regardless of sports background, all year round.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Cover;

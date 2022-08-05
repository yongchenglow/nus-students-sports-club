import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Cover extends Component {
  render() {
    return (
      <div className="partners-cover">
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
              <div className="cover-title">Our Partners</div>
              <div className="cover-text">Be a partner of Sports Club</div>
              <div className="cover-text">
                Contact{" "}
                <span className="red-text">marketing@nussportsclub.org</span>{" "}
                for potiential collaborations
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Cover;

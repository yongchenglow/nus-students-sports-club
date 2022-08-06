import React, { Component } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

class MainFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col className="text-center text-md-left" md={4}>
              <div className="footer-text">
                <strong>Address:</strong> 2 Sports Drive 1 S(117561)
              </div>
              <div className="footer-text">
                <strong>Email:</strong> enquiry@nussportsclub.org
              </div>
            </Col>
            <Col className="footer-col" md={4}>
              <Button
                variant="outline-light"
                className="social-button"
                href="https://www.facebook.com/NUSSportsClub/"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Button>
              <Button
                variant="outline-light"
                className="social-button"
                style={{ fontSize: "1.8rem", padding: "0.15rem" }}
                href="https://www.instagram.com/nussportsclub/?hl=en"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Button>
              <Button
                variant="outline-light"
                className="social-button"
                style={{ fontSize: "1.7rem", padding: "0.2rem" }}
                href="https://t.me/NUSSportsClub"
              >
                <FontAwesomeIcon icon={faTelegramPlane} />
              </Button>
            </Col>
            <Col md={4}>
              <div className="copyright-text">
                &copy; Copyright 2022 NUS Students' Sports Club.
                {this.state.width >= 1200 ? <br /> : null} All Rights Reserved.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainFooter;

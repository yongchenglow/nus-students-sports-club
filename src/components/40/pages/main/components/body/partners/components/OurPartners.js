import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

import ariston from "../images/ariston.png";
import mc2 from "../images/mc2.jpg";
import nivea from "../images/nivea.jpg";
import psFoodAndBeverage from "../images/psFoodAndBeverage.png";
import SengHong from "../images/SengHong.jpg";
import Unilever from "../images/Unilever.bmp";
import Win2 from "../images/Win2.jpg";
import wipro from "../images/wipro.png";
import AF from "../images/af.jpg";
import Cationorm from "../images/cationorm.png";
import MyProteih from "../images/myproteih.jpeg";
import Rev from "../images/rev.jpg";

class OurPartners extends Component {
  render() {
    return (
      <div className="section text-center">
        <Container>
          <div className="section-heading">Featuring</div>
          <Row className="justify-content-center mt-2 h-100">
            <Col sm={3} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-high"
                src={nivea}
                alt="Nivea"
              />
            </Col>
            <Col sm={3} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-high"
                src={Unilever}
                alt="Unilever"
              />
            </Col>
            <Col sm={3} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-high"
                src={wipro}
                alt="wirpo"
              />
            </Col>
            <Col sm={3} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-high"
                src={psFoodAndBeverage}
                alt="psFoodAndBeverage"
              />
            </Col>
          </Row>
          <Row className="justify-content-center h-100">
            <Col sm={2} className="my-auto pb-4">
              <img className="img-fluid partner-img-medium" src={AF} alt="AF" />
            </Col>
            <Col sm={2} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-medium"
                src={Cationorm}
                alt="Cationorm"
              />
            </Col>
            <Col sm={2} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-medium"
                src={MyProteih}
                alt="My Proteih"
              />
            </Col>
            <Col sm={2} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-medium ml-5 ml-m-0"
                src={Rev}
                alt="Rev"
              />
            </Col>
            <Col sm={2} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-medium"
                src={SengHong}
                alt="SengHong"
              />
            </Col>
          </Row>
          <Row className="justify-content-center h-100">
            {/* <Col sm={2} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-medium"
                src={mc2}
                alt="MC2"
              />
            </Col> */}

            {/* <Col sm={2} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-medium"
                src={ariston}
                alt="Ariston"
              />
            </Col> */}
            {/* <Col sm={2} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-medium ml-5 ml-m-0"
                src={Win2}
                alt="Win2"
              />
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default OurPartners;

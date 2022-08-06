import React, { Component } from "react";
import { Card, Container, CardDeck, Button } from "react-bootstrap";

import NUSBiathlon from "../images/NUSBiathlon21.png";

class FeaturedEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    const script = document.createElement("script");

    script.src = "https://static.addtoany.com/menu/page.js";
    script.async = true;

    document.body.appendChild(script);
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    return (
      <Container className="section text-center">
        <div className="section-heading">Featured Events</div>
        <CardDeck className="justify-content-center">
          <Card className="featured-events">
            <Card.Img variant="top" src={NUSBiathlon} alt="NUS Biathlon 2021" />
            <Card.Body className="text-left">
              <Card.Title>NUS Biathlon 2021</Card.Title>
              <Card.Text>
                <div className="mb-3">
                  Your long awaited sign ups for NUS Biathlon 2021 are open now
                  with 3 main categories to choose from! Want to push yourself
                  to your limits? Sprint Individual is just for you. New to NUS
                  Biathlon? Fret not, the Novice Individual category does not
                  discriminate. Lastly, for the shy ones, grab a companion along
                  for our Power Duo Race. HURRY! Sign up for our races now !!
                </div>
              </Card.Text>
              <Button
                className="btn btn-block btn-success"
                href="http://bit.ly/biathlon2021registration"
                target="_blank"
              >
                Join Now
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}

export default FeaturedEvents;

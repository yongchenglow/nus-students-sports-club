import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function Event(props) {
  const [events, setEvents] = useState();

  const [hasError, setError] = useState(false);

  const getEvents = () => {
    fetch(
      process.env.REACT_APP_FILE_PATH_PREFIX +
        props.mc +
        process.env.REACT_APP_EVENTS_DATA_PATH,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.events);
        setEvents(generateEvents(myJson.events));
      })
      .catch(function () {
        setError(true);
      });
  };

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hasError === true) {
    return <Redirect to="/notfound" />;
  }

  const generateEvents = (events) => {
    return events.map((event) => {
      const eventDates = event.dates.map((date) => <div>{date}</div>);
      const descriptionChunk = event.description.map((description) => (
        <div className="paragraph">{description}</div>
      ));

      let eventMessage = null;
      if (event.message !== "") {
        eventMessage = (
          <div>
            <a
              href={event.message_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.message}
            </a>
          </div>
        );
      }

      let button = null;
      if (event.button_text !== "") {
        button = (
          <div className="text-center">
            <Button
              className="btn-outline-sc-red"
              href={event.button_link}
              target="_blank"
            >
              {event.button_text}
            </Button>
          </div>
        );
      }
      return (
        <Row className="justify-content-center">
          <Col className="event-block" md={11} lg={10} xl={9}>
            <img
              class="event-image-vertical"
              src={
                process.env.REACT_APP_FILE_PATH_PREFIX +
                props.mc +
                process.env.REACT_APP_EVENTS_IMAGE_PATH +
                event.image
              }
              alt={event.name}
            />
            <div className="event-text">
              <Row>
                <Col md="auto" className="text-center text-md-left">
                  <div className="event-title">{event.name}</div>
                  <div className="event-date">
                    {eventDates}
                    {eventMessage}
                  </div>
                </Col>
                <Col className="text-center">
                  <Button
                    className="btn-outline-sc-red"
                    href={event.signup_link}
                    target="_blank"
                  >
                    Sign Up Now!
                  </Button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="event-description text-left">
                  {descriptionChunk}
                  {button}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      );
    });
  };

  return (
    <div className="section text-center">
      <Container>{events}</Container>
    </div>
  );
}
export default Event;

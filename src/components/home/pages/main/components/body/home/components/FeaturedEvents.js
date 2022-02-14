import React, { useState, useEffect } from "react";
import { Card, Container, CardDeck, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Carousel from "nuka-carousel";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function FeaturedEvents() {
  const [featured, setFeatured] = useState();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [contentSize, setContentSize] = useState();

  const [hasError, setError] = useState(false);

  const getFeatured = () => {
    fetch(process.env.REACT_APP_41_FEATURED_DATA_PATH, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.featured);
        setContentSize(myJson.featured.length);
        setFeatured(generateFeatured(myJson.featured));
      })
      .catch(function () {
        setError(true);
      });
  };

  useEffect(() => {
    getFeatured();
    // const script = document.createElement("script");
    // script.src = "https://static.addtoany.com/menu/page.js";
    // script.async = true;
    // document.body.appendChild(script);
    console.log(window.width);
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateFeatured = (featured) => {
    return featured.map((event) => {
      let cardImage = null;
      if (event.image_link === "") {
        cardImage = (
          <Card.Img variant="top" src={event.image} alt={event.name} />
        );
      } else {
        cardImage = (
          <a href={event.image_link} target="_blank" rel="noopener noreferrer">
            <Card.Img
              variant="top"
              src={process.env.REACT_APP_41_FEATURED_IMAGE_PATH + event.image}
              alt={event.name}
            />
          </a>
        );
      }
      const eventDates = event.dates.map((date) => <h6>{date}</h6>);
      return (
        <Card className="featured-events">
          {cardImage}
          <Card.Body className="text-left">
            <Card.Title className="text-center">{event.name}</Card.Title>
            <Card.Text>
              <div className="text-center">
                {eventDates}
                <a
                  href={event.message_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {event.message}
                </a>
              </div>
              <div className="mb-3">{event.description}</div>
            </Card.Text>
            <Button
              className="btn btn-block btn-success"
              href={event.button_link}
              target="_blank"
            >
              {event.button_text}
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  let deck = null;
  var slidesToShow;
  var withoutControls;
  var autoplay = false;
  if (windowDimensions.width >= 992) {
    slidesToShow = 3;
  } else if (windowDimensions.width >= 768) {
    slidesToShow = 2;
  } else {
    slidesToShow = 1;
  }

  if (slidesToShow > contentSize) {
    slidesToShow = contentSize;
  }

  if (contentSize > slidesToShow) {
    withoutControls = false;
    autoplay = true;
  } else {
    withoutControls = true;
    autoplay = true;
  }

  if (contentSize === 1) {
    deck = <CardDeck className="justify-content-center">{featured}</CardDeck>;
  } else if (contentSize > 1) {
    deck = (
      <Carousel
        cellSpacing={20}
        slidesToShow={slidesToShow}
        autoplay={autoplay}
        withoutControls={withoutControls}
        heightMode={"max"}
        wrapAround={true}
        dragging={true}
        defaultControlsConfig={{
          nextButtonStyle: { display: "none" },
          prevButtonStyle: { display: "none" },
          pagingDotsContainerClassName: "slider-controls",
          pagingDotsClassName: "paging-dot-button",
        }}
      >
        {featured}
      </Carousel>
    );
  }

  let container = (
    <Container className="section text-center">
      <div className="section-heading">Featured Events</div>
      {deck}
    </Container>
  );

  if (contentSize === 0) {
    container = null;
  }

  if (hasError === true) {
    return <Redirect to="/notfound" />;
  }

  return container;
}
export default FeaturedEvents;

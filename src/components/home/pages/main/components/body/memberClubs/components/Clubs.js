import React, { useState, useEffect } from "react";
import { Container, CardDeck, Card, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function Clubs(props) {
  const [clubs, setClubs] = useState();

  const [hasError, setError] = useState(false);

  const [numCategories, setNumCategories] = useState(0);
  const [numClubs, setNumClubs] = useState(0);

  const getClubs = () => {
    fetch(
      process.env.REACT_APP_FILE_PATH_PREFIX +
        props.mc +
        process.env.REACT_APP_CLUB_DATA_PATH,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.memberClubs);
        setClubs(generateClubs(myJson.memberClubs));
      })
      .catch(function () {
        setError(true);
      });
  };

  useEffect(() => {
    getClubs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hasError === true) {
    return <Redirect to="/notfound" />;
  }

  const generateClubs = (categories) => {
    setNumCategories(categories.length);
    let clubCount = 0;
    categories.map((category) => {
      clubCount += category.clubs.length;
    });
    setNumClubs(clubCount);

    return categories.map((category) => {
      let clubs = [];
      category.clubs.map((club) => {
        clubs.push(
          <Card className="club-card">
            <a
              href={
                process.env.PUBLIC_URL +
                process.env.REACT_APP_CLUB_PATH +
                club.short_name
              }
            >
              <div>
                <Card.Img
                  variant="top"
                  className="project-image"
                  src={
                    process.env.REACT_APP_FILE_PATH_PREFIX +
                    props.mc +
                    process.env.REACT_APP_CLUB_IMAGE_PATH +
                    club.image
                  }
                  alt={club.full_name}
                />
              </div>
              <Card.Body className="club-name">
                <Card.Title>{club.name}</Card.Title>
              </Card.Body>
              <h6 className="find-out">Find out more!</h6>
            </a>
          </Card>
        );
      });
      return (
        <div className="section text-center">
          <Container>
            <div className="section-heading">{category.category}</div>
            <CardDeck className="justify-content-center">{clubs}</CardDeck>
          </Container>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="plain-cover">
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
              <div className="cover-title">Member Clubs</div>
              <div className="cover-text-large">
                <span className="red-text">{numCategories}</span> Sports
                Categories
              </div>
              <div className="cover-text-large">
                <span className="red-text">{numClubs}</span> Member Clubs
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {clubs}
    </React.Fragment>
  );
}

export default Clubs;

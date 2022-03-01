import React, { useState, useEffect } from "react";
import { Container, Card, CardDeck, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

function Projects(props) {
  const [projects, setProjects] = useState();

  const [hasError, setError] = useState(false);

  const getProjects = () => {
    fetch(
      process.env.REACT_APP_FILE_PATH_PREFIX +
        props.mc +
        process.env.REACT_APP_PROJECT_DATA_PATH,
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
        setProjects(generateProjects(myJson.projects));
      })
      .catch(function () {
        setError(true);
      });
  };

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateProjects = (projects) => {
    return projects.map((project) => {
      const projectDates = project.dates.map((date) => (
        <div className="card-sub-title">{date}</div>
      ));
      const projectDescription = project.description.map((description) => (
        <span className="paragraph">{description}</span>
      ));
      let projectButton = null;
      if (project.button.button_text !== "") {
        projectButton = (
          <div className="text-center">
            <Button
              className="btn-outline-sc-red"
              href={project.button.button_link}
              target="_blank"
            >
              {project.button.button_text}
            </Button>
          </div>
        );
      }
      let message = null;
      if (project.message !== "") {
        message = (
          <div className="margin-top-12 text-danger">{project.message}</div>
        );
      }

      var socials = [];
      if (project.facebook_url !== "") {
        socials.push(
          <Button
            variant="outline-dark"
            className="sm-social-club-button"
            style={{ fontSize: "1.2rem", padding: "0.3rem" }}
            href={project.facebook_url}
            key={"facebokLink"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Button>
        );
      }

      if (project.instagram_url !== "") {
        socials.push(
          <Button
            variant="outline-dark"
            className="sm-social-club-button"
            style={{ fontSize: "1.5rem", padding: "0.07rem" }}
            href={project.instagram_url}
            key={"instagramLink"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Button>
        );
      }

      if (project.telegram_url !== "") {
        socials.push(
          <Button
            variant="outline-dark"
            className="sm-social-club-button"
            style={{ fontSize: "1.5rem", padding: "0.1rem" }}
            href={project.telegram_url}
            key={"telegramLink"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTelegramPlane} />
          </Button>
        );
      }

      let cardImage = null;

      if (project.image_url === "") {
        cardImage = (
          <Card.Img
            variant="top"
            className="project-image"
            src={
              process.env.REACT_APP_FILE_PATH_PREFIX +
              props.mc +
              process.env.REACT_APP_PROJECT_IMAGE_PATH +
              project.image
            }
            alt={project.name}
          />
        );
      } else {
        cardImage = (
          <a href={project.image_url} target="_blank" rel="noopener noreferrer">
            <Card.Img
              variant="top"
              className="project-image"
              src={
                process.env.REACT_APP_FILE_PATH_PREFIX +
                props.mc +
                process.env.REACT_APP_PROJECT_IMAGE_PATH +
                project.image
              }
              alt={project.name}
            />
          </a>
        );
      }

      return (
        <Card className="project-card">
          {cardImage}
          <Card.Body className="text-left">
            <Card.Title>{project.name}</Card.Title>
            {projectDates}
            {message}
            <div className="text-md-left text-center">{socials}</div>
            <Card.Text>{projectDescription}</Card.Text>
            {projectButton}
          </Card.Body>
        </Card>
      );
    });
  };

  if (hasError === true) {
    return <Redirect to="/notfound" />;
  }

  return (
    <div className="section text-center">
      <Container>
        <CardDeck className="justify-content-center">{projects}</CardDeck>
      </Container>
    </div>
  );
}

export default Projects;

import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function OurPartners() {
  const [partners, setPartners] = useState();

  const [hasError, setError] = useState(false);

  const getPartners = () => {
    fetch(process.env.REACT_APP_41_PARTNERS_DATA_PATH, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.partners);
        setPartners(generatePartners(myJson.partners));
      })
      .catch(function () {
        setError(true);
      });
  };

  useEffect(() => {
    getPartners();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hasError === true) {
    return <Redirect to="/notfound" />;
  }

  const generatePartners = (partners) => {
    return partners.map((partner) => {
      let rows = partner.rows.map((row) => {
        console.log(row);
        let col = row.sponsors.map((sponsor) => {
          console.log(sponsor);
          let content = (
            <Col sm={sponsor.size} className="my-auto pb-4">
              <img
                className="img-fluid partner-img-high"
                src={
                  process.env.REACT_APP_41_PARTNERS_IMAGE_PATH + sponsor.image
                }
                alt={sponsor.name}
              />
            </Col>
          );
          if (sponsor.image_link === "") {
            return content;
          } else {
            return (
              <a
                href={sponsor.image_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            );
          }
        });
        return <Row className="justify-content-center h-100">{col}</Row>;
      });
      return (
        <div className="section text-center">
          <Container>
            <div className="section-heading mb-4">Featuring</div>
            {rows}
          </Container>
        </div>
      );
    });
  };

  return <React.Fragment>{partners}</React.Fragment>;
}

export default OurPartners;

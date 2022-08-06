import React, { Component } from "react";
import { CardDeck, Card, Container } from "react-bootstrap";
import CellModal from "./CellModal";

class Cells extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      cellName: "presidential",
    };

    // This binding is necessary to make `this` work in the callback
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    console.log(e.currentTarget.id);
    this.setState({
      cellName: e.currentTarget.id,
      showModal: true,
    });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="section text-center">
        <Container>
          <CardDeck className="justify-content-center single-card">
            <Card
              className="cell-card"
              onClick={this.openModal}
              id="presidential"
            >
              <div>
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    process.env.REACT_APP_FILE_PATH_PREFIX +
                    this.props.mc +
                    process.env.REACT_APP_IMAGES_FILE_PATH +
                    "/cells/Presidential.jpg"
                  }
                  alt="Presidential Cell"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Presidential Cell</Card.Title>
                <Card.Text>
                  We oversee all the operations within Sports Club and act as
                  the interface between Sports Club and the school. We also help
                  to make strategic decisions, and influence school policies
                  towards recreational sports in general.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck className="justify-content-center">
            <Card className="cell-card" onClick={this.openModal} id="finance">
              <div>
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    process.env.REACT_APP_FILE_PATH_PREFIX +
                    this.props.mc +
                    process.env.REACT_APP_IMAGES_FILE_PATH +
                    "/cells/Finance.jpg"
                  }
                  alt="Finance Cell"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Finance Cell</Card.Title>
                <Card.Text>
                  We oversee all finances under Sports Club and ensure that all
                  financial procedures are carried out correctly.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="cell-card"
              onClick={this.openModal}
              id="secretariat"
            >
              <div>
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    process.env.REACT_APP_FILE_PATH_PREFIX +
                    this.props.mc +
                    process.env.REACT_APP_IMAGES_FILE_PATH +
                    "/cells/Secretariat.jpg"
                  }
                  alt="Secretariat Cell"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Secretariat Cell</Card.Title>
                <Card.Text>
                  We help to settle necessary administrative, logistics and
                  facilitate matters. We act as the interface with the sports
                  office for the various sporting events and projects.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cell-card" onClick={this.openModal} id="marketing">
              <div>
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    process.env.REACT_APP_FILE_PATH_PREFIX +
                    this.props.mc +
                    process.env.REACT_APP_IMAGES_FILE_PATH +
                    "/cells/Marketing.jpg"
                  }
                  alt="Marketing Cell"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Marketing Cell</Card.Title>
                <Card.Text>
                  We help to secure strategic sponsors and privilege partners
                  for Sports Club. We also manage the disbursement of marketing
                  collaterals.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cell-card" onClick={this.openModal} id="publicity">
              <div>
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    process.env.REACT_APP_FILE_PATH_PREFIX +
                    this.props.mc +
                    process.env.REACT_APP_IMAGES_FILE_PATH +
                    "/cells/Publicity.jpg"
                  }
                  alt="Publicity Cell"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Publicity Cell</Card.Title>
                <Card.Text>
                  We strategically brand Sports Club and its umbrella through
                  the various outreach platforms available.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cell-card" onClick={this.openModal} id="welfare">
              <div>
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    process.env.REACT_APP_FILE_PATH_PREFIX +
                    this.props.mc +
                    process.env.REACT_APP_IMAGES_FILE_PATH +
                    "/cells/Welfare.jpg"
                  }
                  alt="Welfare Cell"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Welfare Cell</Card.Title>
                <Card.Text>
                  We organize various initiatives to enhance the well-being as
                  well as appreciate the members for their commitments and hard
                  work.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cell-card" onClick={this.openModal} id="projects">
              <div>
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    process.env.REACT_APP_FILE_PATH_PREFIX +
                    this.props.mc +
                    process.env.REACT_APP_IMAGES_FILE_PATH +
                    "/cells/Projects.jpg"
                  }
                  alt="Projects Cell"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Projects Cell</Card.Title>
                <Card.Text>
                  We work together to strategically brand and organize the 5
                  Sports Club Projects, ensuring its quality and excellence.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          {/* <CardDeck className='justify-content-center single-card'>
            <Card className='cell-card'>
              <div>
                <Card.Img variant='top' src={NUSSUExcoRep} alt='NUSSU Exco Rep' />
              </div>
              <Card.Body className='text-left'>
                <Card.Title>NUSSU Exco Rep</Card.Title>
                <Card.Text>
                  We facilitate coordination and cooperation efforts between NUSSU Exco and Sports club and we represent the interest of the sporting community when engaging with the NUS administration.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck> */}
        </Container>
        <CellModal
          show={this.state.showModal}
          onHide={this.closeModal}
          cellName={this.state.cellName}
          mc={this.props.mc}
        />
      </div>
    );
  }
}

export default Cells;

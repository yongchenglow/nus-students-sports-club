import React, { Component } from "react";
import { CardDeck, Card, Modal } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import $ from "jquery";

class CellModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      has_error: false,
    };

    this.getCellData = this.getCellData.bind(this);
    this.getCellData();
  }

  getCellData() {
    $.ajax({
      url: process.env.REACT_APP_41_CELL_IMAGES_DATA_PATH,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ cellData: this.formatCellData(data) });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        this.setState({ has_error: true });
      }.bind(this),
    });
  }

  // Parse and Sort of the Cell data
  formatCellData(data) {
    var cellData;
    cellData = this.parseCellData(data);
    return cellData;
  }

  // Parse the Cell Data by adding the file paths defined in the environment
  parseCellData(data) {
    var cellData = data;
    var addFileString = process.env.REACT_APP_41_CELL_IMAGES_FILE_PATH;

    for (var key in cellData) {
      cellData[key].forEach(function (item, index) {
        item[0] = addFileString + item[0];
      });
    }

    return cellData;
  }

  render() {
    // Redirect to page not found if the member club does not exist
    if (this.state.has_error === true) {
      return <Redirect to="/notfound" />;
    }

    let cellMembers = [];
    if (this.state.cellData !== undefined) {
      this.state.cellData[this.props.cellName].forEach(function (item, index) {
        cellMembers.push(
          <Card className="individual-card" key={index}>
            <div>
              <Card.Img variant="top" src={item[0]} alt={item[1]} />
            </div>
            <Card.Body className="text-center">
              <Card.Title>{item[1]}</Card.Title>
              <Card.Text>
                <h6>{item[2]}</h6>
                <small>{item[3]}</small>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      });
    }

    let modalBody = (
      <CardDeck className="justify-content-center single-card">
        {cellMembers}
      </CardDeck>
    );

    return (
      <React.Fragment>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header
            className="border-bottom-0 pb-0"
            closeButton
          ></Modal.Header>
          <Modal.Body className="pt-0">
            <h3 className="text-center">
              {" "}
              {this.props.cellName.charAt(0).toUpperCase() +
                this.props.cellName.slice(1)}{" "}
              Cell
            </h3>
            <div>{modalBody}</div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CellModal;

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

class ClubPage extends Component {
  constructor(props){
    super(props);
    var clubName = props.match.params.name;
    this.state = {
      clubName = this.props.match.params.name;
      clubData: {}
    };

    this.getClubData = this.getClubData.bind(this);
  }

  getClubData(){
    $.ajax({
      url:'/data/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getClubData();
  }

  render () {
    return (
      <React.Fragment>
        <Container>
          <div className='text-center'>Logo</div>
          <div className='text-center'>Club Name</div>
          <Row>
            <Col>
              <div>Images</div>
              <div>Training Details</div>
            </Col>
            <Col>
              <div>About Us</div>
              <div>Description</div>
              <div>Socials</div>
            </Col>
          </Row>
          <div>Events</div>
          <div>Event Card</div>
        </Container>
      </React.Fragment>
    );
  }
};

export default ClubPage;

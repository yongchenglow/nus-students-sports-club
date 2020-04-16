import React, { Component } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

class ClubPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      clubName: props.match.params.clubName.toLowerCase(),
      clubData: {},
      has_error: false
    };

    console.log(this.clubName);
    this.getClubData = this.getClubData.bind(this);
    this.getClubData();
  }

  getClubData(){
    $.ajax({
      url: process.env.REACT_APP_MEMBER_CLUB_FILE_PATH+this.state.clubName+'/'+this.state.clubName+'.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({clubData: this.formatClubData(data)});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        this.setState({ has_error: true });
      }.bind(this)
    });
  }

  // Parse and Sort of the club data
  formatClubData(data){
    var clubData;
    clubData = this.parseClubData(data);
    clubData = this.sortClubData(data);
    return clubData;
  }

  // Parse the Club Data by adding the file paths defined in the environment
  parseClubData(data){
    var clubData = data;
    var addFileString = process.env.REACT_APP_MEMBER_CLUB_FILE_PATH + this.state.clubName+'/images/';

    // Adjust Logo File Path
    clubData.club_logo_image_name = addFileString + clubData.club_logo_image_name;
    
    // Adjust Carousel Image File Path
    clubData.carousel_image_name.forEach(function(item,index){
      clubData.carousel_image_name[index] = addFileString + item;
    });

    // Adjust Events File Path
    clubData.events.forEach(function(item,index){
      item.event_image_name = addFileString + item.event_image_name;
    });

    return clubData;
  }

  // Sort the Club Events to be the latest event first
  sortClubData(data){
    var clubData = data;
    clubData.events.sort(function (a, b) {
      var date1 = Date.parse(a.event_date);
      var date2 = Date.parse(b.event_date);
      return date2 - date1;
    });

    return clubData;
  }

  render () {
    // Redirect to page not found if the member club does not exist
    if(this.state.has_error === true){
      return (
        <Redirect to='/notfound' />
      );
    }

    // Creates About Us
    let aboutUs = null;
    if(this.state.clubData.about_us !== undefined) {
      aboutUs = this.state.clubData.about_us.map((paragraph, i) => (
        <div className='paragraph' key={'paragraph'+i}>{paragraph}</div>
      ))
    }

    // Creates the Image Carousell for the Member Clubs
    let imageCarousel = null;
    if(this.state.clubData.carousel_image_name !== undefined) {
      imageCarousel = this.state.clubData.carousel_image_name.map((url, i) => (
        <Carousel.Item className='text-center' key={'image'+i}>
          <img className='img-fluid max-height-300' src={process.env.PUBLIC_URL + url} alt={this.state.clubData.club_name + ' picture '+ i}/>
        </Carousel.Item>
      ))
    }

    var trainingSessions = [];
    if(this.state.clubData.training_sessions !== undefined){
      var arrayLength = this.state.clubData.training_sessions.length;
      for (var i = 0; i < arrayLength; i++) {
        trainingSessions.push(
          <div className={i>0?'mt-2':null}>
            {
              this.state.clubData.training_sessions.length > 1?
              (<div className='event-title-small'>Session {i+1}</div>):
              null
            }
            <div>
              {this.state.clubData.training_sessions[i].day}
              {this.state.clubData.training_sessions[i].time !== ''?', '+this.state.clubData.training_sessions[i].time: null}
            </div>
            <div className='event-date-small'>
              {this.state.clubData.training_sessions[i].venue_link === ""?
                this.state.clubData.training_sessions[i].venue
              :
                (<a href={this.state.clubData.training_sessions[i].venue_link}>{this.state.clubData.training_sessions[i].venue}</a>)
              }
            </div>
          </div>
        )
      }
    }

    // Creates the Training Details and Sessions for the Member Clubs
    let trainingDetails = (
      <div className='event-block-small'>
        <div className='text-md-left text-center'>
        <img className='event-image-small' src={process.env.PUBLIC_URL + '/images/icons/calendar.svg'} alt='calendar' />
        </div>
        <div className='event-text-small'>
          <Row>
            <Col md='auto' className='text-center text-md-left'>
              {trainingSessions}
            </Col>
            {
              this.state.clubData.training_sessions_join_url === ""?
              null:
              (
                <Col className='text-md-right text-center'>
                  <Button className='btn-outline-sc-red' href={this.state.clubData.training_sessions_join_url}>Join Now!</Button>
                </Col>
              )
            } 
          </Row>
        </div>
      </div>
    );

    // Creates the Upcoming events
    let events = null;
    if(this.state.clubData.events !== undefined) {
      events = this.state.clubData.events.map((event, i) => (
        <div className='event-block-small' key={'event'+i}>
          <div className='text-md-left text-center'>
            <img className='event-image-medium' src={process.env.PUBLIC_URL + event.event_image_name} alt='' />
          </div>
          <div className='event-text-small'>
            <Row>
              <Col md='auto' className='text-center text-md-left'>
                <div className='event-title-small'>
                  {event.event_name}
                </div>
                <div className='event-date-small'>
                  Date: {event.event_date}
                </div>
              </Col>
              {
                Date.parse(event.event_date) > Date.now()?
                  (
                    <Col className='text-md-right text-center'>
                      <Button className='btn-outline-sc-red' href={process.env.PUBLIC_URL + event.event_link}>Join Now!</Button>
                    </Col>
                  )
                : null
              }
            </Row>
            <div className='mt-3 mt-md-0'>
              {event.event_description}
            </div>
          </div>
        </div>
      ))
    }

    // Creates the Social Icons for the member clubs
    var socials = [];
    if(this.state.clubData.facebook_url !== undefined && this.state.clubData.facebook_url !== "") {
      socials.push(
        <Button variant='outline-dark' className='social-club-button' href={this.state.clubData.facebook_url} key={'facebokLink'}>
          <FontAwesomeIcon icon={faFacebookF}/>
        </Button>
      );
    }

    if(this.state.clubData.instagram_url !== undefined && this.state.clubData.instagram_url !== "") {
      socials.push(
        <Button variant='outline-dark' className='social-club-button' style={{ fontSize: '1.8rem', padding: '0.15rem' }} href={this.state.clubData.instagram_url} key={'instagramLink'}>
          <FontAwesomeIcon icon={faInstagram}/>
        </Button>
      );
    }

    if(this.state.clubData.telegram_url !== undefined && this.state.clubData.telegram_url !== "") {
      socials.push(
        <Button variant='outline-dark' className='social-club-button' style={{ fontSize: '1.7rem', padding: '0.2rem' }} href={this.state.clubData.telegram_url} key={'telegramLink'}>
          <FontAwesomeIcon icon={faTelegramPlane}/>
        </Button>
      );
    }

    return (
      <React.Fragment>
        <Container className='section'>
          <div className='text-center'>
            <img className='club-page-logo' src={this.state.clubData.club_logo_image_name} alt={this.state.clubData.club_name + ' Logo'}/>
          </div>
          <div className='text-center'>
            <div className='cover-title'>{this.state.clubData.club_name}</div>
          </div>
          <Row className='mt-md-2'>
            <Col md={6}>
              <Carousel className='mb-3'>
                {imageCarousel}
              </Carousel>
              <div className='text-md-left text-center'>
                <span className='club-header'>Training Details</span>
              </div>
              <hr className='red-line' />
              {trainingDetails}
              <div className='text-md-left text-center'>
                <span className='club-header'>Events</span>
              </div>
              <hr className='red-line' />
              {events}
            </Col>
            <Col md={6}>
              <div className='text-md-left text-center'>
                <span className='club-header' >About Us</span>
              </div>
              <hr className='red-line' />
              {aboutUs}
              <div className='text-md-left text-center'>
                {socials}
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
};

export default ClubPage;

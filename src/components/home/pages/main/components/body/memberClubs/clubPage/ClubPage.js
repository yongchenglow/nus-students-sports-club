import React, { Component } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

class ClubPage extends Component {
  constructor(props){
    super(props);
    // var clubName = props.match.params.name;
    this.state = {
      clubName: props.match.params.clubName,
      clubData: {}
    };

    this.getClubData = this.getClubData.bind(this);
    this.getClubData();
  }

  getClubData(){
    $.ajax({
      url:'/data/'+this.state.clubName+'.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({clubData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  render () {
    let aboutUs = null;

    if(this.state.clubData.about_us !== undefined) {
      aboutUs = this.state.clubData.about_us.map((paragraph, i) => (
        <div className='paragraph' key={'paragraph'+i}>{paragraph}</div>
      ))
    }

    let imageCarousel = null;
    if(this.state.clubData.carousel_img_url !== undefined) {
      imageCarousel = this.state.clubData.carousel_img_url.map((url, i) => (
        <Carousel.Item key={'image'+i}>
          <img className='img-fluid' src={process.env.PUBLIC_URL + url} alt={this.state.clubData.club_name + ' picture '+ i}/>
        </Carousel.Item>
      ))
    }

    let trainingDetails = null;
    if(this.state.clubData.training_sessions !== undefined) {
      trainingDetails = (
        <div className='event-block-small'>
          <div className='text-md-left text-center'>
            <img className='event-image-small' src={process.env.PUBLIC_URL + this.state.clubData.club_img_url} alt='' />
          </div>
          <div className='event-text-small'>
            <Row>
              <Col md='auto' className='text-center text-md-left'>
                <div className='event-title-small'>
                  {this.state.clubData.training_sesions}
                </div>
                <div className='event-date-small'>
                  {this.state.clubData.training_venue}
                </div>
              </Col>
              <Col className='text-md-right text-center'>
                <Button className='btn-outline-sc-red'>Join Now!</Button>
              </Col>
            </Row>
          </div>
        </div>
      );
    }

    let upcomingEvents = null;
    if(this.state.clubData.upcoming_events !== undefined) {
      upcomingEvents = this.state.clubData.upcoming_events.map((event, i) => (
        <div className='event-block-small' key={'event'+i}>
          <div className='text-md-left text-center'>
            <img className='event-image-small' src={process.env.PUBLIC_URL + this.state.clubData.club_img_url} alt='' />
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
              <Col className='text-md-right text-center'>
                <Button className='btn-outline-sc-red' href={process.env.PUBLIC_URL + event.event_link}>Join Now!</Button>
              </Col>
            </Row>
            <div className='mt-3 mt-md-0'>
              {event.event_description}
            </div>
          </div>
        </div>
      ))
    }

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
            <img className='club-page-logo' src={this.state.clubData.club_img_url} alt={this.state.clubData.club_name + ' Logo'}/>
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
              <div className='event-block-small'>
                <div className='text-md-left text-center'>
                  <img className='event-image-small' src={process.env.PUBLIC_URL + '/images/icons/calendar.svg'} alt='' />
                </div>
                <div className='event-text-small'>
                  <Row>
                    <Col md='auto' className='text-center text-md-left'>
                      <div className='event-title-small'>
                        {this.state.clubData.training_sesions}
                      </div>
                      <div className='event-date-small'>
                        {this.state.clubData.training_venue}
                      </div>
                    </Col>
                    <Col className='text-md-right text-center'>
                      <Button className='btn-outline-sc-red'>Join Now!</Button>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className='text-md-left text-center'>
                <span className='club-header'>Upcoming Events</span>
              </div>
              <hr className='red-line' />
              {upcomingEvents}
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

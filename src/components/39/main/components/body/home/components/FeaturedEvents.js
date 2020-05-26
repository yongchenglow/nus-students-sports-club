import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';

import IFGClosingPoster from '../images/IFG_Closing_Ceremony_Poster.jpg';
import RunNUSPoster from '../images/RunNUS_Poster.jpg';
import SportsClubDayPoster from '../images/Sports_Club_Day_Poster.jpg';

import Carousel from 'nuka-carousel';

class FeaturedEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render () {
    var slidesToShow;
    var withoutControls;
    if(this.state.width >= 992){
      slidesToShow = 3;
    } else if (this.state.width >= 768){
      slidesToShow = 2;
    } else {
      slidesToShow = 1;
    }

    if(slidesToShow === 3){
      withoutControls = true;
    } else {
      withoutControls = false;
    }

    return (
      <Container className='section text-center'>
        <div className='section-heading'>Featured Events</div>
        <Carousel
          cellSpacing={20}
          slidesToShow={slidesToShow}
          autoplay={true}
          withoutControls={withoutControls}
          heightMode={'max'}
          wrapAround={true}
          initialSlideHeight={681}
          dragging={false}
          defaultControlsConfig={{
            nextButtonStyle:{display:'none'},
            prevButtonStyle:{display:'none'},
            pagingDotsContainerClassName:'slider-controls',
            pagingDotsClassName: 'paging-dot-button'
          }}
        >
          <Card className='featured-events'>
            <div className='embed-responsive embed-responsive-A4'>
              <Card.Img variant='top' className='embed-responsive-item' src={SportsClubDayPoster} alt='Sports Club Day Poster'/>
            </div>
            <Card.Body className='text-left'>
              <Card.Title>Sports Club Day</Card.Title>
              <Card.Text>
                Join us for a day of fun, find out the different recreational sports avialable in NUS and our upcoming evnts!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='featured-events'>
            <div className='embed-responsive embed-responsive-A4'>
              <Card.Img variant='top' className='embed-responsive-item' src={RunNUSPoster} alt='RunNUS Poster'/>
            </div>
            <Card.Body className='text-left'>
              <Card.Title>RunNUS 2019</Card.Title>
              <Card.Text>
                Take on a challenge and participate in NUS Annual Biggest Running event to raise awarness for Disability Support.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='featured-events'>
            <div className='embed-responsive embed-responsive-A4'>
              <Card.Img variant='top' className='embed-responsive-item' src={IFGClosingPoster} alt='IFG Closing Ceremony Poster'/>
            </div>
            <Card.Body className='text-left'>
              <Card.Title>IFG Closing Ceremony</Card.Title>
              <Card.Text>
                Come down to IFG Closing Ceremoney and support your faculty. Find out who will be the IFG Champions of 2019.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel>
      </Container>
    );
  }
};

export default FeaturedEvents;

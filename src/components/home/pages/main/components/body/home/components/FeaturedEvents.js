import React, { Component } from 'react';
import { Card, Container, CardDeck, Button } from 'react-bootstrap';

import RunNUS from '../images/RunNUSEarlyBird.jpeg';
import SunNUS from '../images/SunNUS2020.jpeg';
import Netball from '../images/Netball.jpeg';
import ProjectX from '../images/ProjectX.jpeg';

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
    const script = document.createElement("script");

    script.src = "https://static.addtoany.com/menu/page.js";
    script.async = true;

    document.body.appendChild(script);
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
    var totalSlides = 4;
    var slidesToShow;
    var withoutControls;
    var autoplay = false;
    if(this.state.width >= 992){
      slidesToShow = 3;
    } else if (this.state.width >= 768){
      slidesToShow = 2;
    } else {
      slidesToShow = 1;
    }

    if(totalSlides > slidesToShow){
      withoutControls = false;
      autoplay = true;
    } else {
      withoutControls = true;
      autoplay = true;
    }

    return (
      <Container className='section text-center'>
        <div className='section-heading'>Featured Events</div>
        <Carousel
          cellSpacing={20}
          slidesToShow={slidesToShow}
          autoplay={autoplay}
          withoutControls={withoutControls}
          heightMode={'max'}
          wrapAround={true}
          dragging={true}
          defaultControlsConfig={{
            nextButtonStyle:{display:'none'},
            prevButtonStyle:{display:'none'},
            pagingDotsContainerClassName:'slider-controls',
            pagingDotsClassName: 'paging-dot-button'
          }}
        >
        {/* <CardDeck className='justify-content-center'> */}
          <Card className='featured-events'>
            <Card.Img variant='top' src={ProjectX} alt='Virtual Series'/>
            <Card.Body className='text-left'>
              <Card.Title>Sports Club's Virtual Series</Card.Title>
              <Card.Text>
                <div>From 29th June to 10th August, participate in NUS first ever virtual aquathlon and duathlon with both novice and advanced categories. Check out the collectible medals, shirts and race packs when you complete the race!</div>
              </Card.Text>
              {/* <Card.Text className='mb-0'>Share this:</Card.Text>
              <div class="a2a_kit a2a_kit_size_32 a2a_default_style mb-3" data-a2a-url="http://www.bit.ly/NUSSportsCamp2020" data-a2a-title="NUS Sports Camp Sign Up Link"> */}
                {/* <a class="a2a_dd" href="https://www.addtoany.com/share"></a> */}
                {/* <a class="a2a_button_facebook"></a>
                <a class="a2a_button_whatsapp"></a>
                <a class="a2a_button_telegram"></a>
                <a class="a2a_button_copy_link"></a>
              </div> */}
              <Button className='btn btn-block btn-success' href='http://virtualseries.nussportsclub.org' target='_blank'>Find Out More</Button>
            </Card.Body>
          </Card>
          <Card className='featured-events'>
            <Card.Img variant='top' src={RunNUS} alt='RunNUS Early Bird'/>
            <Card.Body className='text-left'>
              <Card.Title>RunNUS 2020</Card.Title>
              <Card.Text>
                <div>
                  Save up to 11.5% off your registration fees in NUS first ever Virtual Run to promote and support people with disabilities and special needs with Disabled People's Association(DPA) and Singapore Disability Sports Council(SDSC).
                </div>
              </Card.Text>
              <Button className='btn btn-block btn-success' href='https://www.nussportsclub.org/runnus' target='_blank'>Join Now</Button>
            </Card.Body>
          </Card>
          <Card className='featured-events'>
            <Card.Img variant='top' src={Netball} alt='Netball'/>
            <Card.Body className='text-left'>
              <Card.Title>InterNetballuxion 2020</Card.Title>
              <Card.Text>
                <div >
                  Introducing NRC's first ever ONLINE Netball event from 22 June to 11 July that you can participate from home.
                </div>
                <div>
                  There are $600 worth of grabfood vouchers and Netballuxion 2021 discounts up for grabs!💰
                </div>
              </Card.Text>
              <Button className='btn btn-block btn-success' href='https://www.instagram.com/nus.nrc/' target='_blank'>Join Now</Button>
            </Card.Body>
          </Card>
          <Card className='featured-events'>
            <Card.Img variant='top' src={SunNUS} alt='SunNUS SUNBreaker'/>
            <Card.Body className='text-left'>
              <Card.Title>SunNUS SUNBreaker</Card.Title>
              <Card.Text>
                <div>
                  Complete 1 of the challenges to receive an exclusive SunNUS medal and stand a chance to win $20 Grabfood vouchers
                </div> 
                  <div>1) Create a Tiktok that represents SunNUS</div>
                  <div>2) Do the SUNbreaker HIIT workout</div>
                  <div>3) Juggle a paper roll till it falls</div>
              </Card.Text>
              <Button className='btn btn-block btn-success' href='http://www.instagram.com/_u/sunnus_official/?hl=en' target='_blank'>Join Now</Button>
            </Card.Body>
          </Card>
        </Carousel>
        {/* </CardDeck> */}
      </Container>
    );
  }
};

export default FeaturedEvents;

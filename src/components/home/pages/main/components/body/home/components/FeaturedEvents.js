import React, { Component } from 'react';
import { Card, Container, CardDeck, Button } from 'react-bootstrap';

import SportsCampPoster from '../images/SportsCamp2020.jpeg';

// import Carousel from 'nuka-carousel';

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
    // var slidesToShow;
    // if(this.state.width >= 992){
    //   slidesToShow = 3;
    // } else if (this.state.width >= 768){
    //   slidesToShow = 2;
    // } else {
    //   slidesToShow = 1;
    // }

    // if(slidesToShow === 3){
    //   withoutControls = true;
    // } else {
    //   withoutControls = false;
    // }

    return (
      <Container className='section text-center'>
        <div className='section-heading'>Featured Events</div>
        {/* <Carousel
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
        > */}
        <CardDeck className='justify-content-center'>
          <Card className='featured-events'>
            <Card.Img variant='top' src={SportsCampPoster} alt='NUS Sports Camp Poster'/>
            <Card.Body className='text-left'>
              <Card.Title>NUS Sports Camp 2020</Card.Title>
              <Card.Text>
                <div>Gear up for NUS Sports Camp from 29th to 30th June. We will be bringing you an orientation programme like no other!</div>
              </Card.Text>
              <Card.Text className='mb-0'>Share this:</Card.Text>
              <div class="a2a_kit a2a_kit_size_32 a2a_default_style mb-3" data-a2a-url="http://www.bit.ly/NUSSportsCamp2020" data-a2a-title="NUS Sports Camp Sign Up Link">
                {/* <a class="a2a_dd" href="https://www.addtoany.com/share"></a> */}
                <a class="a2a_button_facebook"></a>
                <a class="a2a_button_whatsapp"></a>
                <a class="a2a_button_telegram"></a>
                <a class="a2a_button_copy_link"></a>
              </div>
              <Button className='btn btn-block btn-success' href='http://www.bit.ly/NUSSportsCamp2020' target='_blank'>Sign Up Now</Button>
            </Card.Body>
          </Card>
        </CardDeck>
        {/* </Carousel> */}
      </Container>
    );
  }
};

export default FeaturedEvents;

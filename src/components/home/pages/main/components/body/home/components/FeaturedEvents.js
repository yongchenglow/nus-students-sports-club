import React, { useState, useEffect } from "react";
import { Card, Container, CardDeck, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Carousel from "nuka-carousel";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function FeaturedEvents() {
  const [featured, setFeatured] = useState();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [contentSize, setContentSize] = useState();

  const [hasError, setError] = useState(false);

  const getFeatured = () => {
    fetch(process.env.REACT_APP_41_FEATURED_DATA_PATH, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.featured);
        setContentSize(myJson.featured.length);
        setFeatured(generateFeatured(myJson.featured));
      })
      .catch(function () {
        setError(true);
      });
  };

  useEffect(() => {
    getFeatured();
    // const script = document.createElement("script");
    // script.src = "https://static.addtoany.com/menu/page.js";
    // script.async = true;
    // document.body.appendChild(script);
    console.log(window.width);
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateFeatured = (featured) => {
    return featured.map((event) => {
      let cardImage = null;
      if (event.image_link === "") {
        cardImage = (
          <Card.Img variant="top" src={event.image} alt={event.name} />
        );
      } else {
        cardImage = (
          <a href={event.image_link} target="_blank" rel="noopener noreferrer">
            <Card.Img
              variant="top"
              src={process.env.REACT_APP_41_FEATURED_IMAGE_PATH + event.image}
              alt={event.name}
            />
          </a>
        );
      }
      return (
        <Card className="featured-events">
          {cardImage}
          <Card.Body className="text-left">
            <Card.Title className="text-center">{event.name}</Card.Title>
            <Card.Text>
              <div className="text-center">
                <h6 className="text-danger">SunNUS is Postponed!</h6>
                <a
                  href={event.message_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {event.message}
                </a>
              </div>
              <div className="mb-3">
                School is out, and SunNUS is in! Guess what, REGISTRATION IS
                OPEN! Ready for an awesome summer? Grab your friends and take
                part in our Team Sports Series (TSS) in campus! 🏃🏻🏐🏈🥏🤾🏼‍♂️⛹🏼‍♀️ or
                take part in our NEW SEGMENT, Sentosa Outdoor Adventure Race
                (SOAR) and win attractive prizes! 🔍📱🌿☀️ What are you waiting
                for? Click on the link and sign up now!😆
              </div>
            </Card.Text>
            <Button
              className="btn btn-block btn-success"
              href={event.button_link}
              target="_blank"
            >
              {event.button_text}
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  let deck = null;
  var slidesToShow;
  var withoutControls;
  var autoplay = false;
  if (windowDimensions.width >= 992) {
    slidesToShow = 3;
  } else if (windowDimensions.width >= 768) {
    slidesToShow = 2;
  } else {
    slidesToShow = 1;
  }

  if (slidesToShow > contentSize) {
    slidesToShow = contentSize;
  }

  if (contentSize > slidesToShow) {
    withoutControls = false;
    autoplay = true;
  } else {
    withoutControls = true;
    autoplay = true;
  }

  if (contentSize === 1) {
    deck = <CardDeck className="justify-content-center">{featured}</CardDeck>;
  } else if (contentSize > 1) {
    deck = (
      <Carousel
        cellSpacing={20}
        slidesToShow={slidesToShow}
        autoplay={autoplay}
        withoutControls={withoutControls}
        heightMode={"max"}
        wrapAround={true}
        dragging={true}
        defaultControlsConfig={{
          nextButtonStyle: { display: "none" },
          prevButtonStyle: { display: "none" },
          pagingDotsContainerClassName: "slider-controls",
          pagingDotsClassName: "paging-dot-button",
        }}
      >
        {featured}
      </Carousel>
    );
  }

  let container = (
    <Container className="section text-center">
      <div className="section-heading">Featured Events</div>
      {deck}
    </Container>
  );

  if (contentSize === 0) {
    container = null;
  }

  if (hasError === true) {
    return <Redirect to="/notfound" />;
  }

  return container;
}
export default FeaturedEvents;

//   render() {

//     return (
//       <Container className="section text-center">
//         <div className="section-heading">Featured Events</div>
//         {/* <Carousel
//           cellSpacing={20}
//           slidesToShow={slidesToShow}
//           autoplay={autoplay}
//           withoutControls={withoutControls}
//           heightMode={'max'}
//           wrapAround={true}
//           dragging={true}
//           defaultControlsConfig={{
//             nextButtonStyle:{display:'none'},
//             prevButtonStyle:{display:'none'},
//             pagingDotsContainerClassName:'slider-controls',
//             pagingDotsClassName: 'paging-dot-button'
//           }}
//         > */}
//         <CardDeck className="justify-content-center">
//           <Card className="featured-events">
//             <Card.Img variant="top" src={SunNUS} alt="SunNUS 2021" />
//             <Card.Body className="text-left">
//               <Card.Title className="text-center">SunNUS 2021</Card.Title>
//               <Card.Text>
//                 <div className="text-center">
//                   <h6 className="text-danger">SunNUS is Postponed!</h6>
//                   <a href="https://www.instagram.com/sunnus_official/?hl=en">
//                     Follow SunNUS Instagram for the latest updates
//                   </a>
//                 </div>
//                 <div className="mb-3">
//                   School is out, and SunNUS is in! Guess what, REGISTRATION IS
//                   OPEN! Ready for an awesome summer? Grab your friends and take
//                   part in our Team Sports Series (TSS) in campus! 🏃🏻🏐🏈🥏🤾🏼‍♂️⛹🏼‍♀️
//                   or take part in our NEW SEGMENT, Sentosa Outdoor Adventure
//                   Race (SOAR) and win attractive prizes! 🔍📱🌿☀️ What are you
//                   waiting for? Click on the link and sign up now!😆
//                 </div>
//               </Card.Text>
//               <Button
//                 className="btn btn-block btn-success"
//                 href="http://bit.ly/ilovesunnus"
//                 target="_blank"
//               >
//                 Join Now
//               </Button>
//             </Card.Body>
//           </Card>
//           {/* <Card className="featured-events">
//             <Card.Img variant="top" src={NUSBiathlon} alt="NUS Biathlon 2021" />
//             <Card.Body className="text-left">
//               <Card.Title>NUS Biathlon 2021</Card.Title>
//               <Card.Text>
//                 <div className="mb-3">
//                   Your long awaited sign ups for NUS Biathlon 2021 are open now
//                   with 3 main categories to choose from! Want to push yourself
//                   to your limits? Sprint Individual is just for you. New to NUS
//                   Biathlon? Fret not, the Novice Individual category does not
//                   discriminate. Lastly, for the shy ones, grab a companion along
//                   for our Power Duo Race. HURRY! Sign up for our races now !!
//                 </div>
//               </Card.Text>
//               <Button
//                 className="btn btn-block btn-success"
//                 href="http://bit.ly/biathlon2021registration"
//                 target="_blank"
//               >
//                 Join Now
//               </Button>
//             </Card.Body>
//           </Card> */}
//           {/* <Card className='featured-events'>
//             <Card.Img variant='top' src={StudentLifeFair} alt='Student Life Fair'/>
//             <Card.Body className='text-left'>
//               <Card.Title>Student Life Fair</Card.Title>
//               <Card.Text>
//                 <div className='mb-3'>
//                   Join our Zoom session on 11th Aug from 11am - 8pm to find out all about Sports Club and our Member Clubs.
//                 </div>
//                 <div className='mb-4'>
//                   Live demonstrations and attractive prizes up for grabs! See you there!
//                 </div>
//               </Card.Text>
//               <Button className='btn btn-block btn-success' href='https://bit.ly/SCSLF' target='_blank'>Join Now</Button>
//             </Card.Body>
//           </Card> */}
//           {/* <Card className='featured-events'>
//             <Card.Img variant='top' src={WelcomeTea} alt='NUS Students Sports Club Welcome Tea'/>
//             <Card.Body className='text-left'>
//               <Card.Title>Sports Club Welcome Tea</Card.Title>
//               <Card.Text>
//                 <div>
//                   Bored? Lonely? Lost with no direction?
//                 </div>
//                 <div>
//                   At Sports Club, there's never a dull day as you take on new adventures with like-minded friends! Learn new skills, achieve great things, and plan amazing projects that will bring smiles to everyone.
//                 </div>
//               </Card.Text>
//               <Button className='btn btn-block btn-success' href='https://bit.ly/scwelcometea' target='_blank'>Join Now</Button>
//             </Card.Body>
//           </Card> */}
//           {/* <Card className='featured-events'>
//             <Card.Img variant='top' src={ProjectX} alt='Virtual Series'/>
//             <Card.Body className='text-left'>
//               <Card.Title>Sports Club's Virtual Series</Card.Title>
//               <Card.Text>
//                 <div>From 29th June to 10th August, participate in NUS first ever virtual aquathlon and duathlon with both novice and advanced categories. Check out the collectible medals, shirts and race packs when you complete the race!</div>
//               </Card.Text>
//               <Card.Text className='mb-0'>Share this:</Card.Text>
//               <div class="a2a_kit a2a_kit_size_32 a2a_default_style mb-3" data-a2a-url="http://www.bit.ly/NUSSportsCamp2020" data-a2a-title="NUS Sports Camp Sign Up Link">
//                 <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
//                 <a class="a2a_button_facebook"></a>
//                 <a class="a2a_button_whatsapp"></a>
//                 <a class="a2a_button_telegram"></a>
//                 <a class="a2a_button_copy_link"></a>
//               </div>
//               <Button className='btn btn-block btn-success' href='http://virtualseries.nussportsclub.org' target='_blank'>Find Out More</Button>
//             </Card.Body>
//           </Card> */}
//           {/* <Card className='featured-events'>
//             <Card.Img variant='top' src={RunNUS} alt='RunNUS Early Bird'/>
//             <Card.Body className='text-left'>
//               <Card.Title>RunNUS 2020</Card.Title>
//               <Card.Text>
//                 <div>
//                   Save up to 11.5% off your registration fees in NUS first ever Virtual Run to promote and support people with disabilities and special needs with Disabled People's Association(DPA) and Singapore Disability Sports Council(SDSC).
//                 </div>
//               </Card.Text>
//               <Button className='btn btn-block btn-success' href='https://www.nussportsclub.org/runnus' target='_blank'>Join Now</Button>
//             </Card.Body>
//           </Card>
//           <Card className='featured-events'>
//             <Card.Img variant='top' src={Election} alt='Election'/>
//             <Card.Body className='text-left'>
//               <Card.Title>41st MC Elections</Card.Title>
//               <Card.Text>
//                 <div>
//                   Nominations for Sports Club 41st Management Committee will be open from 15 to 22 August! Want to learn more about how you can contribute to the recreational sporting scene in NUS and organise major sporting events?
//                 </div>
//               </Card.Text>
//               <Button className='btn btn-block btn-success' href='https://www.nussportsclub.org/elections' target='_blank'>Find Out More</Button>
//             </Card.Body>
//           </Card> */}
//           {/* </Carousel> */}
//         </CardDeck>
//       </Container>
//     );
//   }
// }

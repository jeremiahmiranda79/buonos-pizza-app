import React from 'react';
import Information from '../components/layout/Information';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../css/video_player.css';
import '../css/carousel.css';

const Home = () => {
  return (
    <div style={{margin: '100px 10px 10px 10px'}}>
      <h1 rel="preload" style={{textAlign: 'center'}}>Welcome to Buono's Pizza Williams Field</h1>

      <Information/>

      {/* <div style={{textAlign: 'center', marginBottom: '0px'}}>
        <h2 style={{marginBottom: '15px'}}>Try our new online ordering option for a conveinent experience</h2>
        <p style={{textAlign: 'center'}}><a href="/delivery" className="active btn btn-primary" >View our online ordering here!</a></p>
      </div>   */}















      {/* <link href="https://awards.infcdn.net/2026/circle_v2.css" rel="stylesheet"/>
      <div id="circle-r-ribbon" onclick="if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.r-ribbon_title').href);return 0;}" class="arc-top_nostars rg-award-lang-en_US" style="cursor: pointer; overflow: hidden; position: relative; display: flex; flex-direction: column; padding: 0; max-width: 174px; min-width: 174px; height: 135px; font: 400 10px/normal 'Akrobat Bold', 'Helvetica Neue', 'Arial', sans-serif; align-items: center; text-align: center; color: #000 !important; text-shadow: none; background: url(https://awards.infcdn.net/img/bg_no_stars.svg) no-repeat; box-sizing: border-box;">

      <div class="r-ribbon_ahead r-ribbon_2str" style="transform: rotate(-13deg); position: absolute; z-index: 4; top: -16px; left: 3px; letter-spacing: 0.2px; padding: 0;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160px" height="160px" viewBox="0 0 160 160" style="width: 160px; height: 160px; margin-top: 0;"> <defs> <path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0"></path> </defs> <text class="r-ribbon_ahead-heading" fill="#000" text-anchor="middle" style="font-size: 9px !important; font-family: 'Akrobat Bold', 'Helvetica Neue', 'Arial', sans-serif !important; line-height: 1; text-transform: uppercase !important; alignment-baseline: auto;"> <textPath startOffset="50%" xlink:href="#heading-arc">A top 10 best pizza restaurant in</textPath> </text> </svg> 
      </div>

      <div class="r-ribbon_ahead r-ribbon_2str2" style="transform: rotate(-13deg); position: absolute; z-index: 4; top: -2px; left: 7px; width: auto !important; letter-spacing: 0.2px; padding: 0;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160px" height="160px" viewBox="0 0 160 160" style="width: 160px; height: 160px; margin-top: 0;"> <defs> <path id="heading-arc-2" d="M 30 80 a 50 50 0 1 1 100 0"></path> </defs> <text class="r-ribbon_ahead-heading" fill="#000" text-anchor="middle" style="font-size: 9px !important; font-family: 'Akrobat Bold', 'Helvetica Neue', 'Arial', sans-serif !important; line-height: 1; text-transform: uppercase !important; alignment-baseline: auto;"> <textPath startOffset="50%" xlink:href="#heading-arc-2">Gilbert</textPath> </text> </svg> 
      </div> 
      
      <p class="r-ribbon_year" style="color: #000; width: 140px; font: 22px/normal 'Akrobat Black', 'Helvetica Neue', 'Arial', sans-serif !important; font-style: italic !important; transform: rotate(-12deg); position: absolute; top: 41px !important; left: 12px !important; letter-spacing: 0.6px; text-align: center !important; padding: 0 !important; margin: 0 !important;">2026</p> <a href="https://restaurantguru.com/Buonos-Pizza-Gilbert" class="r-ribbon_title" target="_blank" style="text-transform: uppercase; color: #fff !important; width: 140px; font-size: 16px !important; line-height: normal !important; font-family: 'Akrobat Bold', 'Helvetica Neue', 'Arial', sans-serif !important; font-style: italic !important; transform: rotate(-12deg); position: absolute; z-index: 5; top: 72px; left: 12px; letter-spacing: 0.4px !important; text-align: center !important; white-space: normal; padding: 0 !important; margin: 0 !important; text-decoration: none !important; border-bottom: none; box-shadow: none; ">Buono’s Pizza</a> 
      
      <div class="r-ribbon_ahead r-ribbon_ahead-bottom" style="top: auto; bottom: -14px; left: 26px; letter-spacing: 0.3px; transform: rotate(-13deg); height: 100% !important; max-width: 100%; padding: 0; position: absolute !important; z-index: 4;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120px" height="120px" viewBox="0 0 120 120" style="width: 120px; height: 120px; margin-top: 0;"> <defs> <path id="subheading-arc" d="M 12 60 a 48 48 0 0 0 96 0"></path> </defs> <text class="r-ribbon_ahead-subh" fill="#000" text-anchor="middle" style="font: 12px/1 'Akrobat Regular', 'Helvetica Neue', 'Arial', sans-serif !important; text-transform: uppercase; letter-spacing: normal;"> <textPath startOffset="50%" xlink:href="#subheading-arc"><a href="https://restaurantguru.com" target="_blank" style="font: 12px/1 'Akrobat Regular', 'Helvetica Neue', 'Arial', sans-serif !important; text-transform: uppercase; letter-spacing: 0.3px; text-decoration: none !important; border-bottom: none; box-shadow: none; padding: 0; margin: 0;">Restaurant Guru</a></textPath> </text> </svg> </div></div> */}











      <h2 style={{textAlign: 'center'}}>How we do it</h2>
      <center>
        <div className="video-container">
          <iframe 
            className='responsive-iframe'
            src="https://www.youtube.com/embed/yaQVJVlKhPQ?si=V13N0b1yJtQaKEo9&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=yaQVJVlKhPQ" 
            title="YouTube video player" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen 
          />
        </div>
      </center>
      <h2 style={{textAlign: 'center'}}>Our Promise</h2> 
      <p className='x' style={{textAlign: 'center'}}>Our classic pizza's are so fresh, we have to slap them!</p>
      <p style={{textAlign: 'center'}}><a href="/menu" className="active btn btn-primary">View our full menu here!</a></p>
      <center>
        <Carousel>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/store.webp"
                alt="store front"
              />
            </div> 
            <Carousel.Caption><h3>Buonos Pizza Gilbert</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/slice-pies.webp"
                alt="store front"
              />
            </div> 
            <Carousel.Caption><h3>Daily Slice Specials</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/dough.webp"
                alt="house made dough balls"
              />
            </div>
            <Carousel.Caption><h3>Fresh dough made in house daily</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/legend.webp"
                alt="experienced chefs in action"
              />
            </div>
            <Carousel.Caption><h3>Experienced Chefs</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/new-york.webp"
                alt="New York style"
              />
            </div>
            <Carousel.Caption><h3>New York Style</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/vintage.webp"
                alt="vintage 1989"
              />
            </div>
            <Carousel.Caption><h3>Quality Since 1989</h3></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </center>

      <div style={{margin: '10px 25px 10px 25px'}}>
        <h2 style={{textAlign: 'center'}}>Check Out Our Catering</h2>
        <p style={{textAlign: 'center'}}>
          <img 
            rel="preload"
            fetchPriority="high"
            src="/images/specials/catering.jpg" 
            alt="catering" 
            className="d-block w-100"
          />
        </p>
        <p className='x' style={{textAlign: 'center', marginBottom: '0px', fontWeight: 'bold'}}>*Images from left to right*</p>
        <p className='x' style={{textAlign: 'center', marginBottom: '0px'}}>Antipasto Salad, Chicken Broccoli Fettucini Alfredo, Meatballs Side Dish, & Lasagna Dinner</p>
        <p className='x' style={{textAlign: 'center', marginBottom: '0px', fontWeight: 'bold'}}>Catering for all events</p>
        <p className='y' style={{textAlign: 'center', marginBottom: '0px'}}>Let us cater your upcoming event the Buonos way. </p>
        <p style={{textAlign: 'center', marginTop: '20px'}}><a href="/catering" className="active btn btn-primary">View our catering options here!</a></p>
      </div>

      {/* <h2 style={{textAlign: 'center', marginTop: '10px'}}>Buonos Specialties</h2>
      <p className='x' style={{textAlign: 'center'}}>We refuse to compromise. We use the freshest and finest ingredients. Our pizza dough, pizza sauce, and pasta sauce are made fresh daily in house.</p> 
      <p style={{textAlign: 'center'}}><a href="/specials" className="active btn btn-primary" >View our specialty options here!</a></p>  
      <h2 style={{textAlign: 'center'}}>Loyalty Bonus</h2>
      <p className='x' style={{textAlign: 'center'}}>With any purchase of a large, or extra-large pizza pie, you will receive a magnet. Collect 8 magnets and get a large 1 topping pizza pie for FREE!</p>
      <p className='x' style={{fontWeight: 'bold', textAlign: 'center'}}>*Valid only on dine in or in person take out orders*</p>
      <p className='y' style={{fontWeight: 'bold', textAlign: 'center'}}>*Magnets are not exchangeable between store locations*</p>  */}
      
      {/* <Container>
        <center>
          <Row>
            <Col xs={6} md={6}>
              <Image 
                src="/images/magnets/magnet-full.webp"
                alt='full 8 piece magnet'
                width="80%"
                fluid
                thumbnail 
              />
            </Col>
            <Col xs={6} md={6}>
              <Image 
                src="/images/magnets/magnet-slice.webp"
                alt='single slice of an 8 piece magnet set'
                width="80%"
                fluid
                thumbnail 
              />
            </Col>
          </Row>
        </center>
      </Container> */}

      <h2 style={{textAlign: 'center', marginTop: '10px'}}>Take Out Or Dine In</h2>
      <p className='x' style={{textAlign: 'center'}}>Come see us in person! To take full advantage of our quality the best option is to dine in, or reserve an in store pick up order. We love our customers so feel free to visit during our normal business hours.</p>
      <p style={{textAlign: 'center'}}><a href="/specials" className="active btn btn-primary">View our menu options here!</a></p>
      <h2 style={{textAlign: 'center'}}>Delivery Service thru 3rd party</h2>
      <p className='x' style={{textAlign: 'center'}}>We use 3rd party delivery services.</p>
      <p style={{textAlign: 'center'}}><a href="/delivery" className="active btn btn-primary">View our delivery options here!</a></p>
    </div>
  );
};

export default Home;
import React from 'react';
import Information from '../components/layout/Information';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/video_player.css';
import '../css/rotating.css';
import '../css/gallery-flip-animation.css';

import '../css/carousel.css';

// import '../css/magic-card.css';

// https://www.geeksforgeeks.org/react-bootstrap-carousel-component/
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className='page-color'>
      <br /><br /><br /><br /> 

      <center>
        <h1>Welcome to Buono's Pizza Williams Field</h1>
      </center>

      <Information />

      <center>
        <h2>How we do it</h2>
      </center>

      <div className="VideoPlayer">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/yaQVJVlKhPQ?si=V13N0b1yJtQaKEo9&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=yaQVJVlKhPQ" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen 
        />
      </div>

      <center>
        <h2>Our Promise</h2>
      </center>  
   
      <center>
        <p className='x'>Our classic pizza's are so fresh, we have to slap them!</p>
      </center>

      <center>
        <a href="/menu-1" className="active btn btn-primary" >
          View our full menu here!
        </a>
      </center>

      <br />

      <center>
        <Carousel>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                className="d-block w-100"
                src="/images/photos/home-buonos-place-2.webp"
                alt="Store front image"
              />
            </div>
            
            <Carousel.Caption>
              <h3>Buonos Pizza Gilbert</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className='wrapper'>
              <img
                className="d-block w-100"
                src="/images/photos/home-pizza-dough.webp"
                alt="house made dough balls"
              />
            </div>

            <Carousel.Caption>
              <h3>Fresh dough made in house daily</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className='wrapper'>
              <img
                className="d-block w-100"
                src="/images/photos/home-legend-2.webp"
                alt="Our experienced chefs in action"
              />
            </div>

            <Carousel.Caption>
              <h3>Experienced Chefs</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className='wrapper'>
              <img
                className="d-block w-100"
                src="/images/photos/new-york-style.webp"
                alt="New York City style"
              />
            </div>

            <Carousel.Caption>
              <h3>New York Style</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className='wrapper'>
              <img
                className="d-block w-100"
                src="/images/photos/buonos-old-3.webp"
                alt="Vintage photo from 1989"
              />
            </div>

            <Carousel.Caption>
              <h3>Quality Since 1989</h3>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </center>

      <br />

      <center>
        <h2>Buonos Specialties</h2>
      </center>  
    
      <center>
        <p className='x'>We refuse to compromise. We use the freshest and finest ingredients. Our pizza dough, pizza sauce, and pasta sauce are made fresh daily in house.</p>
      </center>  
    
      <center>
        <a href="/specials" className="active btn btn-primary" >View our specialty options here!</a>
      </center>

      <br />

      {/* <div className="gallery-container">
        <div className="box">
          <div style={{v: 1}}>
            <img 
              src="/images/merrry-go-round/calzone.webp">
            </img>
              <h3>Calzone</h3>
          </div>

          <div style={{v: 2}}>
            <img 
              src="/images/merrry-go-round/margherita.webp"
              alt="Margherita Pizza" 
            />
            <h3>Pizza</h3>
          </div>

          <div style={{v: 3}}>
            <img 
              src="/images/merrry-go-round/antipasto.webp">
            </img>
              <h3>Salad</h3>
          </div>

          <div style={{v: 4}}>
            <img
              src="images/merrry-go-round/lemoncello.webp">
            </img>
              <h3>Dessert</h3>
          </div>

          <div style={{v: 5}}>
            <img 
              src="images/merrry-go-round/stromboli.webp">
            </img>
              <h3>Stromboli</h3>
          </div>

          <div style={{v: 6}}>
            <img 
              src="images/merrry-go-round/wings.webp">
            </img>
              <h3>Wings</h3>
          </div>

          <div style={{v: 7}}>
            <img 
              src="images/merrry-go-round/philly-steak.webp">
            </img>
              <h3>Subs</h3>
          </div>

          <div style={{v: 8}}>
            <img 
              src="images/merrry-go-round/sicilian.webp">
            </img>
              <h3>Sicilian</h3>
          </div>
        </div>
      </div> */}

      <center>
        <h2>Loyalty Bonus</h2>
      </center>  

      <center>
        <p className='x'>With any purchase of a large, or extra-large pizza pie, you will receive a magnet. Collect 8 magnets and get a large 1 topping pizza pie for FREE!</p>
        <p className='x' style={{fontWeight: 'bold'}}>*Valid only on dine in or in person take out orders*</p>
      </center>  

      {/* <section label="Loyalty Card">
        <div class="body">
          <div class="magic-card-container">
            <div class="magic-card-1">
              <div class="magic-card-item"></div>
            </div> 

            <div class="magic-card-2">
              <div class="magic-card-item"></div>
            </div>
          </div>
        </div>
      </section> */}

      <center>
        <h2>Take Out Or Dine In</h2>
      </center>  

      <center>
        <p className='x'>Come see us in person! To take full advantage of our quality the best option is to dine in, or reserve an in store pick up order. We love our customers so feel free to visit during our normal business hours.</p>
      </center>  

      <center>
        <a href="/specials" className="active btn btn-primary" >View our menu options here!</a>
      </center>

      <br />

      <center>
        <h2>Delivery Service thru 3rd party</h2>
      </center>  

      <center>
        <p className='x'>We use 3rd party delivery services.</p>
        {/* <p className='x' style={{fontWeight: 'bold'}}>*Please click your favorite delivery app. Our favorite is Slice*</p> */}
      </center>  

      <center>
        <a href="/delivery" className="active btn btn-primary" >View our delivery options here!</a>
      </center>

      <br />

      {/* <center>
        <p className='x' style={{fontWeight: "bold"}}>PLEASE NOTE: Buono's cannot guarantee the warmth or quality of food delivered by any of the 3rd party delivery services. We make ALL of our food to order and have no control over time of pick up or delivery quality. We make every effort to ensure we provide the best quality food.</p>

        <p className='y' style={{fontWeight: "bold"}}>To ensure your food is top notch we encourage our customers to dine in or do direct pick up.</p>

        <hr />

        <p className='y' style={{fontWeight: "bold"}}>THANK YOU KINDLY FOR YOUR UNDERSTANDING! <br /> BUONO'S MANAGEMENT</p>
      </center> */}

    </div>
  );
};

export default Home;
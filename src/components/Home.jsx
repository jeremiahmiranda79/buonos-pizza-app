import React from 'react';
import Information from '../components/layout/Information';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import '../css/video_player.css';
import '../css/home.css';

const Home = () => {
  return (
    <div className='HomePage'>
      <br /><br /><br /><br /> 

      <div className="Title">
        <center>
          <h1>Welcome to Buono's Pizza Williams Field</h1>
        </center>
      </div>

      <Information />

      <div className="Title">
        <center>
          <h2>How we do it</h2>
        </center>
      </div>
      
      <div class="VideoPlayer">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yaQVJVlKhPQ?si=V13N0b1yJtQaKEo9&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=yaQVJVlKhPQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div class="Title">
        <center>
          <h2>Our Promise</h2>
        </center>  
      </div>

      <center>
        <h4>Our classic pizza's are so fresh, we have to slap them!</h4>
      </center>

      <center>
        <a href="/menu-1" className="active btn btn-primary" >
          View our full menu here!
        </a>
      </center>

      <br />

      <div class="Title">
        <center>
        <h2>Buonos Specialties</h2>
        </center>  
      </div>

      <center>
        <h4>We refuse to compromise. We use the freshest and finest ingredients. Our pizza dough, pizza sauce, and pasta sauce are made fresh daily in house.</h4>
      </center>  
    
      <center>
        <a href="/specials" class="active btn btn-primary" >View our specialty options here!</a>
      </center>

      <br />

      <div class="Title">
        <center>
          <h2>Loyalty Bonus</h2>
        </center>  
      </div>

      <center>
        <h4>With any purchase of a large, or extra-large pizza pie, you will receive a magnet. Collect 8 magnets and get a large 1 topping pizza pie for FREE!</h4>
        <h6>*Valid only on dine in or in person take out orders*</h6>
      </center>  

      {/* <center>
        <a href="/specials" class="active btn btn-primary" >See the about us page!</a>
      </center> */}

      {/* <br /> */}

      <div class="Title">
        <center>
        <h2>Take Out Or Dine In</h2>
        </center>  
      </div>

      <center>
        <h4>Come see us in person! To take full advantage of our quality the best option is to dine in, or reserve an in store pick up order. We love our customers so feel free to visit during our normal business hours.</h4>
      </center>  

      <center>
        <a href="/specials" class="active btn btn-primary" >View our menu options here!</a>
      </center>

      <br />

      <div class="Title">
        <center>
          <h2>Delivery Service thru 3rd party</h2>
        </center>  
      </div>

      <center>
        <h4>We use 3rd party delivery services.</h4>
        <h6>*Please click your favorite delivery app. Our favorite is Slice*</h6>
      </center>  

      <center>
        <a href="/delivery" class="active btn btn-primary" >View our delivery options here!</a>
      </center>

      <br />

      <center>
        <h4 style={{fontWeight: "bold"}}>PLEASE NOTE: Buono's cannot guarantee the warmth or quality of food delivered by any of the 3rd party delivery services. We make ALL of our food to order and have no control over time of pick up or delivery quality. We make every effort to ensure we provide the best quality food.</h4>

        <hr />

        <h5 style={{fontWeight: "bold"}}>To ensure your food is top notch we encourage our customers to dine in or do direct pick up.</h5>

        <hr />

        <h6>THANK YOU KINDLY FOR YOUR UNDERSTANDING!</h6>
        <h6>BUONO'S MANAGEMENT</h6>
      </center>

      <br />

    </div>
  );
};

export default Home;
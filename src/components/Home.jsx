import React from 'react';
import Information from '../components/layout/Information';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import '../css/video_player.css';
import '../css/home.css';

const Home = () => {
  return (
    <div className='page'>
      <br /><br /><br /><br /> 
      <Information />

      <div class="heading buonos-font">
        <center>
          <h2>How we do it</h2>
        </center>
      </div>
      
      <div class="VideoPlayer">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yaQVJVlKhPQ?si=V13N0b1yJtQaKEo9&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=yaQVJVlKhPQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div class="sub-section buonos-font">
        <center>
          <h2>Our Promise</h2>
        </center>  
      </div>

      <center>
        <a href="/menu-1" class="active btn btn-primary" >
          View our full menu here!
        </a>
      </center>

      <br />

      <div class="sub-section buonos-font">
        <center>
          <h2>Buonos Specialties</h2>
          <h4>We refuse to compromise. We use the freshest and finest ingredients. Our pizza dough, pizza sauce, and pasta sauce are made fresh daily in house.</h4>
        </center>  
      </div>

      <center>
        <a href="/specials" class="active btn btn-primary" >View our catering options here!</a>
      </center>

      <br />

      <div class="sub-section buonos-font">
        <center>
          <h2>Loyalty Bonus</h2>
          <h4>With any purchase of a large, or extra-large pizza pie, you will receive a magnet. Collect 8 magnets and get a large 1 topping pizza pie for FREE!</h4>
          <h6>*Valid only on dine in or in person take out orders*</h6>
        </center>  
      </div>

      <center>
        <a href="/specials" class="active btn btn-primary" >View our catering options here!</a>
      </center>

      <br />

      <div class="sub-section buonos-font">
        <center>
          <h2>Take Out Or Dine In</h2>
          <h4>We use 3rd party delivery services.</h4>
          <h6>*Please click your favorite delivery app. Our favorite is Slice*</h6>
        </center>  
      </div>

      <center>
        <a href="/specials" class="active btn btn-primary" >View our catering options here!</a>
      </center>

      <br />

      <div class="sub-section buonos-font">
        <center>
          <h2>Delivery Service thru 3rd party</h2>
          <h4>We use 3rd party delivery services.</h4>
          <h6>*Please click your favorite delivery app. Our favorite is Slice*</h6>
        </center>  
      </div>

      <center>
        <a href="/specials" class="active btn btn-primary" >View our catering options here!</a>
      </center>

      <br />
    </div>
  );
};

export default Home;
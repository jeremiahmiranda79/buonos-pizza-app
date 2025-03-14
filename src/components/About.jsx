import React from 'react';
import '../css/video_player.css';

import Information from '../components/layout/Information';

const About = () => {
  return (
    <div className='AboutPage'>
      <br /><br /><br /><br />

      <center>
        <h1>About</h1>
      </center>

      <Information />

      <center>
        <h2>About Us</h2>
      </center>

      <div className='VideoPlayer'>
        <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/-yCUuy-aX80?si=Vt-eH92ZDxaQ4BbU&amp;start=603" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div> 

      <center>
        <h2>Meet The Team</h2>
      </center>

      <center>
        <p className='x'>
          Jimmy and family from the ORIGINAL BUONO'S are BACK.  At  BUONO'S we believe we stay true to NYC style pizza, by using fresh local ingredients. BUONO'S has been bringing New York-style pizza to Arizona since 1989!  Just like a local NYC neighborhood pizzeria.  We are an independently owned and operated pizzeria restaurant. Joining Jimmy is his fiance Shelly who is an Army Veteran and a ICU Nurse
        </p>
      </center>  

      <center>
        <h2>Dine in or take out</h2>
      </center>

      <center> 
        <p className='x'>
          We have worked to package our meals in a way that lets you bring the quality of our meals into your home. We always love to see you in person, but even when we can't we ensure that your dining experience is top notch!
        </p>
      </center>

      <center>
        <h2>Made in store</h2>
      </center>
      
      <center>
        <p className='x'>
          We refuse to compromise.  We use the freshest and finest ingredients.  Our Pizza Dough is made fresh daily in house and we make our sauce in house as well.
        </p>
      </center>
      
    </div>
  );
};

export default About;
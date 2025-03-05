import React from 'react';
import '../css/about.css';
import '../css/video_player.css';

const About = () => {
  return (
    <div className='page'>
      <br /><br /><br /><br />

      <div class="heading buonos-font">
        <center>
          <h1>About Us</h1>
        </center>
      </div>

      <div className='VideoPlayer'>
        <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/-yCUuy-aX80?si=Vt-eH92ZDxaQ4BbU&amp;start=603" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div> 

      <div class="sub-section buonos-font">
        <center>
        <h2>Meet The Team</h2>
        <h5>
          Jimmy and family from the ORIGINAL BUONO'S are BACK.  At  BUONO'S we believe we stay true to NYC style pizza, by using fresh local ingredients. BUONO'S has been bringing New York-style pizza to Arizona since 1989!  Just like a local NYC neighborhood pizzeria.  We are an independently owned and operated pizzeria restaurant. Joining Jimmy is his fiance Shelly who is an Army Veteran and a ICU Nurse
        </h5>
        </center>  
      </div>

      <div>
        <center>
          <div>
            <input type="radio" checked name="active" id="tab-1" />
            <input type="radio" name="active" id="tab-2" />
            <input type="radio" name="active" id="tab-3" />
            <input type="radio" name="active" id="tab-4" />
            <input type="radio" name="slide" id="one" />
          
            <div class="img-card">
              <img src="/images/team/team-1.webp" alt="" />
              <img src="/images/team/team-2.webp" alt="" />
              <img src="/images/team/team-3.webp" alt="" />
              <img src="/images/team/team-4.webp" alt="" />
            </div>

            <div class="sliders">
              <label for="tab-1" class="one">
                <div class="button-box">
                  <img src="/images/team/team-1.webp" alt="" />
                </div>
              </label>

              <label for="tab-2" class="two">
                <img src="/images/team/team-2.webp" alt="" />
              </label>

              <label for="tab-3" class="three">
                <img src="/images/team/team-3.webp" alt="" />
              </label>

              <label for="tab-4" class="four">
                <img src="/images/team/team-4.webp" alt="" />
              </label>
            </div>
          </div>
        </center> 
      </div>

      <div class="sub-section buonos-font">
        <center>
          <h2>Dine in or take out</h2>
          <h5>
            We have worked to package our meals in a way that lets you bring the quality of our meals into your home. We always love to see you in person, but even when we can't we ensure that your dining experience is top notch!
          </h5>
        </center>
      </div>

      <div class="sub-section buonos font">
        <center>
          <h2>Made in store</h2>
          <h5>
            We refuse to compromise.  We use the freshest and finest ingredients.  Our Pizza Dough is made fresh daily in house and we make our sauce in house as well.
          </h5>
        </center>
      </div>

      <br />

    </div>
  );
};

export default About;
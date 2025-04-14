import React from 'react';
import '../css/video_player.css';
import Information from '../components/layout/Information';

const About = () => {
  return (
    <div style={{margin: '100px 10px 10px 10px'}}>
      <h1 rel="preload" style={{textAlign: 'center'}}>About</h1>
      <Information/>
      <h2 style={{textAlign: 'center'}}>About Us</h2>
      <center>
        <div className="wrapper">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube-nocookie.com/embed/-yCUuy-aX80?si=Vt-eH92ZDxaQ4BbU&amp;start=603" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullscreen 
          />
        </div>
      </center>
      <h2 style={{textAlign: 'center'}}>Meet The Team</h2>
      <p className='x' style={{textAlign: 'center'}}>Jimmy and family from the ORIGINAL BUONO'S are BACK. At BUONO'S we believe we stay true to NYC style pizza, by using fresh local ingredients. BUONO'S has been bringing New York-style pizza to Arizona since 1989! Just like a local NYC neighborhood pizzeria. We are an independently owned and operated pizzeria restaurant. Joining Jimmy is his fiance Shelly who is an Army Veteran and a ICU Nurse</p>
      <h2 style={{textAlign: 'center'}}>Dine in or take out</h2>
      <p className='x' style={{textAlign: 'center'}}>We have worked to package our meals in a way that lets you bring the quality of our meals into your home. We always love to see you in person, but even when we can't we ensure that your dining experience is top notch!</p>
      <h2 style={{textAlign: 'center'}}>Made in store</h2>
      <p className='x' style={{textAlign: 'center'}}>We refuse to compromise. We use the freshest and finest ingredients. Our Pizza Dough is made fresh daily in house and we make our sauce in house as well.</p>
    </div>
  );
};

export default About;
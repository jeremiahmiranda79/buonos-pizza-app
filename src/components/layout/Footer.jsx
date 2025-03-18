import React from 'react';
import { INFORMATION } from '../../constants/information';
import '../../css/bottom_nav_bar.css';

const Footer = () => {
  return (
    <div className='BottomNavBar'>
      <footer className="py-1 pt-1">
        <center>
          <p className='x' style={{fontWeight: 'bold'}}>
            {INFORMATION[0].llc}
          </p>

          <a 
            href={INFORMATION[0].phone_link}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p className='x'>{INFORMATION[0].phone}</p>
          </a>

          <a 
            href={INFORMATION[0].email_link}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p className='x'>{INFORMATION[0].email}</p>
          </a>
        </center>

        <center>
          <a 
            href={INFORMATION[0].face_book_link}
            className="fa-brands fa-facebook fa-2xl fa-fw" 
            aria-hidden="false" 
            tabIndex="-1"
            style={{ textDecoration: 'none', color: 'inherit' }}
            alt="Face Book" 
          >           
          </a>
      
          <a 
            href={INFORMATION[0].instagram_link}
            className="fa-brands fa-square-instagram fa-2xl fa-fw" 
            aria-hidden="false"
            tabIndex="-1" 
            style={{ textDecoration: 'none', color: 'inherit' }}
            alt="Instagram" 
          >
          </a>
  
          <a 
            href={INFORMATION[0].yelp_link}
            className="fa-brands fa-yelp fa-2xl fa-fw" 
            aria-hidden="false"
            tabIndex="-1"
            style={{ textDecoration: 'none', color: 'inherit' }}
            alt="Yelp" 
          >
          </a>
             
          <a 
            href={INFORMATION[0].google_map_link}
            className="fa-brands fa-google fa-2xl fa-fw" 
            aria-hidden="false"
            tabIndex="-1"
            style={{ textDecoration: 'none', color: 'inherit' }}
            alt='Google'
          > 
          </a>
        
          <p>
            {INFORMATION[0].copy_right}
            <br />
            {INFORMATION[0].powered_by}
          </p>

        </center>

      </footer>

    </div>
  );
};

export default Footer;
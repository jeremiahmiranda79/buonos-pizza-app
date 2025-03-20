import React from 'react'
import { HOURS_INFORMATION } from '../constants/hoursInformation';
import CurrentDateTime from './layout/CurrentDateTime';
import { Image } from 'react-bootstrap';

const Hours = () => {
  return (
    <div>
      <br /><br /><br /><br />  
      <center>
        <h1>Hours</h1>
      </center>

      <Image src='/images/photos/header-2.webp' fluid />
      
      <center>
        <CurrentDateTime />        
      </center>

      <center>
        <p className='y'>
          Hours of operation are subject to change based on circumstance or holidays 
        </p>
        <p className='y'>
          Please call ahead if you have inquires that need garenteed timing
        </p>
      </center>

      <div className="container-hours">
        <center>
          <h2>Hours Of Operation</h2>
        </center>

        <center>  
            <hr />

            {HOURS_INFORMATION.map((hours) => (
              <div>
                <p className='y'>{hours.date}</p>
                <hr />
              </div>
            ))};
        </center>
      </div>
    </div>
  )
};

export default Hours;
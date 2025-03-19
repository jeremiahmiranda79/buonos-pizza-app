import React from 'react';
import { INFORMATION } from '../../constants/information';

// import '../../css/nav-bar-2.css';


const Information = () => {
  return (
    <div className="background-color: rgb(218, 207, 207);">
      <center>
        <hr />

        <p className='x' style={{ fontWeight: 'bold' }}>{INFORMATION[0].llc}</p>

        <a style={{ textDecoration: 'none' }} href={INFORMATION[0].address_link} >
          <p className='x'>{INFORMATION[0].address}</p>
        </a>

        <a style={{ textDecoration: 'none' }} href={INFORMATION[0].phone_link }>
          <p className='x'>{INFORMATION[0].phone}</p>
        </a>

        <a style={{ textDecoration: 'none' }} href={INFORMATION[0].email_link }>
          <p className='x'>{INFORMATION[0].email}</p>
        </a>

      </center>

      <hr />
      
    </div>
  );
};

export default Information;
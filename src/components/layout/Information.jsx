import React from 'react';
import { INFORMATION } from '../../constants/information';

const Information = () => {
  return (
    <div className="InformationPage">
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
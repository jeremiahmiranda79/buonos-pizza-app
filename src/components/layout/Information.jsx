import React from 'react';
import { INFORMATION } from '../../constants/information';
import '../../css/information.css'

const Information = () => {
  return (
    <div className="InformationPage">
      <center>
        <h1 className='Title2'>{INFORMATION[0].welcome}</h1>

        <hr />

        <h4>{INFORMATION[0].llc}</h4>

        <a style={{ textDecoration: 'none' }} href={INFORMATION[0].address_link} >
          <h4 style={{ color: 'black' }}>{INFORMATION[0].address}</h4>
        </a>

        <a style={{ textDecoration: 'none' }} href={INFORMATION[0].phone_link }>
          <h4 style={{ color: 'black' }}>{INFORMATION[0].phone}</h4>
        </a>

        <a style={{ textDecoration: 'none' }} href={INFORMATION[0].email_link }>
          <h4 style={{ color: 'black' }}>{INFORMATION[0].email}</h4>
        </a>

        <h6 style={{ color: 'black' }}>{INFORMATION[0].style}</h6>
      </center>

      <hr />
    </div>
  );
};

export default Information;
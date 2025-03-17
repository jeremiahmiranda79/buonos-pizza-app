import React from 'react';
import Information from '../components/layout/Information';

import '../css/delivery.css';

const Delivery = () => {
  return (
    <div className='DeliveryPage'>
      <br /><br /><br /><br />

      <center>
        <h1>Delivery</h1>
      </center>

      <Information />

      <center>
        <h2>Delivery Service Thru 3rd Party</h2>
      </center>

      <center>
        <p className='x'>We use 3rd party delivery services.</p>
        <p className='y'>*Please click your favorite delivery app. Our favorite is Slice*</p>
      </center>  

      <center>
        <a href="https://slicelife.com/restaurants/az/gilbert/85295/buonos-pizza/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=buonosgilbert.com">
          <img 
            src="/images/icons-logos/slice.webp" alt="icon slice" className="btn-delivery-main">
          </img>
        </a>

        <ul className="nav flex-row delivery">
          <a href="https://www.doordash.com/store/buonos-pizza-gilbert-gilbert-1778796/">
            <img src="/images/icons-logos/doordash.webp" alt="icon door dash" className="btn-delivery"></img>
          </a>

          <a href="https://www.ubereats.com/store/buonos-pizza-gilbert/gJH4x-XFTACHDY7vQuqWWg">
            <img src="/images/icons-logos/uber-eats.webp" alt="icon uber eats" className="btn-delivery"></img>
          </a>

          <a href="https://www.grubhub.com/restaurant/buonos-pizza-gilbert-1464-e-williams-field-rd-gilbert/2776436">
            <img src="/images/icons-logos/grubhub.webp" alt="icon grub hub" className="btn-delivery"></img>
          </a>
        </ul>
      </center>

      {/* <hr /> */}
      <br />

      <center>
        <p className='x' style={{fontWeight: "bold"}}>PLEASE NOTE: Buono's cannot guarantee the warmth or quality of food delivered by any of the 3rd party delivery services. We make ALL of our food to order and have no control over time of pick up or delivery quality. We make every effort to ensure we provide the best quality food.</p>

        <p className='y' style={{fontWeight: "bold"}}>To ensure your food is top notch we encourage our customers to dine in or do direct pick up.</p>

        <hr />

        <p className='y' style={{fontWeight: "bold"}}>THANK YOU KINDLY FOR YOUR UNDERSTANDING! <br /> BUONO'S MANAGEMENT</p>
      </center>

    </div>
  );
};

export default Delivery;
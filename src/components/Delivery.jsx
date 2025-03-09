import React from 'react';
import '../css/delivery.css';
import Information from '../components/layout/Information';

const Delivery = () => {
  return (
    <div className='DeliveryPage'>
      <br /><br /><br /><br />

      <div className="Title">
        <center>
          <h1>Delivery</h1>
        </center>
      </div>

      <Information />

      <div className="Title">
        <center>
          <h2>Delivery Service Thru 3rd Party</h2>
        </center>
      </div>

      <center>
        <h4>We use 3rd party delivery services.</h4>
        <h6>*Please click your favorite delivery app. Our favorite is Slice*</h6>
      </center>  


      <center>
        <a href="https://slicelife.com/restaurants/az/gilbert/85295/buonos-pizza/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=buonosgilbert.com">
          <img 
            src="/images/icons-logos/slice.webp" class="btn-delivery-main">
          </img>
        </a>

        <ul class="nav flex-row delivery">
          <a href="https://www.doordash.com/store/buonos-pizza-gilbert-gilbert-1778796/">
            <img src="/images/icons-logos/doordash.webp" class="btn-delivery"></img>
          </a>

          <a href="https://www.ubereats.com/store/buonos-pizza-gilbert/gJH4x-XFTACHDY7vQuqWWg">
            <img src="/images/icons-logos/uber-eats.webp" class="btn-delivery"></img>
          </a>

          <a href="https://www.grubhub.com/restaurant/buonos-pizza-gilbert-1464-e-williams-field-rd-gilbert/2776436">
            <img src="/images/icons-logos/grubhub.webp" class="btn-delivery"></img>
          </a>
        </ul>
      </center>

      <center>
        <h3>
          PLEASE NOTE: Buonos Pizza can not guarantee the warmth or quality of food delivered by any of the 3rd party delivery services. We make ALL of our food to order and have no control over time of pick up or delivery quality. We make every effort to ensure we provide the best quality food.
        </h3>

        <br />

        <h4>
        To ensure your food is top notch we encourage our customers to dine in or do direct pick up.
        </h4>

        <br />

        <h5>
          THANK YOU KINDLY FOR YOUR UNDERSTANDING!
        </h5>

        <h5>
          BUONO'S MANAGEMENT
        </h5>
      </center>

      <br />
      <br />

    </div>
  );
};

export default Delivery;
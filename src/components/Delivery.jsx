import React from 'react';
// import Information from '../components/layout/Information';

import '../css/delivery.css';

const Delivery = () => {
  return (
    <div className='page'>
      <br /><br /><br /><br />

      <center>
        <div>
          <h1>
            Delivery Service Thru 3rd Party
          </h1>

          <h3>
            We use 3rd party delivery services.
          </h3>

          <h4>
            Please click your favorite online ordering app. Our favorite is Slice!
          </h4>

          <a href="https://slicelife.com/restaurants/az/gilbert/85295/buonos-pizza/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=buonosgilbert.com">
            <img 
              src="/images/icons-logos/slice.webp" class="btn-delivery-main">
            </img>
          </a>

          <ul class="nav flex-row delivery">
            {/* {{#if hp.doordash_switch}} */}
              <a href="https://www.doordash.com/store/buonos-pizza-gilbert-gilbert-1778796/">
                <img src="/images/icons-logos/doordash.webp" class="btn-delivery"></img>
              </a>
            {/* {{/if}} */}

            {/* {{#if hp.ubereats_switch}} */}
              <a href="https://www.ubereats.com/store/buonos-pizza-gilbert/gJH4x-XFTACHDY7vQuqWWg">
                <img src="/images/icons-logos/uber-eats.webp" class="btn-delivery"></img>
              </a>
            {/* {{/if}} */}

            {/* {{#if hp.grubhub_switch}} */}
              <a href="https://www.grubhub.com/restaurant/buonos-pizza-gilbert-1464-e-williams-field-rd-gilbert/2776436">
                <img src="/images/icons-logos/grubhub.webp" class="btn-delivery"></img>
              </a>
            {/* {{/if}} */}
          </ul>

          <h3>
            PLEASE NOTE: Buono's cannot guarantee the warmth or quality of food delivered by any of the 3rd party delivery services. We make ALL our food to order and have no control over time of pick up or delivery quality. We make every effort to ensure we provide the best quality food.
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

        </div>
      </center>

      <br /><br /><br /><br /><br />
    </div>
  );
};

export default Delivery;
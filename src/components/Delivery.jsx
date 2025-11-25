import React from 'react';
import Information from '../components/layout/Information';
import '../css/delivery.css';

const Delivery = () => {
  return (
    <div style={{margin: '100px 10px 10px 10px'}}>
      {/* <h1 rel="preload" style={{textAlign: 'center'}}>Delivery</h1> */}
      <h1 rel="preload" style={{textAlign: 'center'}}>Online Ordering</h1>
      <Information/>

      {/* <hr /> */}

      {/* <div style={{textAlign: 'center', marginBottom: '0px'}}> */}
        {/* <h2 style={{marginBottom: '15px'}}>Online Take Out Ordering is for Pick Up And Take Out Only <br/><br /> For Delivery Services Please See The Options Listed Below</h2> */}

        {/* <h2 style={{marginBottom: '15px'}}>Online Ordering is for Pick Up And Take Out Only</h2> 
        <p className='y'>*For Delivery Services Please See The Options Listed Below*</p> */}

        {/* <p > */}
          {/* <a href="https://online.skytab.com/ba1259fa275c3fa135327dc3dba6bc5f/order-settings">
            <img 
              style={{border: '1px solid rgba(0, 0, 0, 1)', marginBottom: '0px'}}
              src="/images/icons-logos/Fulldecal.png" alt="Buonos logo" 
              className="btn-delivery-main">
            </img>
          </a> */}

          {/* <p style={{textAlign: 'center'}}><a href="https://online.skytab.com/ba1259fa275c3fa135327dc3dba6bc5f/order-settings" className="active btn btn-primary" style={{fontSize: '25px'}}>Place Online Order For Pick Up</a></p> */}

          {/* <p style={{textAlign: 'center'}}><a href="/menu" className="active btn btn-primary" style={{fontSize: '25px'}}>Ordering For Pick Up</a></p> */}
        {/* </p>   */}
      {/* </div>     */}

      <hr />

      <h2 style={{textAlign: 'center'}}>Delivery Service Through Third Party Apps</h2>
      <p style={{textAlign: 'center'}} className='x'>We use 3rd party delivery services.</p>
      <p style={{textAlign: 'center', marginBottom: '0px'}} className='y'>*Please click your favorite delivery app. Our favorite is Slice*</p>
      <p style={{textAlign: 'center', marginBottom: '0px'}}>
        <a href="https://slicelife.com/restaurants/az/gilbert/85295/buonos-pizza/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=buonosgilbert.com">
          <img 
            style={{border: '1px solid rgba(0, 0, 0, 1)', marginBottom: '0px'}}
            src="/images/icons-logos/slice.webp" 
            alt="icon slice" 
            className="btn-delivery-main">
          </img>
        </a>
        <ul className="nav flex-row delivery">
          <a href="https://www.doordash.com/store/buonos-pizza-gilbert-gilbert-1778796/">
            <img
              style={{border: '1px solid rgba(0, 0, 0, 1)', marginBottom: '0px'}} 
              src="/images/icons-logos/doordash.webp" 
              alt="icon door dash" 
              className="btn-delivery">
            </img>
          </a>
          <a href="https://www.ubereats.com/store/buonos-pizza-gilbert/gJH4x-XFTACHDY7vQuqWWg">
            <img 
              style={{border: '1px solid rgba(0, 0, 0, 1)', marginBottom: '0px'}}
              src="/images/icons-logos/uber-eats.webp" 
              alt="icon uber eats" 
              className="btn-delivery">  
            </img>
          </a>
          <a href="https://www.grubhub.com/restaurant/buonos-pizza-gilbert-1464-e-williams-field-rd-gilbert/2776436">
            <img 
              style={{border: '1px solid rgba(0, 0, 0, 1)', marginBottom: '0px'}}
              src="/images/icons-logos/grubhub.webp" 
              alt="icon grub hub" 
              className="btn-delivery">
            </img>
          </a>
        </ul>
      </p>
      <p style={{textAlign: 'center'}} className='y'>*Please click your favorite delivery app. Our favorite is Slice*</p>
      <p className='x' style={{fontWeight: "bold", textAlign: 'center'}}>PLEASE NOTE: Buono's cannot guarantee the warmth or quality of food delivered by any of the 3rd party delivery services. We make ALL of our food to order and have no control over time of pick up or delivery quality. We make every effort to ensure we provide the best quality food.</p>
      <p className='y' style={{fontWeight: "bold", textAlign: 'center'}}>To ensure your food is top notch we encourage our customers to dine in or do direct pick up.</p>
      <hr />
      <p className='y' style={{fontWeight: "bold", textAlign: 'center'}}>THANK YOU KINDLY FOR YOUR UNDERSTANDING! <br /> BUONO'S MANAGEMENT</p>
    </div>
  );
};

export default Delivery;
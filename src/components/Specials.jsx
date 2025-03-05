import React from 'react';
import Information from '../components/layout/Information';
import  '../css/specials.css';

const Specials = () => {
  return (
    <div className='page'>
      <br /><br /><br /><br />
      <Information />
      
      <br />

      <div class="heading buonos-font">
        <center>
          <h2>Specialty Pizza</h2>
        </center>
      </div> 

      <br />

      <div class="heading buonos-font">
        <center>
          <h4>Extra Large 18" Specialty Neapolitan Style Pizza for $27.99 plus tax.</h4>
          <h4>Please No Modifications!</h4>
        </center>
      </div>

      <br />

      <center>
        <img 
          src="/images/specials/pizza-specials.jpg" 
          alt="Paris" 
          class="banner"
        />
      </center>

      <br />

      <center>
        <a 
          href="/menu-1" class="active btn btn-primary">View our full menu here!
        </a>
      </center>

      <br />

      <div class="heading buonos-font">
        <center>
          <h2>Game Day</h2>
        </center>
      </div>

      <br />

      <div class="heading buonos-font">
        <center>
          <h4>Large 16" one topping Neapolitan pizza & 10 wings for $29.99 plus tax.</h4>
          <h4>Available for dine in or take out, open to close on NFL game day's only(Sunday, Monday, Thursday).</h4>
        </center>
      </div>

      {/* <br />

      <center>
        <img src="/images/specials/sunday-football.webp" alt="Paris" class="banner" />
      </center> */}
    
      <br />

      <center>
        <a href="/menu-1" class="active btn btn-primary">View our full menu here!</a>
      </center>

      <div>
        <center>
          <h2>Daily Lunch Specials</h2>
          <h3>Available till 4pm</h3>
          <h5>(Fountain Drink included)</h5>
          
          <div class="">
            <h4>2 Slice of Cheese</h4>
            <h4>$8.99</h4>
            <hr />
            <h4>1 Slice of Cheese w/ Salad</h4>
            <h4>$9.99</h4>
            <hr />
            <h4>6 inch Cold Sub w/ Fries</h4>
            <h4>$11.99</h4>
          </div>

          <hr />

          <h5>*Ask us about our all day Specials*</h5>
        </center>
      </div>

      <br />

      <center>
        <a href="/menu-1" class="active btn btn-primary" >View our full menu here!</a>
      </center>

      <br />

      <div class="heading buonos-font">
        <center>
          <h2>Pizza Topping Specials</h2>
        </center>
      </div>

      <div class="heading buonos-font">
        <center>
          <h3>All day every day</h3>
          <h4>Any 4 toppings</h4>
          <h4>$8.99</h4>
        </center>
      </div>

      <br />

      <center>
        <a href="/menu-1" class="active btn btn-primary" >View our full menu here!</a>
      </center>

      <br /><br />

    </div>
  );
};

export default Specials;
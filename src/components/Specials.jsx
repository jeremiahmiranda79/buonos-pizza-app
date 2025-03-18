import React from 'react';
import Information from '../components/layout/Information';
import  '../css/specials.css';

const Specials = () => {
  return (
    <div className='SpecialsPage'>
      <br /><br /><br /><br />

      <center>
        <h1>Specials</h1>
      </center>

      <Information />

      <center>
        <h2>Specialty Pizza</h2>
      </center>

      <center>
        <p className='x'>Extra Large 18" Specialty Neapolitan Style Pizza for $27.99 plus tax.</p>
        <p className='y'>Please No Modifications!</p>
      </center>

      <br />

      <center>
        <img 
          src="/images/specials/pizza-specials.jpg" 
          alt="Pizza Specials" 
          className="Image"
        />
      </center>

      <br />

      <center>
        <a 
          href="/menu" className="active btn btn-primary">View our full menu here!
        </a>
      </center>

      <br />

      <center>
        <h2>Game Day</h2>
      </center>

      <center>
        <p className='x'>Large 16" one topping Neapolitan pizza & 10 wings for $29.99 plus tax.</p>
        <p className='x'>Available for dine in or take out, open to close on NFL game day's only(Sunday, Monday, Thursday).</p>
      </center>

      <center>
        <a href="/menu" className="active btn btn-primary">View our full menu here!</a>
      </center>

      <br />

      <center>
        <h2>Daily Lunch Specials</h2>
      </center>

      <center>
        <p className='x'>Available from opening to 4pm</p>
        <p className='y'>(Fountain Drink included)</p>
        
        <hr />

        <p className='x'>2 Slice of Cheese</p>
        <p className='x'>$8.99</p>

        <p className='x'>1 Slice of Cheese w/ Salad</p>
        <p className='x'>$9.99</p>

        <p className='x'>6 inch Cold Sub w/ Fries</p>
        <p className='x'>$11.99</p>

        <hr />

        <p className='y'>*Ask us about our all day Specials*</p>
      </center>

      <br />

      <center>
        <h2>Pizza Topping Specials</h2>
      </center>

      <center>
        <p className='x'>All day every day</p>
        <p className='x'>Any 4 toppings</p>
        <p className='x'>$8.99</p>
      </center>

      <center>
        <a href="/menu" className="active btn btn-primary" >View our full menu here!</a>
      </center>

      <br />

    </div>
  );
};

export default Specials;
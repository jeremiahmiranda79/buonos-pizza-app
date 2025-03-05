import React from 'react';
import '../css/hours.css';

// import '../js/hours.js';

const Hour = () => {
  return (
    <div>
      <br /><br /><br /> 

      <div class="heading buonos-font">
        <center>
          <h1>Hours</h1>
        </center>
      </div> 

      {/* <div class="">
        <center>
          <h1>Sorry we are currently closed. We will reopen during the hours of operation listed below!</h1>
        </center>
      </div> */}

      {/* <div class="hours-image">
        <img src="/images/signs/closed.webp" id="open-close" alt="" />
      </div> */}

      <center>
        <h2>Current date / time:</h2>
        {/* <span><h5 id="date"></h5></span> */}
        {/* <span><h5 id="time"></h5></span> */}
      </center>

      <center>
        <h4>
          Hours of operation are subject to change based on circumstance or holidays. 
        </h4>
        <h5>
          * Please call ahead if you have inquires that need garenteed timing! *
        </h5>
      </center>
      
      <br /><br /><br />
    </div>
  );
};

export default Hour;
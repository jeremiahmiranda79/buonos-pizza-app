import React from 'react'
import { HOURS_INFORMATION } from '../constants/hoursInformation';

let d = new Date();
let second = d.getSeconds().toString().padStart(2, "0");
let minute = d.getMinutes().toString().padStart(2, "0");
let hour = d.getHours();

function findTime() {
  // Converts Military time to AM PM
  let timeCheck = "";
  let hourTxt = 0;

  hour > 12 ? timeCheck = "PM" : timeCheck = "AM";
  hour % 12 === 0 ? hourTxt = 12 : hourTxt = hour % 12;

  document.getElementById('time').textContent = `${hourTxt}:${minute}:${second} ${timeCheck}`;
};

function createDate() {
  document.getElementById('date').textContent = d.toDateString();
}

// createDate();
// findTime();

// setInterval(findTime, 1000);

const Hours = () => {
  return (
    <div>
      <br /><br /><br /><br />  
      <center>
        <h1>Hours</h1>

      </center> 

      {/* <center>
        <h1 id="operation-status-text"></h1>
      </center> */}

      {/* <center>
        <h2>Current date / time:</h2>
        <span><h5 id="date" style={{fontWeight: 'bold'}}></h5></span>
        <span><h5 id="time" style={{fontWeight: 'bold'}}></h5></span>
      </center> */}


      <center>
        <h4>
          Hours of operation are subject to change based on circumstance or holidays. 
        </h4>
        <h5>
          * Please call ahead if you have inquires that need garenteed timing! *
        </h5>
      </center>

      <div className="container-hours">
        <center>
          <h2>Hours of operation</h2>

          <ul>
            {/* {{#each hours as |h|}}
            <li>{{h.date}}</li>
            {{/each}} */}
            {HOURS_INFORMATION.map((hours) => 
              (<li style={{listStyle: 'none'}}>{hours.date}</li>) 
            )}
          </ul>
        </center>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br />

    </div>
  )
}

export default Hours
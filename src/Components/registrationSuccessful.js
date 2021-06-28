import React from 'react';
import './styleSheet.css';
import {Link} from 'react-router-dom'; 
 
function registrationSuccessful(props) {
    return (
        <div>
            <div id='card' className="animated fadeIn">
        <div id='upper-side'>
            <i className="fa fa-check"></i>
            <h3 id='status'> Success </h3> 
        </div>
        <div id='lower-side'>
          <p id='message'>
            <b>Congratulations, Successfully Booked your Appointment</b>
          </p>
         <Link exact to="/home"><button id='contBtn'>Continue</button></Link>
        </div>
      </div>
        </div>
        // <div>Successfull</div>
    );
}
 
export default registrationSuccessful;
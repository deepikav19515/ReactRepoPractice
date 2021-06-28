import React from 'react';
import './styleSheet.css';
import {Link} from 'react-router-dom';

function paymentSuccess(props) {
    return (
        <div>
            <div id='card' className="animated fadeIn">
        <div id='upper-side'>
            <i className="fa fa-check"></i>
            <h3 id='status'> Success </h3> 
        </div>
        <div id='lower-side'>
          <p id='message'>
            <b>Thank You, Please visit us again.</b>
          </p>
          <Link exact to="/home"><button id="contBtn">Home</button></Link>
        </div>
      </div>
        </div>
        // <div>Successfull</div>
    );
}

export default paymentSuccess;
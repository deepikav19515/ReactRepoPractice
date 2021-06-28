import React from "react";
import {Link} from 'react-router-dom';

const Home=()=>{
    return(
        <center>
            <div className="hero">  
            {/* <h1>Home Section</h1> */}
            <div>
            <div className="banner-text">
            <div className="text-area">
                    <span>D</span>
                    <span>o</span>
                    <span>c</span>
                    <span>t</span>
                    <span>o</span>
                    <span>r</span>&nbsp;&nbsp;
                    <span>c</span>
                    <span>o</span>
                    <span>n</span>
                    <span>s</span>
                    <span>u</span>
                    <span>l</span>
                    <span>t</span>
                    <span>a</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>&nbsp;&nbsp;
                    <span>s</span>
                    <span>y</span>
                    <span>s</span>
                    <span>t</span>
                    <span>e</span>
                    <span>m</span>
             </div><br></br>
             <p > "YOU ARE AT RIGHT PLACE, AT RIGHT TIME"</p>
             <p >BECAUSE,</p>
             <p ><b>"Only Doctors can teach how to love life."</b></p>
                <p><b>AND</b></p>
                <p ><b>"Medicine cure diseases but, only Doctors can cure Patients."</b> <br></br></p>
             
             <p className="banner-btn">
                
                    <Link exact to="/login"><button>Patient Login</button></Link>
                    <Link exact to="/doctorlogin"><button>Doctor Login</button></Link>
            </p> 
        </div>
    </div>
</div> </center>

    )
}
export default Home;
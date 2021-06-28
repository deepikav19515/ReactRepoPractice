import React from "react";
import './styleSheet.css';

const About=()=>{
    return(
        
    
<div>
        {/* <header className="section-header text-center mb-5 pb-2"> */}
        <div id="about">
        <div class="container">
          <h3 style={{textAlign:"center",marginTop:"60px"}}><b>About Us</b></h3>
          <p style={{marginTop:"40px"}}><b>Online Doctor Consultation is a leading healthcare service provider in India.
             It is an expert in providing quality healthcare and valuable services, supported by a team of compassionate 
             and dedicated medical professionals.This facility is a secure, fast and user friendly technology to make your engagement a better experience.</b></p>
        <div className="row about-cols">

          <div className="col-md-4 wow fadeInUp">
            <div className="about-col">
              <div className="img">
                <img src="img/about-mission.webp" alt="" class="img-fluid" />
                <div className="icon"><i className="fa fa-eye fa-stack-1x fa-inverse"></i></div>
              </div>
              <h2 className="title" style={{textAlign:"center",marginTop:"60px"}}><a href="#">Our Mission</a></h2>
              <p className="text-center" style={{marginTop:"40px"}}>
                To cultivate an environment of trust, honesty, mutual respect, equality, and ethics.
              </p>
            </div>
          </div>

          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-col">
              <div className="img">
                <img src="img/about-plan.webp" alt="" className="img-fluid" />
                <div className="icon"><i class="fa fa-eye fa-stack-1x fa-inverse"></i></div>
              </div>
              <h2 className="title" style={{textAlign:"center",marginTop:"60px"}}><a href="#">Our Plan</a></h2>
              <p className="text-center"  style={{marginTop:"40px"}}>
                To provide value added innovative, consistent, and continuously improving health and medical care to sustain and further improve clinical outcomes, patient safety,  patient satisfaction.
              </p>
            </div>
          </div>
          
          
 <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div class="about-col">
              <div class="img">
                <img src="img/about-vision.webp" alt="" class="img-fluid" />
                <div class="icon"><i class="fa fa-eye fa-stack-1x fa-inverse"></i></div>
              </div>
              <h2 class="title" style={{textAlign:"center",marginTop:"60px"}}><a href="#">Our Vision</a></h2>
              <p class="text-center" style={{marginTop:"40px"}}>
                To evolve as a benchmark in quality healthcare available to one and all.  
              </p>
            </div>
          </div>
          </div>

        </div>
        </div>
      </div>
    // <section id="call-to-action" class="wow fadeIn" style="background: linear-gradient(rgba(119, 209, 221, 0.9),rgba(5, 149, 185, 0.9));">
    //   <div class="container text-center">
    //     <h3>Having any problems?</h3>
    //     <p class="text-center">
    //       Online customer support and 24x7 emergency care is available to all patients </p>
    //     <a class="cta-btn" href="contactform.html">Contact Us</a>
    //   </div>
    // </section>
    
        
    )
}
export default About;
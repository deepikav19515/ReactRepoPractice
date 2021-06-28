import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from "simple-react-validator";

class BookAppointment extends Component{
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            name: '',
            dname:'',
            adate:'',
            hhistory:'',
            chistory:'',
            did:''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
        this.validator= new SimpleReactValidator({autoForceUpdate:this})

    }
   
    changeHandler(e)  {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler (e) {
        e.preventDefault();
        var d = new Date();
        var NoTimeDate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        var Adate=this.state.adate;
        var d1=new Date(Adate); //yyyy-mm-dd  
        var d2=new Date(NoTimeDate); //yyyy-mm-dd 
        if(d1<d2){
            alert("Choose proper date")
        }
        else{
            if(this.state.dname=="Dr. Ananya(Dermatologist)"){
                this.state.did=1
                var DID=this.state.did
                var PID=document.getElementById("pid")
                PID.innerHTML="Doctor ID = " + DID ;
            }
            else if(this.state.dname=="Dr. Kashyap Kumar(General Physician)")
            {
                this.state.did=2
                var DID=this.state.did
                var PID=document.getElementById("pid")
                PID.innerHTML="Doctor ID = " + DID ;
            }
            else if(this.state.dname=="Dr. Girish Babu(Pediatrician)")
            {
                this.state.did=3
                var DID=this.state.did
                var PID=document.getElementById("pid")
                PID.innerHTML="Doctor ID = " + DID ;
            }
            else if(this.state.dname=="Dr. Nirmala H T(Gynecologist)")
            {
                this.state.did=4
                var DID=this.state.did
                var PID=document.getElementById("pid")
                PID.innerHTML="Doctor ID = " + DID ;
            }
            else
            {
                this.state.did=5
                var DID=this.state.did
                var PID=document.getElementById("pid")
                PID.innerHTML="Doctor ID = " + DID ;
            }
            axios.put(`http://localhost:8087/form/put/${this.state.id}`, this.state)
            .then(res => console.log(res.data));
            alert("Booked Appointment Successfully");
            this.props.history.push('/registrationSuccessful/');
        }
        
}
   
    render() {
        const {id,name, dname, adate, hhistory, chistory, did} = this.state
        return (
            <React.Fragment>
               
                    <h1 style={{textAlign:"center"}}>Book Your Appointment Here...!!</h1><br></br>
                    <form onSubmit={this.submitHandler} style={{marginTop:"20px",marginLeft:"600px"}}>
                    <div className="form-group">
                               <div className="col-md-5">     
                            Patient Id: <input type="number" className="form-control" name="id" placeholder="Id" value={id}
                                   onChange={this.changeHandler} required/>
                                   {this.validator.message("id",this.state.id,'number|required')}
                               </div>
                           </div><br></br>

                    <div className="form-group" >
                               <div className="col-md-5">     
                               Name: <input type="text" className="form-control" name="name" placeholder="Name" value={name}
                                   onChange={this.changeHandler} required/>
                                   {this.validator.message("name",this.state.name,'alpha|required')}
                               </div>
                    </div><br></br>
                   
                    <div className="form-group">
                               <div className="col-md-5">     
                            Doctor Name:
                                   <select className="form-control" name="dname" value={dname} onChange={this.changeHandler}>
                                   <option value="dname">--Select Doctor here--</option>
                                   <option value="Dr. Ananya(Dermatologist)">Dr. Ananya(Dermatologist)</option>
                                   <option value="Dr. Kashyap Kumar(General Physician)">Dr. Kashyap Kumar(General Physician)</option>
                                   <option value="Dr. Girish Babu(Pediatrician)">Dr. Girish Babu(Pediatrician)</option>
                                   <option value="Dr. Nirmala H T(Gynecologist)">Dr. Nirmala H T(Gynecologist)</option>
                                   <option value="Dr. Srikanth Hegde(Cardiologist)">Dr. Srikanth Hegde(Cardiologist)</option>
                                   </select>
                                   {this.validator.message("dname",this.state.dname,'string|required')}
                               </div>
                    </div><br></br>

                    <div className="form-group">
                               <div className="col-md-5">     
                               <p id="pid">Doctor Id: <input type="" className="form-control" name="did" value={did}
                                   onChange={this.changeHandler} readOnly/>
                                  {this.validator.message("did",this.state.did,'number|required')}</p>
                               </div>
                           </div><br></br>

                    <div className="form-group">
                               <div className="col-md-5">     
                            Appointment Date: <input type="date" className="form-control" name="adate" value={adate}
                                   onChange={this.changeHandler} required/>
                                  {this.validator.message("adate",this.state.adate,'date|required')}
                               </div>
                           </div><br></br>
                   
                    <div className="form-group">
                               <div className="col-md-5">     
                            HealthHistory: <textarea className="form-control" name="hhistory" value={hhistory} rows="3" placeholder="Enter your Health History" 
                            onChange={this.changeHandler} required></textarea>
                                   {this.validator.message("hhistory",this.state.hhistory,'string|min:10|max:150|required')}
                               </div>
                           </div><br></br>
                   
                    <div className="form-group">
                               <div className="col-md-5">     
                            Consultation History: <textarea className="form-control" name="chistory" value={chistory} rows="3" placeholder="Enter your Consultation History" 
                            onChange={this.changeHandler} required></textarea>
                                   {this.validator.message("chistory",this.state.chistory,'string|min:10|max:150|required')}
                               </div>
                           </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Confirm</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link exact to="/viewPrescription"><button type="submit" className="btn btn-primary">view Prescription</button></Link>

                </form>
            </React.Fragment>
        )
    }
}

export default BookAppointment;
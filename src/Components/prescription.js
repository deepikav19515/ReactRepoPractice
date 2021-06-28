import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from "simple-react-validator";

class prescription extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patientId:'',
            observation: '',
            medicine: '',
            data: []
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
        axios.post('http://localhost:8087/form/postpres', this.state)
        .then((response)=>{
            this.setState({data:response.data})
        
        console.log(this.state.data)
        alert("placed Prescription Successfully");
        this.props.history.push('/home/');
    })
}

    render() {
        const {patientId,observation,medicine} = this.state
        return (
            <React.Fragment>
               
            <h1 style={{textAlign:"center"}}>Provide patient prescription here...!!</h1><br></br>
            <form onSubmit={this.submitHandler} style={{marginTop:"20px",marginLeft:"600px"}}>
            <div className="form-group">
                       <div className="col-md-5">     
                    Patient Id: <input type="number" className="form-control" name="patientId" placeholder="Id" value={patientId}
                           onChange={this.changeHandler} required/>
                           {this.validator.message("patientId",this.state.patientId,'number|required')}
                       </div>
                   </div><br></br>

                   <div className="form-group">
                               <div className="col-md-5">     
                            Observation: <textarea className="form-control" name="observation" value={observation} rows="3" placeholder="Enter Observation here" 
                            onChange={this.changeHandler} required></textarea>
                                   {this.validator.message("observation",this.state.observation,'string|min:10|max:150|required')}
                               </div>
                           </div><br></br>


            <div className="form-group">
                               <div className="col-md-5">     
                            Medicine: <textarea className="form-control" name="medicine" value={medicine} rows="3" placeholder="Enter Medicine here" 
                            onChange={this.changeHandler} required></textarea>
                                   {this.validator.message("medicine",this.state.medicine,'string|min:10|max:150|required')}
                               </div>
                           </div><br></br>
           
            <br></br>
            <button type="submit" className="btn btn-primary">submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link exact to="/ViewAppointment"><button type="submit" className="btn btn-primary">Cancel</button></Link>

        </form>
    </React.Fragment>
        );
    }
}

export default prescription;
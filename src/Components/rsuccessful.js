import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from "simple-react-validator";

class rsuccessful extends Component{
    constructor(props) {
        super(props)

        this.state = {
            m:'',
            data:[]
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
        this.validator= new SimpleReactValidator({autoForceUpdate:this})

    }
   
    changeHandler(e)  {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler (e) {
        e.preventDefault()
    

        axios.get('http://localhost:8087/form/get')
            .then((response)=>{
                console.log(response)
                this.setState({data:response.data})
                var ulist=this.state.data.map(post => post.id)
                const m=Math.max(...ulist)
                console.log(m)
                var PID=document.getElementById("d1")
                PID.innerHTML="Patient ID = " + m ;

            })
        }

   
    render() {
        return (
            <React.Fragment>
                <form action="/" onSubmit={this.submitHandler}>
                <div>
            <div id='card' className="animated fadeIn">
        <div id='upper-side'>
            <i className="fa fa-check"></i>
            <h3 id='status'> Success </h3> 
        </div>
        <div id='lower-side'>
          <p id='message'>
            <b>Congratulations, You have Successfully registred</b>
            <p id="d1"></p>
          </p>
          <button id="contBtn" className="btn btn-primary">View Your ID</button>&nbsp;&nbsp;
          <Link exact to="/login"><button id="contBtn" className="btn btn-primary">Login</button></Link>
        </div>
      </div>
        </div>

                </form>
            </React.Fragment>
        )
    }
}

export default rsuccessful;
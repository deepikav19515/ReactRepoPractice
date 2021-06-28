import React, { Component } from "react";
import axios from 'axios';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
                userName:"",
                password:"",
                data:[],
                ulist:[],
                plist:[],
        };
        this.setUserName = this.setUserName.bind(this);
        this.setPassword = this.setPassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
setUserName=(e)=>{
  this.setState({userName:e.target.value});
}
setPassword=(e)=>{
    this.setState({password:e.target.value});
  }

handleSubmit(e){
    e.preventDefault();
    axios.get('http://localhost:8087/form/get')
     .then((response)=>{
        this.setState({data:response.data})
         var ulist=this.state.data.map(post => post.username + post.password)
         var plist=this.state.userName+this.state.password
         console.log(ulist)
          console.log(plist)
        for(let i of ulist){
         if( i === plist ) {
             alert("You have Successfully Logged In")
             this.props.history.push('/BookAppointment/');
             break;
        }
        else{
            console.log("unsuccessful")
        }
        }
    })
}


    render(){
        return(
            <React.Fragment>
            <center>
           <div className="container" style={{marginTop:"100px"}}>
           <h5>Sign In</h5>
               <div className="container" style={{marginTop:"40px"}}>
                   <form onSubmit={this.handleSubmit}>
                       
                       <div className="form-group">
                           <div className="col-md-3">
                               <input type="text" className="form-control" name="userName" value={this.state.userName} placeholder="UserName"
                               onChange={this.setUserName} required/>
                           </div>
                       </div><br></br>
                       <div className="form-group">
                           <div className="col-md-3">
                               <input type="password" className="form-control" name="password" value={this.state.password} placeholder="password"
                               onChange={this.setPassword} required/>
                           </div>
                       </div><br></br>
                       <div className="form-group row">
                           <div className="offset-sm-2 col-sm-6">
                            <button type="submit" className="btn btn-primary">SignIn</button>
                           </div>
                       </div>
                   </form>
               </div>
               
           </div>
           </center>
        </React.Fragment>


            
        );
    }
}

export default SignIn; 
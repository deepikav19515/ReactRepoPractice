import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from "simple-react-validator";

class signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            contact: '',
            location: '',
            username: '',
            password: ''
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
        if(this.validator.allValid()){
        axios.post('http://localhost:8087/form/post', this.state)
        .then((response)=>{
            this.setState({data:response.data})
        
        console.log(this.state.data)
        alert("Registered Successfully");
        this.props.history.push('./rsuccessful/');
        })
    }
    else{
        this.validator.showMessages();
        this.forceUpdate();
    }
}
    render() {
        const { name, contact, location, username, password} = this.state
        return (
            <React.Fragment>
               <form onSubmit={this.submitHandler} style={{marginTop:"20px",marginLeft:"600px"}}>
                    <h1>Patient Registration</h1><br></br>
                    
                    <div className="form-group">
                               <div className="col-md-4">     
                            Name: <input type="text" className="form-control" name="name" placeholder="Name" value={name}
                                   onChange={this.changeHandler} />
                                   {this.validator.message("name",this.state.name,'alpha|required')}
                               </div>
                           </div><br></br>
                   
                    <div className="form-group">
                               <div className="col-md-4">     
                            Contact: <input type="number" className="form-control" name="contact" placeholder="Contact" value={contact}
                                   onChange={this.changeHandler} />
                                   {this.validator.message("contact",this.state.contact,'number|required')}
                               </div>
                           </div><br></br>

                    <div className="form-group">
                               <div className="col-md-4">     
                            Location: <input type="text" className="form-control" name="location" placeholder="Location" value={location}
                                   onChange={this.changeHandler} />
                                   {this.validator.message("location",this.state.location,'string|min:5|max:50|required')}
                               </div>
                           </div><br></br>
                   
                    <div className="form-group">
                               <div className="col-md-4">     
                            UserName: <input type="text" className="form-control" name="username" placeholder="UserName" value={username}
                                   onChange={this.changeHandler} />
                                   {this.validator.message("username",this.state.username,'string|min:3|max:15|required')}
                               </div>
                           </div><br></br>
                   
                    <div className="form-group">
                               <div className="col-md-4">     
                            Password: <input type="password" className="form-control" name="password" placeholder="password" value={password}
                                   onChange={this.changeHandler} />
                                   {this.validator.message("password",this.state.password,'password|required')}
                               </div>
                           </div>
                    <br></br>

                    <button type="submit" className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link exact to="/login"><button type="submit" className="btn btn-primary">Login</button></Link>

                </form>
            </React.Fragment>
        );
    }
}

export default signup;
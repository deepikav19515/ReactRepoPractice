import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from "simple-react-validator";

class ViewAppointment extends Component{
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            data:[],
            ulist:[],
            vlist:[],
            plist: [],
            dlist:[]

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
        axios.get('http://localhost:8087/form/get')
        .then((response)=>{
            this.setState({data:response.data})
        var plist=this.state.data.map(post => post.did+" "+post.name+" "+post.id+" "+post.hhistory+" "+post.chistory+" "+post.adate+" "+post.contact)
        var dlist=this.state.dlist;
        for(let p of plist){
           var arr = p.split(" ")
            var a = arr[0]
            if(a==this.state.id){
                console.log('success')
                dlist.push(p)
                 this.setState({
                    dlist
                });
            }
            else{
                console.log("unsuccessful")
            }
        }
        var Display=document.getElementById("display")
        Display.innerHTML= dlist;
        for(let i of dlist){
           dlist.splice(i)
           i--;
        }
    })
}
   
    render() {
        const {id} = this.state
        return (
            <React.Fragment>
               
                    <h1 style={{textAlign:"center"}}>View Your Appointment Here...!!</h1><br></br>
                    <form onSubmit={this.submitHandler} style={{marginTop:"20px",marginLeft:"600px"}}>
                    <div className="form-group">
                               <div className="col-md-4">     
                           Doctor Id: <input type="number" className="form-control" name="id" placeholder="Id" value={id}
                                   onChange={this.changeHandler} required/>
                                   {this.validator.message("id",this.state.id,'number|required')}
                               </div>
                    </div><br></br>
                    <div style={{border:"2px black solid",width:"370px",height:"150px"}}>
                   <div style={{color:"blue",backgroundColor:"skyBlue",fontSize:"16px"}}><i >d_id, p_name, pid, hhistory, chistory, adate, contact</i></div>
                        <p id="display"></p>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Confirm</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link exact to="/prescription"><button type="submit" className="btn btn-primary">prescription</button></Link>

                </form>
            </React.Fragment>
        )
    }
}

export default ViewAppointment;
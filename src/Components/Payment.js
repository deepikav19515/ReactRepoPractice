import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from "simple-react-validator";

class payment extends Component {

    constructor(props) {
        super(props)

        this.state = {
            patientId:'',
            cardType:'',
            name:'',
            cardNo:'',
            expiryDate:'',
            cvv:'' ,
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
        e.preventDefault();
        var d = new Date();
        var NoTimeDate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        var Adate=this.state.expiryDate;
        var d1=new Date(Adate); //yyyy-mm-dd  
        var d2=new Date(NoTimeDate); //yyyy-mm-dd 
        if(d1<d2){
            alert("Choose proper date")
        }
        else{
            if(this.validator.allValid()){
            axios.post(`http://localhost:8087/form/postpay`, this.state)
            .then(res => console.log(res.data));
            //alert("payment Successful");
           this.props.history.push('/paymentSuccess/');
            }
            else{
                this.validator.showMessages();
                this.forceUpdate();
            }
        }
    }
    render() {
        const {patientId,cardType,name,cardNo,expiryDate,cvv} = this.state
        return (
            
                <React.Fragment>
               
               <h1 style={{textAlign:"center"}}>Payment</h1><br></br>
               <form onSubmit={this.submitHandler} style={{marginTop:"20px",marginLeft:"600px"}}>
               <div className="form-group">
                          <div className="col-md-5">     
                       Patient Id: <input type="number" className="form-control" name="patientId" placeholder="Patient Id" value={patientId}
                              onChange={this.changeHandler}/>
                              {this.validator.message("patientId",this.state.patientId,'number|required')}
                          </div>
                      </div><br></br>

               <div className="form-group" >
                          <div className="col-md-5">     
                          Consultation Fee: <input type="text" className="form-control" name="cfee"  value={500}
                              onChange={this.changeHandler} readOnly/>
                              {/* {this.validator.message("cfee",this.state.cfee,'alpha|required')} */}
                          </div>
               </div><br></br>
              
               <div className="form-group">
                          <div className="col-md-5">     
                       Card Type:
                              <select className="form-control" name="cardType" value={cardType} onChange={this.changeHandler}>
                              <option value="cardType">--Select your card Type--</option>
                              <option value="Credit Card">Credit Card</option>
                              <option value="Debit Card">Debit Card</option>
                             </select>
                              {this.validator.message("cardType",this.state.cardType,'string|required')}
                          </div>
               </div><br></br>

               <div className="form-group">
                          <div className="col-md-5">     
                       Name as on Card: <input type="text" className="form-control" name="name" value={name}
                              onChange={this.changeHandler}/>
                             {this.validator.message("name",this.state.name,'alpha|required')}
                          </div>
                      </div><br></br>

                      <div className="form-group">
                          <div className="col-md-5">     
                     Card Number: <input type="number" className="form-control" name="cardNo" value={cardNo}
                              onChange={this.changeHandler}/>
                             {this.validator.message("cardNo",this.state.cardNo,'number|min:16|max:16|required')}
                          </div>
                      </div><br></br>

                      <div className="form-group">
                          <div className="col-md-5">     
                     Expiry Date: <input type="date" className="form-control" name="expiryDate" value={expiryDate}
                              onChange={this.changeHandler} />
                             {/* {this.validator.message("expiryDate",this.state.expiryDate,'required')} */}
                          </div>
                      </div><br></br>

                      <div className="form-group">
                          <div className="col-md-5">     
                     CVV: <input type="number" className="form-control" name="cvv" value={cvv}
                              onChange={this.changeHandler} />
                             {this.validator.message("cvv",this.state.cvv,'number|min:3|max:4|required')}
                          </div>
                      </div><br></br>
               <button type="submit" className="btn btn-primary">Pay Now</button>&nbsp;&nbsp;&nbsp;&nbsp;
               <Link exact to="/home"><button type="submit" className="btn btn-primary">Cancel</button></Link>

           </form>
       </React.Fragment>
                
            
        );
    }
}

export default payment;
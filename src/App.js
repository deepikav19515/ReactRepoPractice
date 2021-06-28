// import logo from './logo.svg';
// import './App.css';
// import SimpleComponent from './SimpleComponent';
// import PropsExample from './PropsExample';
// import ClassComp from './ClassComp';
// import ClassCounter from './ClassCounter';
// import HookCounter from './HookCounter';
// import ListNames from './ListNames';
// import ProductList from './ProductList';
// import ReactForm from './ReactForm';
// import GetReactData from './GetReactData';
// import PostExample from './PostExample';
// import CounterOne from './CounterOne';
// import GetDataById from './GetDataById';
// import PostMethod from './PostMethod';
// import GetMethod from './GetMethod';
// import RegisterTest from './RegisterTest';

 
// function App() {
//   return (
//     <div className="App">
//      <h1>Welcome to sonata</h1>
//      {/* <SimpleComponent></SimpleComponent>
//      <SimpleComponent name="sonata" age={20}></SimpleComponent>
//      <PropsExample name='charitha' age={23}></PropsExample>
//      <PropsExample name='sonata' age={30}> 
//        <h1>This is Simple Props</h1>
//      </PropsExample>
//      <ClassComp></ClassComp>
//      <ClassCounter></ClassCounter>
//       <HookCounter></HookCounter>
//       <ListNames></ListNames>
//       <ProductList></ProductList> */}
//       {/* <ReactForm></ReactForm> */}
//       {/* <GetReactData></GetReactData> */}
//       {/* <PostExample></PostExample>
//       <CounterOne></CounterOne> */}
//       {/* <GetDataById></GetDataById> */}
//       {/* <PostMethod></PostMethod> */}
//       {/* <GetMethod></GetMethod> */}
//       <RegisterTest></RegisterTest>
//     </div>
//   );
// }
 
// export default App;
import React,{Component} from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import Navbar from "./Components/navbar/navbar";
import SignUp from "./Components/registration/signup";
import SignIn from "./Components/registration/login";
import registrationSuccessful from "./Components/registrationSuccessful";
import './Components/styleSheet.css';
import BookAppointment from "./Components/BookAppointment";
import doctorlogin from "./Components/registration/doctorlogin";
import ViewAppointment from "./Components/ViewAppointment";
import prescription from "./Components/prescription";
import viewPrescription from "./Components/viewPrescription";
import Payment from "./Components/Payment";
import PaymentSuccess from "./Components/paymentSuccess";
import rsuccessful from "./Components/rsuccessful";



class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={SignIn}/>
                <Route path="/registrationSuccessful" component={registrationSuccessful}/>
                <Route path="/BookAppointment" component={BookAppointment}/>
                <Route path="/doctorlogin" component={doctorlogin}/>
                <Route path="/ViewAppointment" component={ViewAppointment}/>
                <Route path="/prescription" component={prescription}/>
                <Route path="/viewPrescription" component={viewPrescription}/>
                <Route path="/Payment" component={Payment}/>
                <Route path="/PaymentSuccess" component={PaymentSuccess}/>
                <Route path="/rsuccessful" component={rsuccessful}/>
               
                {/* <Redirect path="/signIn"/> */}
                </Switch>
            </div>
        )
    }
}
export default App;

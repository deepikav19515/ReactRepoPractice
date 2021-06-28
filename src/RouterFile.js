import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import User from './Components/User';
import Contact from './Components/Contact';
import App from './App';
import Notfound from './Components/NotFound';
import AboutUs from './Components/AboutUs';
const routing=(
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/:id" component={User} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={AboutUs} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)
export default routing
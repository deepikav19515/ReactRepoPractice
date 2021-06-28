import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Doctor Consultation System</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Registration</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/test">Test</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;
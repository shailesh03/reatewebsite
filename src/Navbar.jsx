import React from 'react';
import {NavLink} from 'react-router-dom';


const  Navbar = () => {
  return (
    <div className="header-top-main"> 
        <div className="container ">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand brandname" to="/">SBTechnical</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/service">Service</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/contact">Cantact Us</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  );
}

export default Navbar;

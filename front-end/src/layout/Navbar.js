import React from 'react'
import { NavLink } from "react-router-dom";



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className='container'>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">React User</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" exact to="/Home">
                    Home
                    </NavLink>
                </li>
               
                
                </ul>
            </div>
            </div>
            <NavLink className="btn btn-outline-light" to='/user/Add'>Add Customer</NavLink>
        </div>
      </nav>

           
    )
}

export default Navbar

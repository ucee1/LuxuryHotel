import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar  navbar-expand-lg">
        <div  className="container-fluid">
        <a className="navbar-brand text-light " href="#"><h4>Hotell</h4></a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-light" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item dropdown destination">
                {/* <Link to="/Destination" className="nav-link dropdown-toggle text-light" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Destination
                </Link> */}
                <Link to="/Destination" className="nav-link text-light" href="#">Destination</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                             
               
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link text-light" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/Services" className="nav-link text-light">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link text-light">Contact</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        

            <li className="nav-item">
                    
           <a className="nav-link text-light"><i className="bi bi-telephone-fill text-light"></i> +234 9098572601</a>
            </li>
            </ul>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;

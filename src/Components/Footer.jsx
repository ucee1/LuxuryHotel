import React from 'react';
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='endservices'>
    

         
    <footer className="footer text-dark pt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h6>HOME</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">About Us</a></li>
              <li><a href="#" className="text-muted">Places</a></li>
              <li><a href="#" className="text-muted">Service</a></li>
              <li><a href="#" className="text-muted">Destination</a></li>
              <li><a href="#" className="text-muted">Terms</a></li>
              <li><a href="#" className="text-muted">Privacy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6>Practice Area</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Travel</a></li>
              <li><a href="#" className="text-muted">Popular Places</a></li>
              <li><a href="#" className="text-muted">Destination</a></li>
              <li><a href="#" className="text-muted">Tour</a></li>
              <li><a href="#" className="text-muted">Family Vacation</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6>Service</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Tour</a></li>
              <li><a href="#" className="text-muted">Swimming</a></li>
              <li><a href="#" className="text-muted">Kayak</a></li>
              <li><a href="#" className="text-muted">Surfing</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6>Contact</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">1 Benny Ottu street F01</a></li>
              <li><a href="#" className="text-muted">+234 9098572601</a></li>
              <li><a href="mailto:princeuzoma27@gmail.com" className="text-muted">princeuzoma27@gmail.com</a></li>
            </ul>
            <div className="d-flex">
              <a href="#" className="text-muted me-3">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-muted me-3">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
              <a href="#" className="text-muted me-3">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-muted">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light text-center py-3">
        <div className="container">
          <p className="mb-0">&copy; 2014 Copyright Text@Ucee Design</p>
          <a href="#" className="text-muted">More Links</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

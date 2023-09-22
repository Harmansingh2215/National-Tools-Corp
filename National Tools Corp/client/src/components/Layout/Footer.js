import React from "react";
import { Link } from "react-router-dom";
import {FooterStyle} from '../../../src/styles/FooterStyle.css'
const Footer = () => {
  return (
    
  
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h2><b>National Tools Corp</b></h2>
            <p class="text-justify"><h6>Address:</h6>Raja Garden Colony, Village Gadaipur Jalandhar Punjab 144008</p>
            <p class="text-justify"><h6>Phone No:</h6>9417125527</p>
            <p class="text-justify"><h6>Email:</h6>nationaltoolsvices@gmail.com</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h4>Why Shop with us?</h4>
            <ul class="footer-links">
              <li><h5>Customer Satisfaction</h5></li>
              <li><h5>Quality Assurance</h5></li>
              <li><h5>Timely Deliver</h5></li>
              <li><h5>Secure Payements</h5></li>
              
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h4>Quick Links</h4>
            <ul class="footer-links">
            <li><h5><Link to="/" className="nav-link ">
                        Home
                      </Link></h5></li>
              <li><h5><Link to="/about" className="nav-link ">
                        About
                      </Link></h5></li>
              <li><h5><Link to="/categories" className="nav-link ">
                        Categories
                      </Link></h5></li>
              <li><h5><Link to="/contact" className="nav-link ">
                        Contact
                      </Link></h5></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright 2023 All Rights Reserved by 
         National Tools.
            </p>
          </div>

          {/* <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div> */}
        </div>
      </div>
</footer>
    
    
  );
};

export default Footer;

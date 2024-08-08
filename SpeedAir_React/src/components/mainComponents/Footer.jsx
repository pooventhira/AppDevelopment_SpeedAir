import React from 'react';
import '../../assets/styles/mainStyles/Footer.css';
import GooglePlay from '../../assets/images/mainImages/GooglePlay.png';
import AppleStore from '../../assets/images/mainImages/AppleStore.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Speed<span>Air</span></h2>
          <p>Send anything, <br/>anywhere, anytime</p>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>Services</li>
              <li>API Integrations</li>
              <li>Courier</li>
              <li>Packers & Movers</li>
              <li>Two Wheelers</li>
              <li>Trucks</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
              <li>Insurance FAQs</li>
              <li>Terms & Conditions</li>
              <li>Zero Tolerance Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer-app-links">
          <img src={GooglePlay} alt="Google Play" />
          <img src={AppleStore} alt="App Store" />
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-locations">
          <h3>We are here</h3>
          <ul>
            <li>Delhi NCR</li>
            <li>Chandigarh</li>
            <li>Ahmedabad</li>
            <li>Coimbatore</li>
            <li>Hyderabad</li>
            <li>Jaipur</li>
            <li>Surat</li>
            <li>Ludhiana</li>
            <li>Bangalore</li>
            <li>Chennai</li>
            <li>Nagpur</li>
            <li>Kochi</li>
            <li>Mumbai</li>
            <li>Kolkata</li>
            <li>Lucknow</li>
            <li>Nashik</li>
            <li>Vadodara</li>
            <li>Indore</li>
            <li>Pune</li>
            <li>Kanpur</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#!"><i className="fa-brands fa-instagram"></i></a>
          <a href="#!"><i className="fa-brands fa-facebook"></i></a>
          <a href="#!"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#!"><i className="fa-brands fa-youtube"></i></a>
          <a href="#!"><i className="fa-brands fa-twitter"></i></a>
        </div>
        <div className="footer-legal">
          <p>© 2024 AirSpeed, Inc. All rights reserved | CIN: U74999MH2014PTC306120</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
    <div className="footer-social">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
    </div>
    <div className="footer-desc">
      <h2>Midlumes Consultancy</h2>
      <p>
        We at MIDLUMES CONSULTANCY deliver quality, creativity, and innovation with a global mindset, empowering businesses to succeed
      </p>
    </div>
    <ul className="footer-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#bookings">Bookings</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer-copyright">
      © 2025 Midlumes Consultancy Services Limited. All rights reserved. Made with <span className="footer-heart"><FaHeart /></span>
    </div>
    
  </div>
);

export default Footer;
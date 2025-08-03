import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">NextInn Technology</h3>
            <p>Copyright © 2025 All rights reserved</p>
            <p>Crafted with ❤️ by Manas Ranjan Arukha</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              {/* <li>
                <a href="#contact">Contact</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

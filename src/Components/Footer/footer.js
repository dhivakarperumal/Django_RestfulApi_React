import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Our E-Learning Platform is committed to providing high-quality online education. Explore courses, develop skills, and expand your horizons with us!
            </p>
            <Link to="/about" className="text-light">
              Learn More
            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/courses" className="text-light">Courses</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
              <li><Link to="/about" className="text-light">About</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@elearningplatform.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 E-Learning Street, Knowledge City</p>

            {/* Social Media Links */}
            <div className="social-links mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} E-Learning Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

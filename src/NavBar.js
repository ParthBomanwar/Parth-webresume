import React from 'react';
import './NavBar.css'


const Navbar = () => {
  
  
    return (
      <div className="navbar">
        <div className="navbar__tools">
        <img 
        className="navbar-image"
        src={process.env.PUBLIC_URL + '/Icon.png'}
        alt="Netflix Logo"
        />
          <a href="#skills" className="navbar__link">Skills</a>
          <a href="#certifications" className="navbar__link">Certifications</a>
          <a href="#projects" className="navbar__link">Projects</a>
          <a href="#experience" className="navbar__link">Experience</a>
          <a href="#responsibilities" className="navbar__link">Responsibilities</a>
          <a href="#education" className="navbar__link">Education</a>
        </div>
        <div className="navbar__tools">
          <a
            href="https://www.linkedin.com/in/parthbomanwar/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ParthBomanwar007"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            Github
          </a>
          <a
            href="https://medium.com/@parthbomanwar"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            Medium
          </a>
        </div>
        <div className="navbar__tools">
          <p className="navbar__info">Nagpur, Maharashtra | +91 9404975167| parthbomanwar1@gmail.com</p>
        </div>
      </div>
    );
  };

export default Navbar;

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h2 className="h1">
        <span className="accent-underline">About Me</span>
      </h2>
      <div className="container">
        <p className="lead">
        Motivated Computer Science and Engineering student with a strong passion for Cybersecurity, Artificial
       Intelligence, Machine Learning, and Web Development. Skilled in digital forensics, malware analysis, and cloud
      computing principles, with a strong foundation in programming and operating systems. Seeking opportunities to
       apply technical skills, leadership experience, and industry knowledge in a dynamic and innovative environment.
      </p>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default Header;


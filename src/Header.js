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
       Recent B.Tech graduate in Computer Science and Engineering with a strong foundation in programming, object-oriented
    programming, data structures, databases, cybersecurity, Salesforce, and AI/ML. Quick learner with strong analytical and
  problem-solving skills, eager to apply technical knowledge and contribute to real-world projects.
      </p>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default Header;


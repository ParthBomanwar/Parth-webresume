import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      school: 'St. Vincent Pallotti College of Engineering and Technology',
      program: 'B.Tech in Computer Science and Engineering(Cybersecurity)',
      location: 'Nagpur, Maharashtra',
      date: '11/2022 - 06/2026',
      grades: 'Expected 2026, CGPA 8.43'
    },
    {
      school: 'Shree Maharshi Vidya Mandir',
      program: '12th in Science',
      location: 'Chandrapur, Maharashtra',
      date: '07/2020-05/2022',
      grades: '74.6%'
    },
    {
      school: 'School of Scholars',
      program: '10th',
      location: 'Gadchiroli, Maharashtra',
      date: '06/2011 - 05/2020',
      grades: '83.3%'
    }
  ];

  return (
    <div className="education-container">
      <h2 className="h1">
        <span className="accent-underline">Education</span>
      </h2>

      <div className="education-list">
        {educationData.map((entry, index) => (
          <div className="education-item" key={index}>
            <h3>{entry.school}</h3>
            <p>{entry.program}</p>
            <p>{entry.location}</p>
            <p className="dates-grades">{entry.date} {entry.grades ? `(${entry.grades})` : ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;


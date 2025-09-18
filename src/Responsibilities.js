import React, { useState } from 'react';
import './Responsibilities.css';

const Responsibilities = ({ id }) => {
  const [hoveredResponsibilities, setHoveredResponsibilities] = useState(null);
  const responsibilitiesData = [
    {
      organization: 'EncipherX 3.0 (Technex 2025)',
      role: 'CTF Developer',
      location: 'Nagpur, Maharashtra',
      date: '01/2025',
      details: [
        'Worked as a CTF Developer at EncipherX 3.0, part of Technex 2025, a national-level tech event organized by the college.',
        'Designed and developed 7 digital forensics and steganography challenges for the Capture The Flag (CTF) competition.',
        'Focused on realistic scenarios and hands-on problem-solving to enhance participant engagement.',
        'Contributed to overall event planning and execution, ensuring smooth coordination throughout the competition.'
      ]
    },
    {
      organization: 'Student Council (SADC)',
      role: 'Member',
      location: 'Nagpur, Maharashtra',
      date: '2022 - Present',
      details: [
        'Serving as a Member of the Student Council for the past three academic years, actively contributing to campus leadership.',
        'Played a key role in organizing academic, cultural, and technical events throughout the academic year.',
        'Fostered communication between students and faculty to support a positive and collaborative learning environment.',
        'Contributed to event coordination and student representation across multiple academic sessions.'
      ]
    },
    {
      organization: 'Cyberpunk (Departmental Event)',
      role: 'Coordinator',
      location: 'Nagpur, Maharashtra',
      date: '05/10/2024',
      details: [
        'Organized and managed the organization\'s events and activities.',
        'Collaborated with the team to ensure the success of the events.',
        'Managed the organization\'s budget and resources.',
        'Led strategic planning and decision-making processes for student initiatives.'
      ]
    },
    {
      organization: 'Technex (National Level Event)',
      role: 'Promotion Head',
      location: 'Nagpur, Maharashtra',
      date: '21/01/2025',
      details: [
        'As Promotion Head of Technex 25, I was responsible for planning and executing the fest\'s publicity and outreach strategy. The role involved leading a team to design campaigns, managing social media presence, coordinating with different event committees, collaborating with partner colleges, and ensuring maximum visibility and participation for the national-level fest.'
      ]
    }
  ];

  return (
    <div className="responsibilities-container" id={id}>
      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">Responsibilities & Activities</span>
      </h2>

      <div className="responsibilities-list">
        {responsibilitiesData.map((entry, index) => (
          <div
            className="responsibilities-item"
            key={index}
            onMouseEnter={() => setHoveredResponsibilities(index)}
            onMouseLeave={() => setHoveredResponsibilities(null)}
          >
            <div className="responsibilities-content">
              <h3>{entry.role} at {entry.organization}</h3>
              {hoveredResponsibilities === index && (
                <div className="responsibilities-details">
                  <p>{entry.location}</p>
                  <p className="dates">{entry.date}</p>
                  <ul>
                    {entry.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Responsibilities;

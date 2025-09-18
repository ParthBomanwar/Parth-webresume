import React, { useState } from 'react';
import './Experience.css';

const Experience = ({ id }) => {
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const experienceData = [
    {
      company: 'Skillcraft Technologies',
      role: 'Cybersecurity Intern',
      location: 'Remote',
      date: '06/2025',
      details: [
        'Completed a 1-month internship focused on core cybersecurity practices, demonstrating a strong grasp of technical concepts and security operations.',
        'Gained hands-on experience in network security, vulnerability management, and malware analysis to assist in securing enterprise systems.',
        'Received positive recognition for work ethic, professionalism, and ability to handle complex tasks independently.',
        'Key Skills: Network Security, Python, Cybersecurity basics'
      ]
    },
    {
      company: 'Shell-Edunet-AICTE',
      role: 'AI Intern',
      location: 'Remote',
      date: '06/2025 - 07/2025',
      details: [
        'Completed a 4-week internship focused on AI applications for sustainability.',
        'Developed an E-Waste Classification Model using EfficientNetV2B0, involving data preprocessing, model training, and evaluation.',
        'Presented the project to industry experts.',
        'Key Skills: Machine Learning, Deep Learning, Data Preprocessing, Model Evaluation, EfficientNet, Presentation Skills'
      ]
    },
    {
      company: 'Intel',
      role: 'Intel Unnati Industrial Training',
      location: 'Remote',
      date: '05/2024 - 07/2024',
      details: [
        'Completed industrial training focused on real-time AI for intelligent transportation systems.',
        'Worked on detecting vehicle cut-ins using AI-based vision models under expert mentorship.',
        'Key Skills: Computer Vision, AI in Automotive, Real-Time Model Deployment, Python, OpenCV, Model Training'
      ]
    }
  ];

  return (
    <div className="experience-container" id={id}>
      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">Work Experience</span>
      </h2>

      <div className="experience-list">
        {experienceData.map((entry, index) => (
          <div
            className="experience-item"
            key={index}
            onMouseEnter={() => setHoveredExperience(index)}
            onMouseLeave={() => setHoveredExperience(null)}
          >
            <div className="experience-content">
              <h3>{entry.role} at {entry.company}</h3>
              {hoveredExperience === index && (
                <div className="experience-details">
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

export default Experience;


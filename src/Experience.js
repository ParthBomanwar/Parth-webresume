import React, { useState } from 'react';
import './Experience.css';

const Experience = ({ id }) => {
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const experienceData = [
    {
      company: 'Maharashtra Remote Sensing Application Center',
      role: 'Project Intern',
      location: 'Nagpur',
      date: '01/2026 - Current',
      details: [
        'Developing an AI-driven LULC classification system using satellite imagery for accurate land cover mapping.',
        'Applying image preprocessing, feature extraction, and deep learning models integrated with GIS tools (QGIS) for spatial analysis and visualization.',
        'Collaborating with researchers to evaluate model performance and improve classification accuracy.',
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



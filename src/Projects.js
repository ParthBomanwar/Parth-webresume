import React from 'react';
import './Projects.css';

const Projects = ({ id }) => {

  const projectData = [
    {
      title: 'Real-Time Vehicle Detection Model',
      description: 'Python, TensorFlow, OpenCV',
      image: process.env.PUBLIC_URL + '/1.png',
      details: [
        'Built an object detection system using Python, TensorFlow, and OpenCV.',
        'Preprocessed data, extracted features, trained models, and optimized detection accuracy.',
        'Integrated the model into a broader AI solution in a collaborative setting.'
      ],
      links: {
        github: 'https://github.com/ParthBomanwar007/Real-Time-Vehicle-Detection'
      }
    },
    {
      title: 'Kubernetes Based Malware Analysis Sandbox',
      description: 'Docker, Kubernetes, Python, Cuckoo Sandbox',
      image: process.env.PUBLIC_URL + '/2.png',
      details: [
        'A Kubernetes-based malware analysis sandbox where potentially malicious software is run in isolated containers managed by Kubernetes.',
        'Implemented container orchestration platform for secure malware analysis.',
        'Developed automated analysis pipeline using Cuckoo Sandbox integration.'
      ],
      links: {
        github: 'https://github.com/ParthBomanwar007/Kubernetes-Malware-Sandbox'
      }
    },
    {
      title: 'Parking Management System',
      description: 'Python, MySQL, PHP',
      image: process.env.PUBLIC_URL + '/3.png',
      details: [
        'Parking Management System is a Python project using MySQL with mysql-connector.',
        'Manages parking slots by allowing users to add, update, delete, and view vehicle entries.',
        'Stores vehicle details in a MySQL database with full CRUD operations.'
      ],
      links: {
        github: 'https://github.com/ParthBomanwar007/Parking-Management-System'
      }
    },
    {
      title: 'E-Waste Generation Classification',
      description: 'Artificial Intelligence, Deep Learning, Machine Learning, TensorFlow, Python',
      image: process.env.PUBLIC_URL + '/4.png',
      details: [
        'Developed an image classification model to categorize E-Waste into 10 distinct classes, including Battery, Mobile, PCB, and others.',
        'Utilized EfficientNetV2B0 as the base model with transfer learning to leverage pre-trained weights and improve convergence speed.',
        'Applied data augmentation techniques (rotation, flipping, zooming) and incorporated dropout layers to enhance model generalization and reduce overfitting.',
        'Thoroughly evaluated model performance using accuracy and loss curves across training and validation sets, along with confusion matrix for class-wise analysis.',
        'Deployed the final model using Gradio, providing an interactive web interface for real-time image predictions.'
      ],
      links: {
        github: 'https://github.com/ParthBomanwar007/E-Waste-Generation-Classification'
      }
    } 
  ];

  return (
    <div className="projects-container" id={id}>
      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">Technical Projects</span>
      </h2>
      <div className="project-items">
        {projectData.map((project, index) => (
          <div
            className="project-item"
            key={index}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <div className="project-header">
                <span className="project-title">{project.title}</span>
              </div>
              <div className="project-details">
                <p>{project.description}</p>
                <ul>
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.links.backend && (
                    <a href={project.links.backend} target="_blank" rel="noopener noreferrer">
                      Backend
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
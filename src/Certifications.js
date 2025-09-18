import React, { useState } from 'react';
import './Certifications.css';

const Certifications = ({ id }) => {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certificationsData = [
    { name: 'Cisco Python', url: 'https://www.credly.com/badges/ef8348dd-8059-4071-8716-d100683b9d80/public_url', image: process.env.PUBLIC_URL + '/Cisco Python.jpg'  },
    { name: 'Introduction to IOT (Cisco)', url: 'https://www.credly.com/badges/48643edc-1878-4c11-9a09-4ee7df493e76/public_url', image: process.env.PUBLIC_URL + '/Cisco IOT.jpg'  },    
    { name: 'Introduction to Cybersecurity (Cisco)', url: 'https://www.credly.com/badges/b9597c2a-0f83-47b7-8805-461b8581bb7c/public_url', image: process.env.PUBLIC_URL + '/Cisco Cybersecurity.jpg'  },
    { name: 'Google Cybersecurity Professional Certificate (Google)', url: 'https://www.credly.com/badges/2933a1c2-dfdf-4f43-92b4-564bf5acf69b/public_url', image: process.env.PUBLIC_URL + '/Google Cybersecurity.jpg'  },
    { name: 'Cybersecurity job simulation by Mastercard', url: 'https://www.theforage.com/simulations/mastercard/cybersecurity-t8ye', image: process.env.PUBLIC_URL + '/Mastercard.jpg'  },
    { name: 'Security Operations Center by IBM', url: 'https://www.credly.com/badges/5dc00165-1440-40b3-9601-a356e2711cc9/public_url', image: process.env.PUBLIC_URL + '/IBM.jpg'  },
    { name: 'Software Engineering Job Simulation by Accenture', url: 'https://www.credly.com/badges/e0d81348-c8ba-4633-9707-cd822b2e800f/linked_in_profile', image: process.env.PUBLIC_URL + '/Accenture.jpg'  },
    { name: 'Cybersecurity analyst job simulation by TATA', url: 'https://www.theforage.com/simulations/tata/cybersecurity-sbda', image: process.env.PUBLIC_URL + '/TATA.jpg'  },
    { name: 'Cyber Threat Intelligence by arcX', url: 'https://www.credly.com/badges/e0d81348-c8ba-4633-9707-cd822b2e800f/linked_in_profile', image: process.env.PUBLIC_URL + '/arcX.jpg'  },
    { name: 'Information Security by Swayam', url: 'https://www.credly.com/badges/e0d81348-c8ba-4633-9707-cd822b2e800f/linked_in_profile', image: process.env.PUBLIC_URL + '/Swayam.jpg'  },
    { name: 'MyCaptain Ethical Hacking', url: 'https://www.credly.com/badges/e0d81348-c8ba-4633-9707-cd822b2e800f/linked_in_profile', image: process.env.PUBLIC_URL + '/MyCaptain Ethical Hacking.jpg'  },
    { name: 'HackerRank SQL(Basic)', url: 'https://www.hackerrank.com/certificates/aafecca0baba', image: process.env.PUBLIC_URL + '/SQL.jpg'  }
  ];

  return (
    <div className="certifications-container" id={id}>
      <h2 className="h1">
        <span className="accent-underline">Certifications</span>
      </h2>
      <div className="certifications-carousel">
        {certificationsData.map((cert, index) => (
          <div
            className="certification-item"
            key={index}
            onMouseEnter={() => setHoveredCert(index)}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <img src={cert.image} alt={cert.name} className="certification-image" />
            {hoveredCert === index && (
              <div className="certification-overlay">
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="certification-link">
                  <span className="certification-name">{cert.name}</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

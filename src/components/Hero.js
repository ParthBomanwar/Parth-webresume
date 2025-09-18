import React from "react";
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* subtle top spotlight */}
      <div aria-hidden style={{
        position:"absolute", inset:0, zIndex:0,
        background:"radial-gradient(800px 400px at 50% 0%, rgba(229,9,20,0.15), transparent 60%)"
      }}/>
      <div className="container hero-content">
        <div className="hero-profile">
          <img 
            src={process.env.PUBLIC_URL + '/IMG.jpg'}
            alt="Parth Bomanwar Profile"
            className="hero-image"
          />
          <h2 className="hero-name">Parth Bomanwar</h2>
        </div>

        <p className="lead hero-paragraph">
          Electronics & Telecommunication undergrad specializing in <strong>AI/ML & Data Science</strong>.
          I turn messy data into decisions, and I’m currently looking for a <strong>Data Scixence/AI/ML Internship</strong>.
        </p>

        <p className="lead hero-paragraph">
          Certified in AI, Cybersecurity,Python,SOC, Digital Forensics,  SQL, and real-world projects.
        </p>

        <div className="hero-buttons" style={{display:"flex", gap:"1rem", flexWrap:"wrap"}}>
          <a className="btn-primary" href="#projects">See Projects</a>
          <a className="btn-primary" href="#experience">
            Work Experience
          </a>
        </div>
      </div>
    </section>
  );
}

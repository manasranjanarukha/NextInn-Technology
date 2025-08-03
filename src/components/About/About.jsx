import React from "react";
import "./About.css";
import aboutImage from "../../assets/images/About-Image.webp";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* About Content */}
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="about" />
          </div>

          <div className="about-title">
            <h3 className="about-heading">About NextInn Technology</h3>
            <p>
              NextInn Technology is a forward-thinking IT service company that
              provides cutting-edge solutions in mobile app development and web
              development across various platforms including Flutter, Android,
              iOS, React, and Node etc.. Our mission is to drive innovation and
              deliver excellence in all our projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

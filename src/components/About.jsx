import React from 'react';

function About() {
  return (
    <section id="about" className="min-vh-100 d-flex align-items-center justify-content-center py-5 bg-gradient">
      <div className="container">
        <h2 className="display-4 fw-bold text-center mb-5">
          <span role="img" aria-label="spark"></span> About Me
        </h2>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div
              className="rounded-circle shadow-lg bg-light d-flex justify-content-center align-items-center mx-auto"
              style={{ width: '192px', height: '192px', border: '4px solid #0d6efd' }}
            >
              <img
                src="/assets/dumindu-photo.jpg"
                alt="Dumindu Tharushika"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div style={{ maxWidth: '600px' }}>
              <h3 className="h2 fw-semibold mb-3">
                Here is a <span className="text-decoration-underline text-primary">little</span> background
              </h3>
              <p className="text-muted lh-lg">
                I'm an ambitious Software Engineering undergraduate with a deep passion for Data Science and AI/ML.
                With hands-on experience in Python, Java, and frameworks like Spring Boot and React, I specialize in
                building scalable systems and intelligent solutions using machine learning and LLMs. I thrive on
                innovation, performance optimization, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
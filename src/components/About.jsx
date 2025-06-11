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
                src="src/assets/dumindu-photo.jpg"
                alt="Dumindu Tharushika"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div style={{ maxWidth: '600px' }}>
              <h3 className="h2 fw-semibold mb-3">
                <span className="text-primary">Turning Ideas</span> into <span className="text-success">Impactful Code</span>
              </h3>
              <p className="text-muted lh-lg mb-3">
                Hi, I'm Dumindu Tharushika — a Software Engineering undergraduate fueled by curiosity and a love for building things that matter. My journey blends <strong>Data Science</strong>, <strong>AI/ML</strong>, and full-stack development, with hands-on experience in <span className="text-primary">Python</span>, <span className="text-success">Java</span>, <span className="text-warning">Spring Boot</span>, and <span className="text-info">React</span>.
              </p>
              <p className="text-muted lh-lg mb-3">
                Whether it's crafting scalable systems, experimenting with machine learning, or optimizing performance, I thrive on challenges and continuous learning. My mission? To transform complex problems into elegant, intelligent solutions.
              </p>
              <p className="fst-italic text-secondary">
                "Code is my canvas, innovation my brush."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
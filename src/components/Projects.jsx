import React from 'react';

function Projects() {
  const projects = [
    {
      id: '1',
      title: 'Survival and Mortality Prediction System',
      technologies: ['Python', 'Scikit-learn'],
      summary: 'Empowers clinicians with advanced, interpretable models for life-saving decisions. Uses machine learning to reveal new insights in patient care and drive impactful outcomes.',
      github: 'https://github.com/WDT1203/Survival_MortalityPredictionSystem',
    },
    {
      id: '2',
      title: 'Detoxium – Drug Addiction Prevention App',
      technologies: ['Flutter', 'Python'],
      summary: 'An AI-powered app offering hope and support to individuals on their recovery journey. Integrates real-time chat to foster meaningful connections and positive change.',
      github: 'https://github.com/WDT1203/AI-chatbot',
    },
    {
      id: '3',
      title: 'Real-Time Event Ticketing System',
      technologies: ['Java', 'React'],
      summary: 'Delivers seamless ticketing experiences, even under heavy demand. Optimizes performance for fast, reliable access to unforgettable events.',
      github: 'https://github.com/WDT1203/Event-Ticketing-System',
    },
    {
      id: '4',
      title: 'UN SDGs Awareness Website',
      technologies: ['HTML', 'CSS'],
      summary: 'An engaging, responsive website inspiring action for the UN’s Life on Land goal. Raises awareness and drives positive environmental impact.',
      github: 'https://github.com/WDT1203/SDGWebsite',
    },
  ];

  // Add unique image URLs or import images for each project
  const projectImages = [
    'https://img.icons8.com/color/96/000000/medical-doctor.png', // Survival and Mortality Prediction System
    'https://img.icons8.com/color/96/000000/bot.png',         // Detoxium – Drug Addiction Prevention App
    'https://img.icons8.com/color/96/000000/ticket.png',         // Real-Time Event Ticketing System
    'https://img.icons8.com/color/96/000000/earth-planet.png',   // UN SDGs Awareness Website
  ];

  return (
    <section id="projects" className="min-vh-100 py-5 position-relative">
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, var(--bs-body-bg), var(--bs-card-bg))',
          transform: 'skewY(1deg)',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></div>
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <h2 className="display-4 fw-bold text-center mb-5">Projects</h2>
        <div className="row justify-content-center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {projects.map((project, index) => (
            <div key={project.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div
                  className="bg-light d-flex justify-content-center align-items-center"
                  style={{ height: '160px' }}
                >
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    style={{ height: 96, width: 96, objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-2">
                    <span className="text-primary text-decoration-underline"></span> {project.title}
                  </h5>
                  <div className="mb-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="badge bg-primary me-2 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="card-text text-muted">{project.summary}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm mt-2"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
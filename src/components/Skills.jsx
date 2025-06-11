import React, { useState } from 'react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Languages & Tools');

  const skillCategories = {
    'Languages & Tools': [
      { id: '1', name: 'Python', progress: 90, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg' },
      { id: '2', name: 'Java', progress: 85, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/java.svg' },
      { id: '3', name: 'JavaScript', progress: 82, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg' },
      { id: '4', name: 'Git', progress: 90, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg' },
      { id: '5', name: 'MySQL', progress: 80, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg' }
    ],
    'Frameworks & Libraries': [
      { id: '7', name: 'React', progress: 80, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
      { id: '8', name: 'Spring Boot', progress: 82, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spring.svg' },
      { id: '9', name: 'Node.js', progress: 78, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg' },
      { id: '10', name: 'Express.js', progress: 76, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg' },
      { id: '11', name: 'Bootstrap', progress: 85, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bootstrap.svg' },
      { id: '12', name: 'TailwindCSS', progress: 80, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg' }
    ],
    'Core CS Concepts': [
      { id: '13', name: 'Machine Learning', progress: 88, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/scikitlearn.svg' },
      { id: '14', name: 'Data Structures', progress: 85, icon: '📊' },
      { id: '15', name: 'Algorithms', progress: 83, icon: '⚡' },
      { id: '16', name: 'OOP', progress: 87, icon: '🏗️' },
      { id: '17', name: 'System Design', progress: 75, icon: '🏛️' },
      { id: '18', name: 'Database Design', progress: 82, icon: '🗄️' }
    ]
  };

  const categories = Object.keys(skillCategories);

  const handleCategoryClick = (category) => {
    console.log('Switching to category:', category);
    setActiveCategory(category);
  };

  return (
    <section id="skills" className="skills-section">
      {/* Background Pattern */}
      <div className="skills-background"></div>
      
      <div className="container position-relative" style={{ zIndex: 10, maxWidth: '1400px', paddingTop: '5rem', paddingBottom: '5rem' }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold skills-title">
            Skills
          </h2>
        </div>

        {/* Category Navigation */}
        <div className="d-flex justify-content-center mb-5">
          <div className="skills-nav">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`btn skills-nav-btn ${
                  activeCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="row g-3 justify-content-center">
          {skillCategories[activeCategory]?.map((skill) => (
            <div key={skill.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="skill-card">
                {/* Icon */}
                {skill.icon.startsWith('http') ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.parentNode.querySelector('.skill-icon-fallback');
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                ) : (
                  <span className="skill-icon-emoji">{skill.icon}</span>
                )}
                
                {/* Fallback icon for failed image loads */}
                <span className="skill-icon-emoji skill-icon-fallback" style={{display: 'none'}}>⚙️</span>

                {/* Skill Name */}
                <h6 className="text-white text-center mb-0 fw-medium" style={{fontSize: '0.85rem'}}>
                  {skill.name}
                </h6>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-5">
          <div className="skills-footer">
            <span className="text-light small">Always learning, always growing</span>
            <span className="text-primary">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
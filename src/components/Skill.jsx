import React, { useState } from 'react';

function Skill({ skill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="d-flex align-items-center gap-3 position-relative animate__animated animate__fadeIn"
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="img-fluid"
        style={{ width: '40px', height: '40px' }}
      />
      <span className="fs-4 text-capitalize text-dark">{skill.name}</span>
      {isHovered && (
        <div
          className="position-absolute bg-primary bg-opacity-90 text-white rounded-3 px-3 py-1 animate__animated animate__fadeIn"
          style={{
            top: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
          }}
        >
          <span className="fw-bold">{skill.progress}%</span>
        </div>
      )}
    </div>
  );
}

export default Skill;
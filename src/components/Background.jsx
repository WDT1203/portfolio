import React, { useState, useEffect } from 'react';

function Background() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 16,
    }));
    setParticles(newParticles);
  }, []);

  return (
  <div className="background-neural-network">
    {/* <div className="gradient-bg"></div> */} {/* Remove or comment out this line */}
    <div className="grid-pattern"></div>
    {particles.map((particle) => (
      <div
        key={particle.id}
        className="floating-particle"
        style={{
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          animationDelay: `${particle.delay}s`,
          animationDuration: `${particle.duration}s`
        }}
      />
    ))}
    <svg className="data-flow-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      {Array.from({ length: 6 }, (_, i) => (
        <g key={i}>
          <path
            d={`M${10 + i * 15},0 Q${15 + i * 15},50 ${20 + i * 15},100`}
            fill="none"
            strokeWidth="0.5"
            className="data-path"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        </g>
      ))}
    </svg>
    <div className="neural-nodes">
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className="neural-node"
          style={{
            left: `${15 + (i % 4) * 25}%`,
            top: `${20 + Math.floor(i / 4) * 30}%`,
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}
    </div>
    <div className="content-overlay-bg"></div>
  </div>
);
}

export default Background;
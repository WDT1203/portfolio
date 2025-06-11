import React, { useState, useEffect, useRef } from 'react';

function useTypewriter(words, speed = 100) {
  const [displayText, setDisplayText] = useState('');
  const wordIndex = useRef(0);
  const isDeleting = useRef(false);
  const currentText = useRef('');

  useEffect(() => {
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIndex.current % words.length];

      if (isDeleting.current) {
        currentText.current = currentWord.substring(0, currentText.current.length - 1);
      } else {
        currentText.current = currentWord.substring(0, currentText.current.length + 1);
      }

      setDisplayText(currentText.current);

      let typeSpeed = isDeleting.current ? speed / 2 : speed;
      if (!isDeleting.current && currentText.current === currentWord) {
        timeoutId = setTimeout(() => {
          isDeleting.current = true;
          type();
        }, 1200); // 1 second pause
        return;
      }else if (isDeleting.current && currentText.current === '') {
        isDeleting.current = false;
        wordIndex.current++;
        typeSpeed = 300;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, speed);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [words, speed]);

  return displayText;
}

function Hero({ scrollToSection = () => {} }) {
  const typewriterText = useTypewriter([
    "Hi, I'm Dumindu Tharushika",
    'Data Science Enthusiast',
    'AI/ML Innovator',
    'Python & Java Developer',
  ]);

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center justify-content-center text-center position-relative pt-5">
      <div className="hero-content-wrapper" style={{ zIndex: 10 }}>
        <div className="rounded-circle bg-light mx-auto mb-4 d-flex justify-content-center align-items-center profile-image" style={{ width: '180px', height: '180px' }}>
          <img
            src="\assets\dumindu_photo22.jpg" 
            alt="Dumindu Tharushika"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
        <p className="text-muted mb-3 small text-uppercase subtitle" style={{ letterSpacing: '0.1em' }}>
          Software Engineering Undergraduate
        </p>
        <h1 className="display-4 fw-bold mb-4 d-flex align-items-center justify-content-center main-title">
          {typewriterText}
          <span className="ms-1 typing-cursor">|</span>
        </h1>
        <div className="d-flex flex-wrap justify-content-center gap-3 nav-buttons">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="btn hero-nav-btn px-4 py-2"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
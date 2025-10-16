import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/SkillsCarousel.css';

const SkillsCarousel = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered, skills.length]);

  const nextSkill = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const prevSkill = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  return (
    <div className="skills-carousel">
      <div className="carousel-container">
        <button 
          className="carousel-btn prev-btn"
          onClick={prevSkill}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div 
          className="carousel-track"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="skill-card"
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="skill-icon">
                <i className={skills[currentIndex].icon}></i>
              </div>
              <h3 className="skill-name">{skills[currentIndex].name}</h3>
              <p className="skill-description">{skills[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          className="carousel-btn next-btn"
          onClick={nextSkill}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="carousel-indicators">
        {skills.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;

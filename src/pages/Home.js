import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">John Jay Moanes</span>
              </h1>
              <h2 className="hero-subtitle">Junior Web Developer</h2>
              <p className="hero-description">
                I'm passionate about creating beautiful, functional, and user-friendly web applications.
                I love turning ideas into reality through code and design.
              </p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-image-container">
                <img
                  src="/images/profile.jpg"
                  alt="John Jay Moanes - Web Developer"
                  className="profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{ display: 'none' }}>
                  <i className="fas fa-user"></i>
                  <p>Add your photo to /public/images/profile.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I’m a passionate Junior Web Developer who enjoys building interactive and user-friendly websites. I specialize in front-end development using React, JavaScript, HTML, and CSS, and I also have hands-on experience with Django and Python for back-end development.

            I’m eager to keep learning, improve my skills, and take on projects that challenge me to grow as a developer and problem-solver.
          </p>
        </div>
      </section>

      <section className="skills-preview">
        <div className="container">
          <h2>Technologies I Work With</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <i className="fab fa-html5"></i>
              <span>HTML5</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-css3-alt"></i>
              <span>CSS3</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-js-square"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-react"></i>
              <span>React</span>
            </div>
             <div className="skill-item">
               <i className="fab fa-git-alt"></i>
               <span>Git</span>
             </div>
             <div className="skill-item">
               <i className="fab fa-github"></i>
               <span>GitHub</span>
             </div>
             <div className="skill-item">
               <i className="fab fa-python"></i>
               <span>Python</span>
             </div>
             <div className="skill-item">
               <i className="fas fa-database"></i>
               <span>PostgreSQL</span>
             </div>
             <div className="skill-item">
               <i className="fas fa-server"></i>
               <span>Django</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

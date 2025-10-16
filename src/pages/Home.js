import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypingAnimation from '../components/TypingAnimation';
import SkillsCarousel from '../components/SkillsCarousel';
import BackgroundAnimation from '../components/BackgroundAnimation';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const typingTexts = [
    "Junior Web Developer",
    "React Developer", 
    "Frontend Developer",
    "Full Stack Developer"
  ];

  const skillsData = [
    {
      name: "HTML5",
      icon: "fab fa-html5",
      description: "Semantic markup and modern HTML5 features"
    },
    {
      name: "CSS3",
      icon: "fab fa-css3-alt", 
      description: "Responsive design and modern CSS techniques"
    },
    {
      name: "JavaScript",
      icon: "fab fa-js-square",
      description: "ES6+ features and modern JavaScript development"
    },
    {
      name: "React",
      icon: "fab fa-react",
      description: "Component-based UI development and state management"
    },
    {
      name: "Python",
      icon: "fab fa-python",
      description: "Backend development and automation scripting"
    },
    {
      name: "Django",
      icon: "fas fa-server",
      description: "Full-stack web application development"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <BackgroundAnimation />
        <div className="hero-container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">John Jay Moanes</span>
              </h1>
              <h2 className="hero-subtitle">
                <TypingAnimation texts={typingTexts} />
              </h2>
              <p className="hero-description">
                I'm passionate about creating beautiful, functional, and user-friendly web applications.
                I love turning ideas into reality through code and design.
              </p>
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <motion.div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2>About Me</h2>
            <p>
              I'm a passionate Junior Web Developer who enjoys building interactive and user-friendly websites. I specialize in front-end development using React, JavaScript, HTML, and CSS, and I also have hands-on experience with Django and Python for back-end development.

              I'm eager to keep learning, improve my skills, and take on projects that challenge me to grow as a developer and problem-solver.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="skills-preview">
        <div className="container">
          <motion.div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2>Technologies I Work With</h2>
            <SkillsCarousel skills={skillsData} />
          </motion.div>
          
          <motion.div 
            className="skills-grid"
            data-aos="fade-up"
            data-aos-delay="400"
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

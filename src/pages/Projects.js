import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Projects.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Employee Directory",
      description: "A professional, responsive Employee Directory web application built with React.js, featuring a modern UI, dark mode support, and comprehensive employee management capabilities.",
      techStack: ["React", "CSS3", "JavaScript", "HTML5"],
      liveDemo: "https://employee-diectory.vercel.app/auth",
      github: "https://github.com/jmoanes/EMPLOYEE-DIRECTORY",
      image: "/images/directory.jpg"
    },
    {
      id: 2,
      title: "Ticket Support System",
      description: "A Django-based IT Support System that streamlines ticket management, real-time chat, and calendar tracking with a modern Bootstrap 5 design, dark mode, and role-based access for users and IT staff.",
      techStack: ["Django", "CSS3", "JavaScript", "Python", "HTML5", "PostgreSql"],
      liveDemo: "https://ticketssupport.onrender.com/login",
      github: "https://github.com/jmoanes/ticketsSupport",
      image: "/images/tickets.jpg"
    },

    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather and forecasts for multiple cities using a weather API.",
      techStack: ["React", "CSS3", "JavaScript", "Weather API"],
      liveDemo: "https://weatherapp-eta-vert.vercel.app/",
      github: "https://github.com/jmoanes/weatherapp",
      image: "/images/weatherapp.jpg"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website developed in React to test and improve my web development skills, featuring responsive layouts and engaging animations..",
      techStack: ["React", "CSS3", "JavaScript", "React Router"],
      liveDemo: "https://johnjaymoanes-porfolio.vercel.app/",
      github: "https://github.com/jmoanes/johnjaymoanes-porfolio",
      image: "/images/portfolio.jpg"
    },

    {
      id: 5,
      title: "Landing Page Website",
      description: "Developed a responsive landing page using React, HTML, CSS, and JavaScript featuring a modern UI, smooth navigation, and reusable scalable components designed for easy updates, performance optimization, and future feature expansion",
      techStack: ["React", "CSS3", "JavaScript", "React Router"],
      liveDemo: "https://landing-page-rose-delta-75.vercel.app/",
      github: "https://github.com/jmoanes/landing-page",
      image: "/images/landing-page-thumbnail.jpg"
    },
    
  ];

  return (
    <div className="projects">
      <div className="container">
        <div className="page-header">
          <h1>My Projects</h1>
          <p>Here are some of the projects I've worked on recently</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                {project.image.startsWith('/') ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <span className="project-emoji">{project.image}</span>
                )}
                <div className="project-emoji" style={{ display: 'none' }}>
                  <i className="fas fa-image"></i>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  <h4>Tech Stack:</h4>
                  <div className="tech-tags">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

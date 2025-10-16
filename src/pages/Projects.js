import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with React and modern CSS. Features include product catalog, shopping cart, and user authentication.",
      techStack: ["React", "CSS3", "JavaScript", "Local Storage"],
      liveDemo: "https://example.com",
      github: "https://github.com/example/ecommerce",
      image: "🛒"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing daily tasks with drag-and-drop functionality, due dates, and priority levels.",
      techStack: ["React", "CSS3", "JavaScript", "React DnD"],
      liveDemo: "https://example.com",
      github: "https://github.com/example/taskmanager",
      image: "📋"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather and forecasts for multiple cities using a weather API.",
      techStack: ["React", "CSS3", "JavaScript", "Weather API"],
      liveDemo: "https://example.com",
      github: "https://github.com/example/weather",
      image: "🌤️"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
      techStack: ["React", "CSS3", "JavaScript", "React Router"],
      liveDemo: "https://example.com",
      github: "https://github.com/example/portfolio",
      image: "💼"
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "A web application that helps users discover new recipes based on available ingredients and dietary preferences.",
      techStack: ["React", "CSS3", "JavaScript", "Recipe API"],
      liveDemo: "https://example.com",
      github: "https://github.com/example/recipes",
      image: "🍳"
    }
  ];

  return (
    <div className="projects">
      <div className="container">
        <div className="page-header">
          <h1>My Projects</h1>
          <p>Here are some of the projects I've worked on recently</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

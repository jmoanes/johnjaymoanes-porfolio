import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Django', level: 65 },
    { name: 'PostgreSQL', level: 60 },
    { name: 'GitHub', level: 70 },
    { name: 'Git', level: 70 }
  ];

  const experience = [
    {
      title: 'Frontend Developer Intern',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Developed responsive web applications using React and modern CSS. Collaborated with design team to implement user interfaces.'
    },
    {
      title: 'Web Development Student',
      company: 'Online Bootcamp',
      period: '2022 - 2023',
      description: 'Completed comprehensive web development program covering HTML, CSS, JavaScript, React, and backend technologies.'
    }
  ];

  const education = [
    {
      degree: 'B.S. in Information Technology',
      school: 'Read Data Access Computer College',
      period: '2014 - 2018',
      description: 'Relevant Coursework: Web Development, Front-End & Back-End Programming, Data Structures, Database Design'
    }
  ];

  return (
    <div className="resume">
      <div className="container">
        <div className="page-header">
          <h1>Resume</h1>
          <p>My professional experience and skills</p>
          <a 
            href="/resume.pdf" 
            download 
            className="btn btn-primary download-btn"
          >
            <i className="fas fa-download"></i>
            Download Resume
          </a>
        </div>

        <div className="resume-content">
          <section className="resume-section">
            <h2>Skills</h2>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2>Experience</h2>
            <div className="timeline">
              {experience.map((job, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{job.title}</h3>
                    <h4 className="timeline-company">{job.company}</h4>
                    <span className="timeline-period">{job.period}</span>
                    <p className="timeline-description">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2>Education</h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <h4 className="timeline-company">{edu.school}</h4>
                    <span className="timeline-period">{edu.period}</span>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2>Certifications</h2>
            <div className="certifications">
              <div className="cert-item">
                <i className="fas fa-certificate"></i>
                <div>
                  <h3>JavaScript Fundamentals</h3>
                  <p>GoIT - 2025</p>
                </div>
              </div>
              <div className="cert-item">
                <i className="fas fa-certificate"></i>
                <div>
                  <h3>React Development Course</h3>
                  <p>GoIT - 2025</p>
                </div>
              </div>
              <div className="cert-item">
                <i className="fas fa-certificate"></i>
                <div>
                  <h3>Django, The Complete Web Development Bootcamp</h3>
                  <p>Udemy - 2023</p>
                </div>
              </div>
              <div className="cert-item">
                <i className="fas fa-certificate"></i>
                <div>
                  <h3>Python Programming for Beginners</h3>
                  <p>Udemy - 2023</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;

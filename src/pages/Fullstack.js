import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fullstackProjects } from '../data/projects';
import './Page.css';

function Fullstack() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Fullstack Projects</h1>
        <p className="page-subtitle">
          풀스택 웹 애플리케이션 프로젝트들
        </p>

        <div className="projects-list">
          {fullstackProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-list-item"
              onClick={() => navigate(`/fullstack/${project.id}`)}
            >
              <div className="project-list-content">
                <h2 className="project-list-title">{project.title}</h2>
                <p className="project-list-description">
                  {project.description.split('\n')[0].trim()}
                </p>
                <div className="project-list-tech">
                  {project.tech.slice(0, 4).map((tech, index) => (
                    <span key={index} className="project-list-tech-tag">{tech}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="project-list-tech-tag">+{project.tech.length - 4}</span>
                  )}
                </div>
              </div>
              <span className="project-list-arrow">→</span>
            </div>
          ))}
        </div>

        {fullstackProjects.length === 0 && (
          <div className="empty-state">
            <p>더 많은 프로젝트를 추가해보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Fullstack;



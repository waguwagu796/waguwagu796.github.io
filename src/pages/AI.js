import React from 'react';
import { useNavigate } from 'react-router-dom';
import { aiProjects } from '../data/projects';
import './Page.css';

function AI() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">AI Projects</h1>
        <p className="page-subtitle">
          인공지능 및 머신러닝 프로젝트들
        </p>

        <div className="projects-list">
          {aiProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-list-item"
              onClick={() => navigate(`/ai/${project.id}`)}
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

        {aiProjects.length === 0 && (
          <div className="empty-state">
            <p>더 많은 프로젝트를 추가해보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AI;



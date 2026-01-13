import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import './Page.css';

function Fullstack() {
  const projects = [
    {
      id: 1,
      title: '프로젝트 제목 1',
      description: '프로젝트 설명을 여기에 작성하세요.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
      video: 'https://youtu.be/HhoATZ1Imtw?si=eFJ50t9xHMpegZ67' // YouTube URL 또는 비디오 파일 경로를 여기에 입력하세요 (예: 'https://www.youtube.com/watch?v=VIDEO_ID' 또는 '/videos/project1.mp4')
    },
    {
      id: 2,
      title: '프로젝트 제목 2',
      description: '프로젝트 설명을 여기에 작성하세요.',
      tech: ['Vue.js', 'Express', 'PostgreSQL'],
      github: '#',
      demo: '#',
      video: 'https://youtu.be/KXSIM-IT25Q?si=UtSfACzehavGbCBc' // YouTube URL 또는 비디오 파일 경로를 여기에 입력하세요
    }
  ];

  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Fullstack Projects</h1>
        <p className="page-subtitle">
          풀스택 웹 애플리케이션 프로젝트들
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <VideoPlayer videoUrl={project.video} title={project.title} />
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="empty-state">
          <p>더 많은 프로젝트를 추가해보세요!</p>
        </div>
      </div>
    </div>
  );
}

export default Fullstack;



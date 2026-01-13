import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import './Page.css';

function AI() {
  const projects = [
    {
      id: 1,
      title: 'AI 기반 졸음 감지 예측모델',
      description: '사람 표정의 이미지 파일을 통해 졸음 여부를 파악하는 시스템이다. CNN 기법을 활용하여 모델을 학습시켰고, LLM을 통해 사용자에게 자연어로 설명하는 기능이 포함되어있다.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'OpenCV'],
      github: 'https://github.com/waguwagu796/drive_drowse_LLM.git',
      demo: '#',
      video: 'https://youtu.be/pDuAZA9cbt0?si=cz_CrSshxxci9Ac7' // YouTube URL 또는 비디오 파일 경로를 여기에 입력하세요 (예: 'https://www.youtube.com/watch?v=VIDEO_ID' 또는 '/videos/project1.mp4')
    },
    {
      id: 2,
      title: 'AI 프로젝트 제목 2',
      description: 'AI 프로젝트 설명을 여기에 작성하세요.',
      tech: ['Python', 'Scikit-learn', 'OpenCV'],
      github: '#',
      demo: '#',
      video: 'https://youtu.be/vo13k1iQqx0?si=7dRf7hN2J0k93r-V' // YouTube URL 또는 비디오 파일 경로를 여기에 입력하세요
    }
  ];

  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">AI Projects</h1>
        <p className="page-subtitle">
          인공지능 및 머신러닝 프로젝트들
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

export default AI;



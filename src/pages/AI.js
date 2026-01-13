import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ImageGallery from '../components/ImageGallery';
import DocumentLinks from '../components/DocumentLinks';
import RoleSection from '../components/RoleSection';
import './Page.css';

function AI() {
  const projects = [
    {
      id: 1,
      title: 'AI 기반 졸음 감지 예측모델',
      description: `사람 표정의 이미지 파일을 통해 졸음 여부를 파악하는 시스템이다. 
      CNN 기법을 활용하여 모델을 학습시켰고, LLM을 통해 사용자에게 자연어로 설명하는 기능이 포함되어있다.`,
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'OpenCV'],
      github: 'https://github.com/waguwagu796/drive_drowse_LLM.git',
      demo: '#',
      video: 'https://youtu.be/pDuAZA9cbt0?si=cz_CrSshxxci9Ac7', // YouTube URL 또는 비디오 파일 경로를 여기에 입력하세요 (예: 'https://www.youtube.com/watch?v=VIDEO_ID' 또는 '/videos/project1.mp4')
      images: [], // 이미지 URL 배열 (예: ['/images/project1-1.jpg', '/images/project1-2.jpg'])
      documents: [{ name: 'Drive_drowse.pdf', url: '/docs/Drive_drowse.pdf' }], // 문서 배열 (예: [{ name: '프로젝트_발표자료.pdf', url: '/docs/presentation.pdf' }])
      role: `1. CNN 모델 설계 및 학습
      2. LLM 통합 개발
      3. 데이터 전처리 파이프라인 구축` // 내 역할 설명 (문자열 또는 배열)
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
              {project.video && (
                <VideoPlayer videoUrl={project.video} title={project.title} />
              )}
              {project.images && project.images.length > 0 && (
                <ImageGallery images={project.images} />
              )}
              <p className="project-description">{project.description}</p>
              <RoleSection role={project.role} />
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <DocumentLinks documents={project.documents} />
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



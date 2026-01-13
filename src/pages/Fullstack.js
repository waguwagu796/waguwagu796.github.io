import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import './Page.css';

function Fullstack() {
  const projects = [
    {
      id: 1,
      title: 'DaengTrip',
      description: '반려동물 동반 여행지를 찾을 수 있는 시스템이다. 사용자는 지역별 여행지, 의료시설, 서비스 시설, 식당 및 카페를 찾을 수 있다. 또한 다양한 반려동물 관련 정보와 커뮤니티 기능을 통한 여행 공유가 가능하다.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/waguwagu796/daeng.git',
      demo: '#',
      video: 'https://youtu.be/HhoATZ1Imtw?si=eFJ50t9xHMpegZ67' // YouTube URL 또는 비디오 파일 경로를 여기에 입력하세요 (예: 'https://www.youtube.com/watch?v=VIDEO_ID' 또는 '/videos/project1.mp4')
    },
    {
      id: 2,
      title: '농사팜',
      description: '시장 시세 확인 가능한 농산물 직거래 시스템이다. 사용자는 원하는 지역이나 시장을 선택하여 해당 농산물의 시세 추이를 확인할 수 있고, 가격 예측도 확인 가능하다. 또한 판매자는 시장을 등록하여 자신의 농산물을 판매할 수 있으며, 소비자는 올라온 농산물을 자유롭게 구매 가능하다.',
      tech: ['React', 'SpringBoot', 'MongoDB'],
      github: 'https://github.com/waguwagu796/farm2.git',
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



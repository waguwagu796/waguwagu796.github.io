import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import ImageGallery from '../components/ImageGallery';
import DocumentLinks from '../components/DocumentLinks';
import RoleSection from '../components/RoleSection';
import './ProjectDetail.css';

// 프로젝트 데이터를 import (각 카테고리에서)
import { getProjectById } from '../data/projects';

function ProjectDetail() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  
  const project = getProjectById(category, parseInt(id));
  
  if (!project) {
    return (
      <div className="page">
        <div className="page-container">
          <div className="project-not-found">
            <h2>프로젝트를 찾을 수 없습니다</h2>
            <button onClick={() => navigate(`/${category}`)} className="back-button">
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-container">
        <button onClick={() => navigate(`/${category}`)} className="back-button">
          ← 목록으로 돌아가기
        </button>
        
        <div className="project-detail">
          {/* 메인 이미지/비디오 영역 */}
          <div className="project-detail-media">
            {project.video ? (
              <div className="main-video">
                <VideoPlayer videoUrl={project.video} title={project.title} />
              </div>
            ) : project.images && project.images.length > 0 ? (
              <div className="main-image">
                <img src={project.images[0]} alt={project.title} />
              </div>
            ) : null}
          </div>

          {/* 프로젝트 정보 영역 */}
          <div className="project-detail-info">
            <h1 className="project-detail-title">{project.title}</h1>
            
            <div className="project-detail-description">
              <h3>프로젝트 소개</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-detail-tech">
              <h3>사용 기술</h3>
              <div className="tech-tags">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {project.role && (
              <div className="project-detail-role">
                <h3>내 역할</h3>
                <RoleSection role={project.role} />
              </div>
            )}

            {project.documents && project.documents.length > 0 && (
              <div className="project-detail-documents">
                <DocumentLinks documents={project.documents} />
              </div>
            )}

            <div className="project-detail-links">
              {project.github && (
                <a 
                  href={project.github} 
                  className="project-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub 보기
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a 
                  href={project.demo} 
                  className="project-link demo-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  데모 보기
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 이미지 갤러리 영역 */}
        {project.images && project.images.length > 0 && (
          <div className="project-detail-gallery">
            <h2>개인 담당 기능 및 구현 화면</h2>
            <ImageGallery images={project.images} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;


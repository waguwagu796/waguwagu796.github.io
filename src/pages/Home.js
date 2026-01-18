import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">김재혁</h1>
          <p className="hero-subtitle">
            Java/Spring 기반의 견고한 백엔드와 AI·LLM 기술을 자연스럽게 결합한 서비스를 만듭니다.<br/>
            확장성과 안정성을 갖춘 웹 플랫폼과 지능형 솔루션 구축에 집중하고 있습니다.
          </p>
        </div>

        <div className="category-cards">
          <Link to="/fullstack" className="category-card">
            <h2 className="card-title">Fullstack</h2>
            <p className="card-description">
              풀스택 웹 애플리케이션 프로젝트들을 확인해보세요
            </p>
            <div className="card-arrow">→</div>
          </Link>

          <Link to="/ai" className="category-card">
            <h2 className="card-title">AI</h2>
            <p className="card-description">
              인공지능 및 머신러닝 프로젝트들을 확인해보세요
            </p>
            <div className="card-arrow">→</div>
          </Link>
        </div>

        <div className="about-section">
          <h2 className="about-title">About</h2>
          <p className="about-text">
            다양한 기술 스택을 활용하여 개발한 프로젝트들을 카테고리별로 정리했습니다.<br/>
            각 프로젝트의 상세 정보와 기술 스택을 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;



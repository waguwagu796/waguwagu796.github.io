import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">프로젝트 포트폴리오</h1>
          <p className="hero-subtitle">
            제가 개발한 다양한 프로젝트들을 소개합니다
          </p>
        </div>

        <div className="category-cards">
          <Link to="/fullstack" className="category-card">
            <div className="card-icon">💻</div>
            <h2 className="card-title">Fullstack</h2>
            <p className="card-description">
              풀스택 웹 애플리케이션 프로젝트들을 확인해보세요
            </p>
            <div className="card-arrow">→</div>
          </Link>

          <Link to="/ai" className="category-card">
            <div className="card-icon">🤖</div>
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
            다양한 기술 스택을 활용하여 개발한 프로젝트들을 카테고리별로 정리했습니다.
            각 프로젝트의 상세 정보와 기술 스택을 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;



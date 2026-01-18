import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ImageGallery from '../components/ImageGallery';
import DocumentLinks from '../components/DocumentLinks';
import RoleSection from '../components/RoleSection';
import './Page.css';

function Fullstack() {
  const projects = [
    {
      id: 1,
      title: 'MyCondition',
      description: `개인 맞춤형 건강관리 시스템이다. 
      사용자는 개인의 식습관, 수면패턴, 건강정보, 운동량 등의 정보를 입력할 수 있다. 
      그를 바탕으로 해당 서비스에서 건강 상태를 한 눈에 파악할 수 있고, 주의사항도 확인이 가능하다.`,
      tech: ['JSP', 'SpringBoot', 'OracleDB'],
      github: 'https://github.com/waguwagu796/ProjectHealth.git',
      demo: '#',
      // video: 'https://youtu.be/HhoATZ1Imtw?si=eFJ50t9xHMpegZ67', // YouTube URL 또는 비디오 파일 경로를 여기에 입력하세요 (예: 'https://www.youtube.com/watch?v=VIDEO_ID' 또는 '/videos/project1.mp4')
      images: ['/images/MyCondition/내 정보 수정(소셜 로그인 사용자).png', '/images/MyCondition/내 정보수정(일반회원).png', '/images/MyCondition/내정보수정시 화면(소셜 로그인 사용자).png', '/images/MyCondition/내정보수정시 화면(일반회원).png', '/images/MyCondition/목표관리카드(로그인).png', '/images/MyCondition/식습관카드(로그인).png', '/images/MyCondition/이용후기 게시글 상세페이지(다른 사용자 게시글).png', '/images/MyCondition/이용후기 게시글 상세페이지(본인 게시글).png', '/images/MyCondition/이용후기 게시글 수정 화면.png', '/images/MyCondition/이용후기(비로그인).png', '/images/MyCondition/체중카드(로그인).png', '/images/MyCondition/커뮤니티 게시글 상세페이지(다른 사용자).png', '/images/MyCondition/커뮤니티 게시글 상세페이지(사용자 게시글).png', '/images/MyCondition/커뮤니티 게시글 수정 화면.png', '/images/MyCondition/커뮤니티 게시글 작성화면.png', '/images/MyCondition/커뮤니티 화면(자유게시판).png', '/images/MyCondition/커뮤니티 화면(자주 묻는 질문).png', '/images/MyCondition/커뮤니티 화면.png', '/images/MyCondition/커뮤니티(비로그인).png'], // 이미지 URL 배열 (예: ['/images/project1-1.jpg', '/images/project1-2.jpg'])
      documents: [{ name: 'MyCondition.pdf', url: '/docs/MyCondition.pdf' }], // 문서 배열 (예: [{ name: '프로젝트_발표자료.pdf', url: '/docs/presentation.pdf' }])
      role: `1. 마이페이지/이용후기/커뮤니티/관리목표/식습관 페이지 제작
      2. 로그인 기반 접근 제어 기능 구현
      3. 시간선에 따른 체중 변화 그래프 제작` // 내 역할 설명 (문자열 또는 배열)
    },
    {
      id: 2,
      title: 'DaengTrip',
      description: `반려동물 동반 여행지를 찾을 수 있는 시스템이다. 
      사용자는 지역별 여행지, 의료시설, 서비스 시설, 식당 및 카페를 찾을 수 있다. 
      또한 다양한 반려동물 관련 정보와 커뮤니티 기능을 통한 여행 공유가 가능하다.`,
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/waguwagu796/daeng.git',
      demo: '#',
      // video: 'https://youtu.be/HhoATZ1Imtw?si=eFJ50t9xHMpegZ67', // YouTube URL 또는 비디오 파일 경로를 여기에 입력하세요 (예: 'https://www.youtube.com/watch?v=VIDEO_ID' 또는 '/videos/project1.mp4')
      images: ['images/DaengTrip/2. main 페이지 하단 지도 및 카드 영역.png', 'images/DaengTrip/3. main 페이지 하단 최근 본 여행지 및 footer.png', 'images/DaengTrip/9. 검색 모달 출력.png', 'images/DaengTrip/10. 검색 완료 창.png', 'images/DaengTrip/11. 실시간 인기 여행지 조회.png', 'images/DaengTrip/12. 해당 계정 위시리스트 조회.png', 'images/DaengTrip/13. 여행지 추천 페이지.png', 'images/DaengTrip/14. 지역 & 카테고리 설정 후 추천 화면.png', 'images/DaengTrip/26. Information Hover 시 출력되는 submenu.png', 'images/DaengTrip/46. 관리자 전용 페이지 - 사용자 관리 - 사용자 목록.png'], // 이미지 URL 배열 (예: ['/images/project1-1.jpg', '/images/project1-2.jpg'])
      documents: [{ name: 'DaengTrip.pdf', url: '/docs/DaengTrip.pdf' }], // 문서 배열 (예: [{ name: '프로젝트_발표자료.pdf', url: '/docs/presentation.pdf' }])
      role: `1. 반려동물 여행지 API 연동
      2. 인기 여행지/검색어 표시
      3. 메인 페이지 지도 UI 및 추천 카드 구성
      4. 위시리스트 DB 연동` // 내 역할 설명 (문자열 또는 배열)
    },
    {
      id: 3,
      title: '농사팜',
      description: `시장 시세 확인 가능한 농산물 직거래 시스템이다. 
      사용자는 원하는 지역이나 시장을 선택하여 해당 농산물의 시세 추이를 확인할 수 있고, 가격 예측도 확인 가능하다. 
      또한 판매자는 시장을 등록하여 자신의 농산물을 판매할 수 있으며, 소비자는 올라온 농산물을 자유롭게 구매 가능하다.`,
      tech: ['React', 'SpringBoot', 'MongoDB'],
      github: 'https://github.com/waguwagu796/farm2.git',
      demo: '',
      // video: 'https://youtu.be/KXSIM-IT25Q?si=UtSfACzehavGbCBc', // YouTube URL 또는 비디오 파일 경로를 여기에 입력하세요
      images: ['images/NongsaFarm/1. 일반 사용자 Header.png', 'images/NongsaFarm/2. 판매자 Header.png', 'images/NongsaFarm/3. 관리자 Header.png', 'images/NongsaFarm/4. Footer.png', 'images/NongsaFarm/1. (가격 추세 페이지) 가격 추세 결과.PNG', 'images/NongsaFarm/2. (가격 추세 페이지) 지역 필터.PNG', 'images/NongsaFarm/3. (가격 추세 페이지) 월 선택.PNG', 'images/NongsaFarm/1. (시장 정보) 시장정보.png', 'images/NongsaFarm/2. (시장 정보) 시장정보 상세페이지 - 상세정보 및 지도.png', 'images/NongsaFarm/3. (시장 정보) 시장정보 상세페이지 - 그래프.png', 'images/NongsaFarm/1. (공지사항 페이지) 공지사항 리스트.png', 'images/NongsaFarm/2. (공지사항 페이지) 검색.png', 'images/NongsaFarm/3. (공지사항 페이지) 공지사항 작성.png', 'images/NongsaFarm/4. (공지사항 페이지) 공지사항 상세 페이지.png', 'images/NongsaFarm/1. (관리자 페이지) 대시보드.png', 'images/NongsaFarm/2. (관리자 페이지) 사용자 관리.png', 'images/NongsaFarm/3. (관리자 페이지) 사용자 관리 - 수정.png', 'images/NongsaFarm/4. (관리자 페이지) 사용자 관리 - 삭제.png', 'images/NongsaFarm/5.(관리자 페이지) 거래 관리.png', 'images/NongsaFarm/6. (관리자 페이지) 거래 관리 - 필터.png', 'images/NongsaFarm/7. (관리자 페이지) 거래 관리 - 상세.png', 'images/NongsaFarm/8. (관리자 페이지) 출금 신청 관리 - 1.png', 'images/NongsaFarm/9. (관리자 페이지) 출금 신청 관리 - 2.png', 'images/NongsaFarm/10. (관리자 페이지) 출금 신청 관리 - 필터링.png', 'images/NongsaFarm/11. (관리자 페이지) 문의 관리.png', 'images/NongsaFarm/12. (관리자 페이지) 문의 관리 - 필터링.png', 'images/NongsaFarm/13. (관리자 페이지) 문의 관리 - 미답변상세.png', 'images/NongsaFarm/14. (관리자 페이지) 문의 관리 - 답변상세.png', 'images/NongsaFarm/15. (관리자 페이지) 공지 관리.png', 'images/NongsaFarm/16. (관리자 페이지) 공지 관리 - 작성.png', 'images/NongsaFarm/17. (관리자 페이지) 공지 관리 - 수정.png', 'images/NongsaFarm/18. (관리자 페이지) 공지 관리 - 삭제.png', 'images/NongsaFarm/19. (관리자 페이지) 판매자 신청 관리.png', 'images/NongsaFarm/20. (관리자 페이지) 판매자 신청 관리 - 상세.png', 'images/NongsaFarm/21. (관리자 페이지) 판매자 신청 관리 - 승인.png', 'images/NongsaFarm/22. (관리자 페이지) 판매자 신청 관리 - 거절.png', 'images/NongsaFarm/23. (관리자 페이지) 추천 가게 관리 - 미선택.png', 'images/NongsaFarm/24. (관리자 페이지) 추천 가게 관리 - 선택.png', 'images/NongsaFarm/25. (관리자 페이지) 추천 가게 관리 - 추천 가게 목록.png', 'images/NongsaFarm/1. (검색) 검색 박스.png', 'images/NongsaFarm/2. (검색) 검색 결과 - 그래프.png', 'images/NongsaFarm/3. (검색) 검색 결과 - 해당 상품 판매 목록.png'], // 이미지 URL 배열
      documents: [{ name: 'farm.pdf', url: '/docs/farm.pdf' }], // 문서 배열
      role: `1. API 연동 및 그래프 제작
      2. 인기 검색어 표시 및 검색결과 세부 설계
      3. 관리자 페이지 대시보드/사용자관리/거래관리/문의관리/통계 페이지 제작` // 내 역할 설명
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
                {/* <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  Demo
                </a> */}
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



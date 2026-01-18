// AI 프로젝트 데이터
export const aiProjects = [
  {
    id: 1,
    title: 'Comeback11',
    description: `축구선수의 부상 복귀 이후 경기력 예측 시스템입니다. 
    선수의 나이, 포지션, 부상 이력, 부상 전 경기력 등을 바탕으로 머신러닝 모델을 구축하여 복귀 후 경기력을 예측합니다.`,
    tech: ['Python', 'Scikit-learn', 'Random Forest'],
    github: '',
    demo: '#',
    video: '/images/Comeback11/comeback11.mp4',
    images: [
      { url: '/images/Comeback11/분석 결과.png', description: '머신러닝 모델 분석 결과 화면' },
      { url: '/images/Comeback11/상세 예측 정보.png', description: '선수별 상세 예측 정보 표시' },
      { url: '/images/Comeback11/참고사항.png', description: '예측 모델 사용 시 참고사항 안내' }
    ],
    documents: [],
    role: `1. 경기 기록 및 부상 이력 데이터 수집
    2. 랜덤 포레스트 기법 활용한 머신러닝 기반 예측 모델 설계`
  },
  {
    id: 2,
    title: 'AI 기반 졸음 감지 예측모델',
    description: `사람 표정의 이미지 파일을 통해 졸음 여부를 파악하는 시스템입니다. 
    CNN 기법을 활용하여 모델을 학습시켰고, LLM을 통해 사용자에게 자연어로 설명하는 기능이 포함되어있습니다.`,
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'OpenCV'],
    github: 'https://github.com/waguwagu796/drive_drowse_LLM.git',
    demo: '#',
    video: '',
    images: [],
    documents: [{ name: 'Drive_drowse.pdf', url: '/docs/Drive_drowse.pdf' }],
    role: `1. CNN 모델 설계 및 학습
    2. LLM 통합 개발
    3. 데이터 전처리 파이프라인 구축`
  }
];

// Fullstack 프로젝트 데이터
export const fullstackProjects = [
  {
    id: 1,
    title: 'MyCondition',
    description: `개인 맞춤형 건강관리 시스템입니다. 
    사용자는 개인의 식습관, 수면패턴, 건강정보, 운동량 등의 정보를 입력할 수 있습니다. 
    그를 바탕으로 해당 서비스에서 건강 상태를 한 눈에 파악할 수 있고, 주의사항도 확인이 가능합니다.`,
    tech: ['JSP', 'SpringBoot', 'OracleDB'],
    github: 'https://github.com/waguwagu796/ProjectHealth.git',
    demo: '#',
    video: '',
    images: ['/images/MyCondition/내 정보 수정(소셜 로그인 사용자).png', '/images/MyCondition/내 정보수정(일반회원).png', '/images/MyCondition/내정보수정시 화면(소셜 로그인 사용자).png', '/images/MyCondition/내정보수정시 화면(일반회원).png', '/images/MyCondition/목표관리카드(로그인).png', '/images/MyCondition/식습관카드(로그인).png', '/images/MyCondition/이용후기 게시글 상세페이지(다른 사용자 게시글).png', '/images/MyCondition/이용후기 게시글 상세페이지(본인 게시글).png', '/images/MyCondition/이용후기 게시글 수정 화면.png', '/images/MyCondition/이용후기(비로그인).png', '/images/MyCondition/체중카드(로그인).png', '/images/MyCondition/커뮤니티 게시글 상세페이지(다른 사용자).png', '/images/MyCondition/커뮤니티 게시글 상세페이지(사용자 게시글).png', '/images/MyCondition/커뮤니티 게시글 수정 화면.png', '/images/MyCondition/커뮤니티 게시글 작성화면.png', '/images/MyCondition/커뮤니티 화면(자유게시판).png', '/images/MyCondition/커뮤니티 화면(자주 묻는 질문).png', '/images/MyCondition/커뮤니티 화면.png', '/images/MyCondition/커뮤니티(비로그인).png'],
    documents: [{ name: 'MyCondition.pdf', url: '/docs/MyCondition.pdf' }],
    role: `1. 마이페이지/이용후기/커뮤니티/관리목표/식습관 페이지 제작
    2. 로그인 기반 접근 제어 기능 구현
    3. 시간선에 따른 체중 변화 그래프 제작`
  },
  {
    id: 2,
    title: 'DaengTrip',
    description: `반려동물 동반 여행지를 찾을 수 있는 시스템입니다. 
    사용자는 지역별 여행지, 의료시설, 서비스 시설, 식당 및 카페를 찾을 수 있습니다. 
    또한 다양한 반려동물 관련 정보와 커뮤니티 기능을 통한 여행 공유가 가능합니다.`,
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/waguwagu796/daeng.git',
    demo: '#',
    video: '',
    images: ['/images/DaengTrip/main 페이지 하단 지도 및 카드 영역.png', '/images/DaengTrip/main 페이지 하단 최근 본 여행지 및 footer.png', '/images/DaengTrip/검색 모달 출력.png', '/images/DaengTrip/검색 완료 창.png', '/images/DaengTrip/실시간 인기 여행지 조회.png', '/images/DaengTrip/해당 계정 위시리스트 조회.png', '/images/DaengTrip/여행지 추천 페이지.png', '/images/DaengTrip/지역 & 카테고리 설정 후 추천 화면.png', '/images/DaengTrip/Information Hover 시 출력되는 submenu.png', '/images/DaengTrip/관리자 전용 페이지 - 사용자 관리 - 사용자 목록.png'],
    documents: [{ name: 'DaengTrip.pdf', url: '/docs/DaengTrip.pdf' }],
    role: `1. 반려동물 여행지 API 연동
    2. 인기 여행지/검색어 표시
    3. 메인 페이지 지도 UI 및 추천 카드 구성
    4. 위시리스트 DB 연동`
  },
  {
    id: 3,
    title: '농사팜',
    description: `시장 시세 확인 가능한 농산물 직거래 시스템입니다. 
    사용자는 원하는 지역이나 시장을 선택하여 해당 농산물의 시세 추이를 확인할 수 있고, 가격 예측도 확인 가능합니다. 
    또한 판매자는 시장을 등록하여 자신의 농산물을 판매할 수 있으며, 소비자는 올라온 농산물을 자유롭게 구매 가능합니다.`,
    tech: ['React', 'SpringBoot', 'MongoDB'],
    github: 'https://github.com/waguwagu796/farm2.git',
    demo: '',
    video: '',
    images: ['/images/NongsaFarm/일반 사용자 Header.png', '/images/NongsaFarm/판매자 Header.png', '/images/NongsaFarm/관리자 Header.png', '/images/NongsaFarm/Footer.png', '/images/NongsaFarm/(가격 추세 페이지) 가격 추세 결과.PNG', '/images/NongsaFarm/(가격 추세 페이지) 지역 필터.PNG', '/images/NongsaFarm/(가격 추세 페이지) 월 선택.PNG', '/images/NongsaFarm/(시장 정보) 시장정보.png', '/images/NongsaFarm/(시장 정보) 시장정보 상세페이지 - 상세정보 및 지도.png', '/images/NongsaFarm/(시장 정보) 시장정보 상세페이지 - 그래프.png', '/images/NongsaFarm/(공지사항 페이지) 공지사항 리스트.png', '/images/NongsaFarm/(공지사항 페이지) 검색.png', '/images/NongsaFarm/(공지사항 페이지) 공지사항 작성.png', '/images/NongsaFarm/(공지사항 페이지) 공지사항 상세 페이지.png', '/images/NongsaFarm/(관리자 페이지) 대시보드.png', '/images/NongsaFarm/(관리자 페이지) 사용자 관리.png', '/images/NongsaFarm/(관리자 페이지) 사용자 관리 - 수정.png', '/images/NongsaFarm/(관리자 페이지) 사용자 관리 - 삭제.png', '/images/NongsaFarm/(관리자 페이지) 거래 관리.png', '/images/NongsaFarm/(관리자 페이지) 거래 관리 - 필터.png', '/images/NongsaFarm/(관리자 페이지) 거래 관리 - 상세.png', '/images/NongsaFarm/(관리자 페이지) 출금 신청 관리 - 1.png', '/images/NongsaFarm/(관리자 페이지) 출금 신청 관리 - 2.png', '/images/NongsaFarm/(관리자 페이지) 출금 신청 관리 - 필터링.png', '/images/NongsaFarm/(관리자 페이지) 문의 관리.png', '/images/NongsaFarm/(관리자 페이지) 문의 관리 - 필터링.png', '/images/NongsaFarm/(관리자 페이지) 문의 관리 - 미답변상세.png', '/images/NongsaFarm/(관리자 페이지) 문의 관리 - 답변상세.png', '/images/NongsaFarm/(관리자 페이지) 공지 관리.png', '/images/NongsaFarm/(관리자 페이지) 공지 관리 - 작성.png', '/images/NongsaFarm/(관리자 페이지) 공지 관리 - 수정.png', '/images/NongsaFarm/(관리자 페이지) 공지 관리 - 삭제.png', '/images/NongsaFarm/(관리자 페이지) 판매자 신청 관리.png', '/images/NongsaFarm/(관리자 페이지) 판매자 신청 관리 - 상세.png', '/images/NongsaFarm/(관리자 페이지) 판매자 신청 관리 - 승인.png', '/images/NongsaFarm/(관리자 페이지) 판매자 신청 관리 - 거절.png', '/images/NongsaFarm/(관리자 페이지) 추천 가게 관리 - 미선택.png', '/images/NongsaFarm/(관리자 페이지) 추천 가게 관리 - 선택.png', '/images/NongsaFarm/(관리자 페이지) 추천 가게 관리 - 추천 가게 목록.png', '/images/NongsaFarm/(검색) 검색 박스.png', '/images/NongsaFarm/(검색) 검색 결과 - 그래프.png', '/images/NongsaFarm/(검색) 검색 결과 - 해당 상품 판매 목록.png'],
    documents: [{ name: 'farm.pdf', url: '/docs/farm.pdf' }],
    role: `1. API 연동 및 그래프 제작
    2. 인기 검색어 표시 및 검색결과 세부 설계
    3. 관리자 페이지 대시보드/사용자관리/거래관리/문의관리/통계 페이지 제작`
  }
];

// 카테고리별 프로젝트 가져오기
export function getProjectsByCategory(category) {
  switch (category) {
    case 'ai':
      return aiProjects;
    case 'fullstack':
      return fullstackProjects;
    default:
      return [];
  }
}

// 카테고리 경로 가져오기
export function getCategoryByPath(path) {
  if (path === 'ai') return 'ai';
  if (path === 'fullstack') return 'fullstack';
  return null;
}

// ID로 프로젝트 가져오기
export function getProjectById(category, id) {
  const projects = getProjectsByCategory(category);
  return projects.find(project => project.id === id);
}


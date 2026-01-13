# 프로젝트 포트폴리오 웹사이트

React로 만든 개인 프로젝트 포트폴리오 웹사이트입니다.

## 기능

- Home 페이지: 프로젝트 카테고리 소개
- Fullstack 페이지: 풀스택 프로젝트 목록
- AI 페이지: AI/ML 프로젝트 목록
- 반응형 디자인
- GitHub Pages 배포 지원

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 프로덕션 빌드
npm run build
```

## GitHub Pages 배포

1. `package.json`의 `homepage` 필드를 본인의 GitHub Pages URL로 수정하세요:
   ```json
   "homepage": "https://waguwagu796.github.io"
   ```

2. GitHub Pages에 배포:
   ```bash
   npm run deploy
   ```

   또는 수동으로:
   ```bash
   npm run build
   # build 폴더의 내용을 gh-pages 브랜치에 푸시
   ```

## 프로젝트 추가하기

각 페이지(`src/pages/Fullstack.js`, `src/pages/AI.js`)의 `projects` 배열에 프로젝트 정보를 추가하면 됩니다.

```javascript
{
  id: 1,
  title: '프로젝트 제목',
  description: '프로젝트 설명',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/...',
  demo: 'https://demo-url.com',
  video: 'https://www.youtube.com/watch?v=VIDEO_ID' // YouTube URL 또는 비디오 파일 경로
}
```

### 비디오 추가 방법

프로젝트에 비디오를 추가하려면 `video` 필드를 사용하세요:

1. **YouTube 비디오**: YouTube URL을 입력하면 자동으로 임베드됩니다.
   ```javascript
   video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
   // 또는
   video: 'https://youtu.be/dQw4w9WgXcQ'
   ```

2. **직접 비디오 파일**: `public` 폴더에 비디오 파일을 넣고 경로를 지정합니다.
   ```javascript
   video: '/videos/project-demo.mp4'
   ```

비디오가 없는 경우 `video: ''`로 두면 비디오 영역이 표시되지 않습니다.



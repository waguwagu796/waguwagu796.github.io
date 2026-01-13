import React from 'react';
import './VideoPlayer.css';

function VideoPlayer({ videoUrl, title }) {
  if (!videoUrl) return null;

  // YouTube URL인지 확인
  const isYouTube = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/.test(videoUrl);
  
  // YouTube 비디오 ID 추출
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  if (isYouTube) {
    const videoId = getYouTubeId(videoUrl);
    if (videoId) {
      return (
        <div className="video-container">
          <iframe
            className="video-player"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title || 'Project Video'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
  }

  // 일반 비디오 파일 (MP4, WebM 등)
  return (
    <div className="video-container">
      <video className="video-player" controls>
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;


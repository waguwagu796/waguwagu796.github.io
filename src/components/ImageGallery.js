import React, { useState, useEffect, useCallback } from 'react';
import './ImageGallery.css';

function ImageGallery({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const normalizedImages = images ? images.map((image) => {
    if (typeof image === 'string') {
      return { url: image, description: '' };
    }
    return image;
  }) : [];

  const closeModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // 키보드 이벤트 처리
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && selectedImageIndex > 0) {
        e.preventDefault();
        setSelectedImageIndex(selectedImageIndex - 1);
      } else if (e.key === 'ArrowRight' && selectedImageIndex < normalizedImages.length - 1) {
        e.preventDefault();
        setSelectedImageIndex(selectedImageIndex + 1);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, normalizedImages.length, closeModal]);

  if (!images || images.length === 0) return null;

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = (e) => {
    e.stopPropagation();
    if (selectedImageIndex < normalizedImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // URL에서 파일 이름 추출 (확장자 제외)
  const getFileNameWithoutExtension = (url) => {
    const parts = url.split('/');
    const fileName = parts[parts.length - 1];
    const lastDotIndex = fileName.lastIndexOf('.');
    return lastDotIndex > 0 ? fileName.substring(0, lastDotIndex) : fileName;
  };

  const currentImage = selectedImageIndex !== null ? normalizedImages[selectedImageIndex] : null;

  return (
    <>
      <div className="image-gallery">
        {normalizedImages.map((imageInfo, index) => (
          <div
            key={index}
            className="gallery-item-wrapper"
          >
            <div
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img
                src={imageInfo.url}
                alt={imageInfo.description || `Project image ${index + 1}`}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item-info">
              <div className="gallery-item-name">
                {getFileNameWithoutExtension(imageInfo.url)}
              </div>
              {imageInfo.description && (
                <div className="gallery-item-description">
                  {imageInfo.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && currentImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            {selectedImageIndex > 0 && (
              <button 
                className="modal-nav-button modal-nav-prev" 
                onClick={goToPrevious}
                aria-label="이전 이미지"
              >
                ‹
              </button>
            )}
            
            {selectedImageIndex < normalizedImages.length - 1 && (
              <button 
                className="modal-nav-button modal-nav-next" 
                onClick={goToNext}
                aria-label="다음 이미지"
              >
                ›
              </button>
            )}

            <div className="modal-image-wrapper">
              <img 
                src={currentImage.url} 
                alt={currentImage.description || "Enlarged view"} 
                className="modal-image" 
              />
              <div className="modal-image-title">
                {getFileNameWithoutExtension(currentImage.url)}
              </div>
            </div>
            
            {currentImage.description && (
              <div className="modal-description">
                {currentImage.description}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;


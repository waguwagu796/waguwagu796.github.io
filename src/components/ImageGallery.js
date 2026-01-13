import React, { useState } from 'react';
import './ImageGallery.css';

function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="image-gallery">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(imageUrl)}
          >
            <img
              src={imageUrl}
              alt={`Project image ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Enlarged view" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;


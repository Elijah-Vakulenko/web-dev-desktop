import React, { useState, useEffect } from 'react';
import images from '../../assets/cheatsheetGallery.json';
import Modal from "react-modal";

const CheatsheetGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const customStyles = {
    content: {
      padding: "0",
      background: "unset",
      overflow: "unset",
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1000,
    },
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        closeModal(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <div className={`grid-item grid-item-${image.id}`} key={image.id}>
          <img
            src={image.url}
            alt={`Image ${image.id}`}
            onClick={() => handleImageClick(index)}
          />
        </div>
      ))}
      <Modal
        style={customStyles}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="overlay"
        contentLabel="Image Modal"
        appElement={document.getElementById("root")}
      >
        {selectedImageIndex !== null && (
          <div className="modal-content">
            <button className="prev-button" onClick={handlePrev}>Previous</button>
            <img 
              src={images[selectedImageIndex].url} 
              alt={`Image ${images[selectedImageIndex].id}`}
              style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            />
            <button className="next-button" onClick={handleNext}>Next</button>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CheatsheetGallery;

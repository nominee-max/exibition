import React, { useState, useEffect, useCallback } from 'react';
import {PHOTOS} from './Photos.jsx'; 
import './Carsoul.css';

const Carsoul = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize navigation to reuse in useEffect and buttons
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  const getPhotoStyle = (index) => {
    const photo = PHOTOS[index];
    const aspectRatio = photo.width / photo.height;
    const total = PHOTOS.length;
    // Calculate the shortest path for rotation
    let offset = index - currentIndex;
    
    if (offset > total / 2) offset -= total;
    if (offset <= -total / 2) offset += total;

    const absOffset = Math.abs(offset);
    const isActive = offset === 0;
    const isVisible = absOffset <= 1; // Only show current, next, and previous

    const slideVW = 70; // percent of viewport width per step

    return {
      transform: `
        translateX(${offset * slideVW}vw) 
        rotateY(${offset * -35}deg)
        translateZ(${isActive ? 0 : -300}px)
        scale(${isActive ? 1 : 0.8})
      `,
      opacity: isVisible ? (isActive ? 1 : 0.6) : 0,
      zIndex: 10 - absOffset,
      pointerEvents: isVisible ? (isActive ? 'auto' : 'none') : 'none',
      willChange: 'transform, opacity',
      aspectRatio: aspectRatio,
    };
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h1>Photo Exhibition</h1>
      </div>

      <div className="carousel-viewport">
        {PHOTOS.map((photo, index) => {
          const isPortrait = photo.height > photo.width;
          return (
            <div
              key={index}
              className={`carousel-photo ${isPortrait ? 'portrait' : ''}`}
              style={getPhotoStyle(index)}
            >
              {photo.placeholder ? (
                <div className="placeholder" style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f0f0f0',
                  color: '#999',
                }}>
                  Photo {photo.id} ({photo.width}x{photo.height})
                </div>
              ) : (
                <img src={photo.src} alt={`Slide ${index + 1}`} />
              )}
            </div>
          );
        })}
      </div>

      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prevSlide} aria-label="Previous">
          ◀
        </button>

        <div className="carousel-dots">
          {PHOTOS.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button className="carousel-btn" onClick={nextSlide} aria-label="Next">
          ▶
        </button>
      </div>

      <div className="carousel-counter">
        {currentIndex + 1} of {PHOTOS.length}
      </div>
    </div>
  );
};

export default Carsoul;
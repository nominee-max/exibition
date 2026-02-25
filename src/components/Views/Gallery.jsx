import React from "react";
import { PHOTOS } from "./Photos.jsx";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">Gallery</h1>
        <div className="gallery-title-underline"></div>
        <p className="gallery-subtitle">Exploring Energy: From Abundance to Scarcity</p>
      </div>

      <div className="gallery-grid">
        {PHOTOS.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img
              src={photo.src}
              alt={`Gallery ${photo.id}`}
              className="gallery-image"
            />
            <p className="gallery-quote">{photo.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
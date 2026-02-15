import React from "react";
import { PHOTOS } from "./Photos.jsx";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>

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
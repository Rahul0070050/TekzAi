import React from "react";
import "./FeatureShowcase.css";

const FeatureShowcase = ({ feature = {} }) => {
  return (
    <div className="feature-container">
      {/* Row 1: Image Left, Points Right */}
      <div className="feature-row row-normal">
        <div className="feature-image">
          <img src={feature?.img1} alt="Feature Top" />
        </div>
        <div className="feature-content">
          <h2 className="section-title">Key Features</h2>
          <ul className="feature-list">
            {feature?.points?.map((point, i) => (
              <li key={i}>
                <span className="check">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="feature-content">
          <h2 className="section-title">Highlights</h2>
          <ul className="feature-list">
            {feature?.highlights?.map((highlight, i) => (
              <li key={i}>
                <span className="check">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Row 2: Highlights Left, Image Right
      <div className="feature-row row-reverse">
        <div className="feature-image">
          <img src={feature?.img2} alt="Feature Bottom" />
        </div>
      </div> */}
    </div>
  );
};

export default FeatureShowcase;

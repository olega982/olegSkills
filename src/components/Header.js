import "../styles.css";
import React from "react";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-accent header-accent-1"></div>
        <div className="header-accent header-accent-2"></div>

        <div className="header-content">
          <h1 className="app-subtitle floating-element">
            Welcome to <span className="gradient-text">OlegSkills</span>
          </h1>

          <p className="header-description">
            Here you can find skills i have and highlight the one you need
          </p>

          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">16</span>
              <span className="stat-label">Skills Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Categories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

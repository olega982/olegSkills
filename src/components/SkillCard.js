import React from "react";
import "../styles.css";

export default function SkillCard({ skill, isInStack, toggleStack }) {
  const errorHandler = (e) => (e.target.src = "images/default.jpg");

  function ratingFilter(rating) {
    if (rating >= 8) {
      return "rating-good";
    }
    if (rating >= 5 && rating < 8) {
      return "rating-ok";
    }
    return "rating-bad";
  }

  return (
    <div key={skill.id} className="skill-card">
      <img
        src={`images/${skill.image}`}
        alt={skill.title}
        onError={errorHandler}
      />
      <div className="skill-card-info">
        <h3 className="skill-card-title">{skill.title}</h3>
        <div>
          <span className="skill-card-genre">{skill.genre}</span>
          <span className={`skill-card-rating ${ratingFilter(skill.rating)}`}>
            {skill.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isInStack}
            onChange={() => toggleStack(skill.id)}
          />
          <span className="slider">
            <span className="slider-label">
              {isInStack ? "In Your Stack" : "Add to Stack"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

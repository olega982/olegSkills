import { useState } from "react";
import React from "react";
import "../styles.css";
import SkillCard from "./SkillCard";

export default function SkillsGrid({ skills, stack, toggleStack }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All skills");
  const [rating, setRating] = useState("All");

  function handleSearch(event) {
    setSearch(event.target.value);
  }
  function handleType(event) {
    setType(event.target.value);
  }

  function filterSearch(skill) {
    return skill.title.toLowerCase().includes(search.toLowerCase());
  }
  function filterRating(skill, rating) {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return skill.rating >= 8;
      case "Ok":
        return skill.rating >= 5 && skill.rating < 8;
      case "Bad":
        return skill.rating < 5;
      default:
        console.log("rating is wrong!");
    }
  }
  function filterType(skill, type) {
    return (
      type === "All skills" || skill.type.toLowerCase() === type.toLowerCase()
    );
  }

  const filteredSkills = skills.filter(
    (skill) =>
      filterSearch(skill) &&
      filterRating(skill, rating) &&
      filterType(skill, type)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Type Skill"
        onChange={handleSearch}
        value={search}
        className="search-input"
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Type</label>
          <select
            className="filter-dropdown"
            onChange={handleType}
            value={type}
          >
            <option>All skills</option>
            <option>Language</option>
            <option>Framework</option>
            <option>Database</option>
            <option>Tool</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            toggleStack={toggleStack}
            isInStack={stack.includes(skill.id)}
          />
        ))}
      </div>
    </div>
  );
}

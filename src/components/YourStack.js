import "../styles.css";
import React from "react";
import SkillCard from "./SkillCard";

export default function YourStack({ skills, stack, toggleStack }) {
  const selectedSkills = skills.filter((skill) => stack.includes(skill.id));

  return (
    <div className="title">
      <h2>Looks like you found the following Oleg skills you need</h2>
      <div className="stack-grid">
        {selectedSkills.map((skill) => (
          <SkillCard skill={skill} isInStack={true} toggleStack={toggleStack} />
        ))}
      </div>
    </div>
  );
}

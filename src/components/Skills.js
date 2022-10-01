import "./SkillCard.css";
import React from 'react';
import SkillCard from "./SkillCard";
import SkillCardData from "./SkillCardData";

const Skills = () => {
    return (
        <div className="skill-container">
            <h1 className="skill-heading">Skills/Tools</h1>
            <div className="skill-card-container">
                {SkillCardData.map((value, index) => {
                    return (
                        <SkillCard
                            key={index}
                            skilllogo={value.skilllogo}
                            skillname={value.skillname}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
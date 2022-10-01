import "./SkillCard.css";
import React from 'react'

const SkillCard = (props) => {
    return (
        <div className="skill-card">
            <img className="skill-logo" src={props.skilllogo} alt=""></img>
            <p className="skill-name">{props.skillname}</p>
        </div>
    )
}

export default SkillCard
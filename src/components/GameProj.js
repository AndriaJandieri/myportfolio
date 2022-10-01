import "./GameProjCard.css";
import GameProjCard from "./GameProjCard";
import GameProjCardData from "./GameProjCardData";
import React from 'react'

const GameProj = () => {
    return (
        <div className="g-container">
            <h1 className="g-card-heading">Game Development</h1>
            <div className="g-card-container">
                {GameProjCardData.map((value, index) => {
                    return (
                        <GameProjCard
                            key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}
                            text={value.text}
                            viewlink={value.viewlink}
                            videolink={value.videolink}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default GameProj
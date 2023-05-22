import "./AndroidProjCard.css";
import AndroidProjCard from "./AndroidProjCard";
import AndroidProjCardData from "./AndroidProjCardData";
import React from 'react'

const AndroidProj = () => {
    return (
        <div className="a-container">
            <h1 className="a-card-heading">Android Development</h1>
            <div className="a-card-container">
                {AndroidProjCardData.map((value, index) => {
                    return (
                        <AndroidProjCard
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

export default AndroidProj
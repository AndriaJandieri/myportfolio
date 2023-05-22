import "./ProjCard.css";
import ProjCard from "./ProjCard";
import ProjCardData from "./ProjCardData";
import React from 'react'

const Proj = () => {
    return (
        <div className="container">
            <h1 className="card-heading">Web Development</h1>
            <div className="card-container">
                {ProjCardData.map((value, index) => {
                    return (
                        <ProjCard
                            key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}
                            text={value.text}
                            viewlink={value.viewlink}
                            sourcelink={value.sourcelink}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Proj
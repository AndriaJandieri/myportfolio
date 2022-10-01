import "./GameProjCard.css";
import React from 'react'
import { FaGooglePlay } from "react-icons/fa";

const GameProjCard = (props) => {
    return (
        < div className="g-project-card" >
            <h2 className="g-project-title">{props.title}</h2>
            <a href={props.videolink}
                target="_blank"
                rel="noopener noreferrer">

                <img src={props.imgsrc} alt="" />
            </a>

            <div className="g-project-details">
                <p>{props.text}</p>

                <div className="g-card-btns">
                    <a
                        href={props.viewlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn">
                        <FaGooglePlay className="g-play-icon"
                            size={30} style={{ color: "#faf7ff", marginRight: "3rem" }} />
                        Visit Game Link
                    </a>
                </div>
            </div>
        </div >
    )
}

export default GameProjCard
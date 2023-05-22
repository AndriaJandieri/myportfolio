import "./AndroidProjCard.css";
import React from 'react'
import { FaGooglePlay } from "react-icons/fa";

const AndroidProjCard = (props) => {
    return (
        < div className="a-project-card" >
            <h2 className="a-project-title">{props.title}</h2>
            <a href={props.videolink}
                target="_blank"
                rel="noopener noreferrer">

                <img src={props.imgsrc} alt="" />
            </a>

            <div className="a-project-details">
                <p>{props.text}</p>

                <div className="a-card-btns">
                    {props.viewlink && <a
                        href={props.viewlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn">
                        <FaGooglePlay className="a-play-icon"
                            size={30} style={{ color: "#faf7ff", marginRight: "3rem" }} />
                        Visit Application Link
                    </a>}
                </div>
            </div>
        </div >
    )
}

export default AndroidProjCard
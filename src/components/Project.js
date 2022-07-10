import React from "react";

function Project({ props }) {
    return (
        <div className="project">
            <img src={props.image} alt={`project title is ${props.title}`} className="project-image"></img>
            <div className="project-content">
                <h2 className="project-title">{props.title}</h2>
                <p className="project-desc">{props.description}</p>
                <div className="project-links">
                    <a href={props.liveDemoLink} target={"_blank"} className="project-link">Live Demo</a>
                    <a href={props.githubLink} target={"_blank"} className="project-link">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Project
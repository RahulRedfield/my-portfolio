import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faHtml5, faJsSquare, faReact, faGitAlt, faNode, faGithub } from "@fortawesome/free-brands-svg-icons"

function Skills() {
    return (
        <section className="section--skills" id="skills">
            <h1 className="section--title">Skills</h1>
            <div className="skills-box">
                <div className="skill">
                    <FontAwesomeIcon className="skill-logo" icon={faCss3Alt} />
                    <p className="skill-name">CSS</p>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="skill-logo" icon={faHtml5} />
                    <p className="skill-name">HTML</p>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="skill-logo" icon={faJsSquare} />
                    <p className="skill-name">JAVASCRIPT</p>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="skill-logo" icon={faReact} />
                    <p className="skill-name">REACT JS</p>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="skill-logo" icon={faNode} />
                    <p className="skill-name">NODE JS</p>
                </div>
                <div className="skill">
                    <p className="skill-name express">Express<br />Js</p>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="skill-logo" icon={faGitAlt} />
                    <p className="skill-name">GIT</p>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="skill-logo" icon={faGithub} />
                    <p className="skill-name">GITHUB</p>
                </div>
            </div>
        </section>
    )
}

export default Skills
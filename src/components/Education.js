import React from "react";
import { faSchool, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Education() {
    return (
        <section className="section--education" id="education">
            <h1 className="section--title">Education</h1>
            <div className="education-box">
                <div className="education">
                    <FontAwesomeIcon className="institute" icon={faSchool} />
                    <p className="school">10th/Board</p>
                    <p className="year">2015</p>
                    <p className="course">GOVT BOYS SR SEC SCHOOL MUNDKA DELHI-41</p>
                </div>
                <div className="education">
                    <FontAwesomeIcon className="institute" icon={faSchool} />
                    <p className="school">12th/Board</p>
                    <p className="year">2018</p>
                    <p className="course">GOVT BOYS SR SEC SCHOOL MUNDKA DELHI-41</p>
                </div>
                <div className="education">
                    <FontAwesomeIcon className="institute" icon={faGraduationCap} />
                    <p className="school">BA Programme</p>
                    <p className="year">2021</p>
                    <p className="course">Delhi Univercity</p>
                </div>
            </div>
        </section>
    )
}

export default Education
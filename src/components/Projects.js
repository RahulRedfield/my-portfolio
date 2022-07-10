import React from "react";

import Project from "./Project";
import projectData from "../Data/projectData.json"

function Projects() {
    // const getData = async () => {
    //     const res = await fetch("../Data/projectData.json");
    //     const data = await res.json();
    //     console.log(data);
    // }

    // getData()

    return (
        <section className="section--projects" id="projects">
            <div className="projects-box">
                <h1 className="section--title">Projects</h1>
                {projectData.map((project, index) => <Project props={project} key={index} />)}
            </div>
        </section>
    )
}

export default Projects
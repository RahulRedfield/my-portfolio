import React from "react";

function Intro() {
    return (

        <section className="section--intro" id="home">
            <div className="intro-box">
                <div className="intro-text">
                    <h1 className="intro-name">Hello,<br></br> I am Rahul</h1>
                    <p className="intro-subtext">Web designer and developer.</p>
                </div>
                <img className="intro-image" src={"images/intro.jpg"} alt="illustration of a boy using laptop." />
            </div>
            <a href="#projects" className="scroll">Explore <br /> Down</a>
        </section>
    )
}

export default Intro
import React, { useState } from "react";

function Header() {

    const [addClass, setAddClass] = useState("");

    function handleClick() {
        setAddClass(preState => {
            return preState === "" ? "open" : "";
        })
    }

    return (
        <header className="section--header">
            <button onClick={handleClick} className={`nav-toggle ${addClass}`}>
                <span className="hamburger"></span>
            </button>
            <nav className={`header-nav ${addClass === "open" ? "show" : ""}`}>
                <h1 className="logo">{`<RAHUL/>`}</h1>
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home" onClick={handleClick} className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#projects" onClick={handleClick} className="nav-link">Projects</a></li>
                        <li className="nav-item"><a href="#skills" onClick={handleClick} className="nav-link">Skills</a></li>
                        <li className="nav-item"><a href="#education" onClick={handleClick} className="nav-link">Education</a></li>
                        <li className="nav-item"><a href="#contacts" onClick={handleClick} className="nav-link">Contacts</a></li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Header
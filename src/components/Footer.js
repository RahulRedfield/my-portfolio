import React from "react";

function Footer() {
    return (
        <footer className="section--footer" id="contacts">
            <div className="contact-box">
                <div className="contact-links">
                    <a href="#home" className="footer-logo contact-link">{`<RAHUL/>`}</a>
                    <a href="https://github.com/RahulRedfield" target={"_blank"} className="contact-link">GitHub</a>
                </div>
                <a className="footer-link" href='https://www.freepik.com/vectors/programming'>Programming vector created by storyset - www.freepik.com</a>
                <a className="footer-link" href="https://fontawesome.com/">All icons are used from Font Awesome.com</a>
            </div>
        </footer>
    )
}

export default Footer
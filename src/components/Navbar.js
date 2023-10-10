import React from "react";
import Logo from "../images/logo.png"

function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div>
                <ul className="nav-links">
                <li><a href="#services">Services</a></li>
                    <li><a href="#industries">Industries</a></li>
                    <li><a href="#cases">Cases</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div>
                <a href="#letstalk" className="cta-btn">Lets Talk</a>
            </div>
        </nav>
    );
}

export default Navbar;
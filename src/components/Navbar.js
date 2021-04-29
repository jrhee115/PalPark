import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css"

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1200) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        PP <i class="fas fa-bahai" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/administrator" className="nav-links" onClick={closeMobileMenu}>
                                Administrator
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/board-and-committees" className="nav-links" onClick={closeMobileMenu}>
                                Board/Committees
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/borough-depts" className="nav-links" onClick={closeMobileMenu}>
                                Borough Depts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/public-safety" className="nav-links" onClick={closeMobileMenu}>
                                Public Safety
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar

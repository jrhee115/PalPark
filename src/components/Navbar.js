import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
                            <Link to="/About-Us" className="nav-links" onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Mayor-and-Council" className="nav-links" onClick={closeMobileMenu}>
                                Mayor and Council
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Board-and-Committees" className="nav-links" onClick={closeMobileMenu}>
                                Board and Committees
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Borough-Depts" className="nav-links" onClick={closeMobileMenu}>
                                Borough Depts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Public-Safety" className="nav-links" onClick={closeMobileMenu}>
                                Public Safety
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Sign-Up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

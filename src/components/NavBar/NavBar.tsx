import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';
import logoTXT from '../../assets/logo/logo-txt.png';
import logoIMG from '../../assets/logo/logo-img.png';

export default function Navbar() {
    const location = useLocation();
    const [showForumsDropdown, setShowForumsDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
                    <img src={logoIMG} className="logo-img" alt="Logo icon" />
                    <img src={logoTXT} className="logo-text" alt="Logo text" />
                </Link>
            </div>

            {/* Hamburger Button */}
            <button
                className="hamburger"
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle menu"
            >
                <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            </button>

            {/* Links */}
            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li className={location.pathname.startsWith('/register') ? 'active' : ''}>
                    <Link to="/Explore" onClick={() => setMenuOpen(false)}>Concept Note</Link>
                </li>
                <li>
                    <Link to="/Convenership" onClick={() => setMenuOpen(false)}>Convene</Link>
                </li>
                <li>
                    <Link to="/Partnership" onClick={() => setMenuOpen(false)}>Partner</Link>
                </li>
                <li>
                    <Link to="/Programme" onClick={() => setMenuOpen(false)}>Programme</Link>
                </li>
                <li
                    className={`dropdown ${location.pathname.startsWith('/forums') ? 'active' : ''}`}
                    onClick={() => setShowForumsDropdown(prev => !prev)}
                >
                    Forums ▾
                    {showForumsDropdown && (
                        <ul className="dropdown-menu">
                            <li><Link to="/forum/Kisumu2024" onClick={() => setMenuOpen(false)}>2024 I4WASH Kisumu</Link></li>
                            <li><Link to="/forum/Nakuru2023" onClick={() => setMenuOpen(false)}>2023 I4WASH Nakuru</Link></li>
                            <li><Link to="/forum/Kampala2023" onClick={() => setMenuOpen(false)}>2023 I4WASH Kampala</Link></li>
                            <li><Link to="/forum/Malindi2022" onClick={() => setMenuOpen(false)}>2022 I4WASH Malindi</Link></li>
                        </ul>
                    )}
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>About</Link>
                </li>
            </ul>
        </nav>
    );
}

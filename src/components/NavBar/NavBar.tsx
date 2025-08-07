import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const location = useLocation();
    const [showForumsDropdown, setShowForumsDropdown] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Logo</Link>
            </div>

            <ul className="navbar-links">
                <li
                    className={`dropdown ${location.pathname.startsWith('/forums') ? 'active' : ''}`}
                    onClick={() => setShowForumsDropdown(prev => !prev)}
                >
                    Forums ▾
                    {showForumsDropdown && (
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/forum/Kisumu2024">I4WASH Kisumu</Link>
                            </li>
                            <li>
                                <Link to="/forum/Nakuru2023">I4WASH Nakuru</Link>
                            </li>
                            <li>
                                <Link to="/forum/Kampala2023">I4WASH Kampala</Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className={location.pathname.startsWith('/register') ? 'active' : ''}>
                    <Link to="/register/step1">Registration</Link>
                </li>

                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/AboutUs">About</Link>
                </li>

            </ul>
        </nav>
    );
}

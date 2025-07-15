import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Logo</Link>
            </div>

            <ul className="navbar-links">
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">Home</Link>
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">About</Link>
                </li>
                <li className={location.pathname.startsWith('/register') ? 'active' : ''}>
                    <Link to="/register/step1">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

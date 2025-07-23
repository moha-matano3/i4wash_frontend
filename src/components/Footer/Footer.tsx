import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">

            </div>
            <div className="footer-section">

            </div>
            <div className="footer-section">
                <Link to="/register/sponsorship" className="">
                    Sponsorship Registration
                </Link>
            </div>
        </footer>
    );
}

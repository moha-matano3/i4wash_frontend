import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section-left">
                <Link to="/register/sponsorship" className="">
                    Sponsorship Registration
                </Link>
            </div>
            <div className="footer-section-centre">
                <Link to="/register/sponsorship" className="">
                    Sponsorship Registration
                </Link>
            </div>
            <div className="footer-section-right">
                <Link to="/register/sponsorship" className="">
                    Sponsorship Registration
                </Link>
            </div>
        </footer>
    );
}

import './Footer.css';
import { Link } from 'react-router-dom';
import Invitation from "../../assets/Files/I4WASH Forum Malindi-Invitation letter.pdf"
import CountdownTimer from "../CountdownTimer/CountdownTimer.tsx";
import logoIMG from "../../assets/logo/QGLogo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section-left">
                <h4>Resources</h4>
                    <a
                        href={Invitation}
                        download="invitation.pdf"
                        rel="noopener noreferrer"
                    >
                        Download Invitation
                    </a>
                <a
                    href={Invitation}
                    download="invitation.pdf"
                    rel="noopener noreferrer"
                >
                    Download Logistic note
                </a>
            </div>

            <div className="footer-section-centre">
                <h4>About</h4>
                <Link to="/AboutUs">
                    About Innovate4Wash
                </Link>
                <div className="footer-content">
                    <Link to="https://quercus-group.com" target="_blank" rel="noopener noreferrer">
                        Powered by <img src={logoIMG} className="qg-logo" alt="Logo icon" />
                    </Link>
                </div>
            </div>

            <div className="footer-section-right">
                <CountdownTimer />
            </div>
        </footer>

    );
}

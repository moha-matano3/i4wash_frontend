import './Footer.css';
import { Link } from 'react-router-dom';
import Invitation from '../../assets/Files/I4WASH Forum Malindi - Invitation letter.pdf'
import CountdownTimer from "../CountdownTimer/CountdownTimer.tsx";
import React from "react";

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
            </div>

            <div className="footer-section-centre">
                <h4>About</h4>
                <Link to="/AboutUs">
                    About Innovate4Wash
                </Link>
            </div>

            <div className="footer-section-right">
                <CountdownTimer />
            </div>
        </footer>

    );
}

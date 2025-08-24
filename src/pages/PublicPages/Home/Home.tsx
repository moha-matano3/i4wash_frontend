import './Home.css';
import { useNavigate } from 'react-router-dom';
import LogoCarousel from "../../../components/LogoCarousel/LogoCarousel.tsx";
import Invitation from "../../../assets/Files/I4WASH Forum Malindi-Invitation letter.pdf"
import exploreBtn from "../../../assets/icons/ExploreBtn.svg";
import Footer from "../../../components/Footer/Footer.tsx";

export default function Home() {
    const navigate = useNavigate();
    return (
    <>
        <section className="container">
            {/* Subheader */}
            <h4 className="subheader">
                I4WASH 2025 FORUM, MALINDI · 5th – 8th November 2025
            </h4>

            {/* Main Header */}
            <h1 className="main-header">
                INNOVATE4WASH 2025
            </h1>

            {/* Description Paragraph */}
            <p className="description">
                Innovate4WASH (I4WASH) is East Africa’s premier platform for innovation, collaboration, and impact in the Water, Sanitation, and Hygiene (WASH) sector. More than just a conference, I4WASH is a vibrant community that breaks down silos and brings together public institutions, private sector players, civil society, entrepreneurs, funders, and academia for partnerships and knowledge exchange.
                Since 2018, the four day marketplace forum has provided visibility to over 1,000 impactful WASH solutions and initiatives, driving scalable and sustainable change across East Africa that leverages innovative finance. From igniting a thriving  WASH entrepreneurship ecosystem to creating resilient communities, I4WASH is shaping the future of water and sanitation in Africa; one solution, one connection, and one breakthrough at a time.
                <a
                    href={Invitation}
                    download="invitation.pdf"
                    rel="noopener noreferrer"
                >
                    Download Invitation
                </a>
            </p>

            {/* Explore Button */}
            <button className="explore-button" onClick={() => navigate('/Explore')}>
                <img src={exploreBtn} alt="Explore Button" style={{ width: '100%', height: '100%' }} />
            </button>

            {/*<CountdownTimer />*/}
        </section>
        <section className="contact">
            <h3 className="head">Our Partners</h3>
            <LogoCarousel />
        </section>
        <Footer />
    </>
    );
}

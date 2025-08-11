import "./ConceptNote.css";
import water from "../../../assets/images/water.jpg"
import water2 from "../../../assets/images/I4WASHbanner.png"
import water3 from "../../../assets/images/Malindi.jpg"

export default function ConceptNote() {
    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${water})` }} >
                Innovate4WASH (I4WASH) 2025: Scaling Resilient WASH Solutions
            </div>
            <div className="concept-note-container">

                <section className="content-section image-right">
                    <img
                        src={water3}
                        alt="I4WASH Forum"
                        className="section-image"
                    />
                    <p>
                        I4WASH is Africa's premier platform for driving innovation and collaboration in Water, Sanitation, and Hygiene (WASH). More than just a conference,
                        it's a movement that brings together government, the private sector, civil society, researchers, and communities to develop scalable, sustainable
                        solutions for WASH challenges across the continent.
                    </p>
                </section>

                <section className="content-section image-left">
                    <img
                        src={water2}
                        alt="Climate Resilience"
                        className="section-image"
                    />
                    <p>
                        The 2025 theme, <strong>"Scaling Resilient WASH Solutions – Advancing Sustainable Market-Based Solutions for a Changing Climate in Kenya,"</strong> focuses on climate resilience,
                        innovation, and inclusive impact. This aligns with Sustainable Development Goals 6 and 13, and Kenya's Constitution, emphasizing climate-smart technologies,
                        innovative financing, menstrual hygiene, water resource management, and sanitation systems.
                    </p>
                </section>

                <section className="content-section">
                    <p>
                        Since 2017, I4WASH has showcased over 1000 solutions across three continents, acting as a catalyst for policy reform, knowledge sharing,
                        and commercialization of impactful innovations. Attendees can expect engaging sessions, practical tools, high-level dialogues,
                        and real-world solutions designed to build resilient, inclusive, and future-ready WASH systems. I4WASH isn't just shaping Africa’s WASH future—it’s accelerating it.
                    </p>
                </section>

                <section className="content-section image-right">
                    <img
                        src={water}
                        alt="Diverse Audience"
                        className="section-image"
                    />
                    <h2>Who Should Attend?</h2>
                    <p>We’re bringing together a diverse audience from all corners of the WASH sector:</p>
                    <ul>
                        <li>Government Decision Makers and Trailblazers</li>
                        <li>WASH Pioneers and Organizations</li>
                        <li>Corporate Changemakers</li>
                        <li>Financial Institutions</li>
                        <li>Stakeholder Alliances including civil society and academia</li>
                        <li>Community Representatives and WASH Champions</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Conference Structure and Priority Areas</h2>
                    <p>The four-day conference will feature keynote addresses, panel discussions, technical sessions, marketplace exhibitions, and pitches. Thematic sessions focus on:</p>
                    <ul>
                        <li>Climate-Resilient WASH Infrastructure</li>
                        <li>Financing Models for Sustainable WASH Markets</li>
                        <li>Digital Innovations for WASH Monitoring and Access</li>
                        <li>Behaviour Change and Community Engagement</li>
                        <li>Public-Private Partnerships in Climate-Smart WASH</li>
                        <li>Policy and Regulation for Market-Driven Resilience</li>
                    </ul>
                </section>

                <section className="content-section">
                    <p className="closing-quote">
                        "Innovation flows where collaboration grows."
                    </p>
                </section>
            </div>
        </>
    );
}

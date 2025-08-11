import "./Programme.css";
import water from "../../../assets/images/water2.jpg";

export default function Programme() {
    return (
        <>
            <div className="banner" style={{backgroundImage: `url(${water})`}}>
                <h1 className="about-title">Innovate4WASH (I4WASH) 2025: Scaling Resilient WASH Solutions</h1>
            </div>
            <div className="programme-container">
                <p>
                    Join us in our mission to enhance Water, Sanitation, and Hygiene (WASH)
                    solutions through innovation, partnerships, and community engagement.
                </p>

                <h2>Key Objectives</h2>
                <ul>
                    <li>Encourage local innovation in WASH systems</li>
                    <li>Promote sustainable resource management</li>
                    <li>Foster collaborations among stakeholders</li>
                </ul>

                <h2>Event Details</h2>
                <p><span className="highlight">Date:</span> November 5th–8th, 2025</p>
                <p><span className="highlight">Location:</span> Nairobi, Kenya</p>

                <h2>Call to Action</h2>
                <p>
                    Interested in participating? Submit your application and join us in
                    building sustainable WASH solutions.
                </p>
            </div>
        </>
    );
}

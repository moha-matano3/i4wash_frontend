import './AboutI4WASH.css';
import banner from "../../../assets/images/I4WASHbanner.png";

export default function AboutI4WASH() {
    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
                <h1 className="about-title">About Innovate4WASH (I4WASH)</h1>
            </div>
            <section className="about-i4wash">
                <div className="about-container">
                    <p className="about-intro">
                        <strong>Innovate4WASH (I4WASH)</strong> is more than just a conference — it's a movement, a
                        community, and a catalyst for change.
                        As East Africa’s leading platform dedicated to Water, Sanitation, and Hygiene (WASH) innovation,
                        I4WASH brings together a vibrant
                        ecosystem of governments, private sector actors, researchers, civil society, and communities to
                        spark and scale transformative
                        WASH solutions across the continent.
                    </p>

                    <p>
                        Since its inception, I4WASH has showcased over 1000 WASH innovations across three continents. We
                        provide a dynamic space for dialogue,
                        knowledge exchange, and strategic partnerships. At our core, we focus on unlocking the full
                        potential of homegrown solutions,
                        advancing inclusive and climate-resilient technologies, and accelerating investments in WASH
                        systems that serve everyone — especially
                        those at the last mile.
                    </p>

                    <p className="closing-quote">
                        "Scaling Resilient WASH Solutions: Advancing Sustainable Market-Based Solutions for a Changing Climate in Kenya."
                    </p>

                    <h2 className="about-subtitle">Our Mission</h2>
                    <p>
                        I4WASH exists to bridge bold ideas with bold action. Our mission is to support the design,
                        development, and deployment of scalable WASH solutions by creating
                        spaces where innovators, policymakers, investors, and enablers can converge and collaborate.
                    </p>
                    <p>
                        We champion African ingenuity — amplifying locally developed technologies and tools that address
                        real water and sanitation challenges.
                        From innovative financing mechanisms to policy reform and grassroots innovation, we connect
                        ideas to impact.
                    </p>

                    <h2 className="about-subtitle">Our Vision</h2>
                    <p>
                        We envision an Africa where equitable access to clean and safe water is a lived reality. A
                        continent where communities are resilient to
                        climate shocks, empowered by reliable WASH systems, and supported by institutions that
                        prioritize sustainability and inclusion.
                    </p>
                    <p>
                        I4WASH is building that future — through climate-resilient solutions, inclusive growth, and
                        pathways for long-term impact.
                        We believe water access is a fundamental human right essential to health, education,
                        opportunity, and dignity.
                    </p>

                    <div className="about-cta">
                        <h2>Join the Movement</h2>
                        <p>
                            I4WASH is where Africa’s WASH future is being imagined, built, and accelerated.
                            Whether you're a policymaker, startup, donor, NGO, SME, financial institution, or
                            researcher, your voice matters here.
                        </p>
                        <p className="about-highlight">
                            Together, let’s create a resilient and sustainable WASH future for every African generation.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

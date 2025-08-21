import "./Programme.css";
import water from "../../../assets/images/programme.jpg";

export default function Programme() {
    return (
        <>
            <div className="banner" style={{backgroundImage: `url(${water})`}}>
                <h1 className="about-title"></h1>
            </div>
            <div className="programme-container">
                <p>
                    Join us in our mission to enhance Water, Sanitation, and Hygiene (WASH)
                    solutions through innovation, partnerships, and community engagement.
                </p>

                {/*pitch guidelines*/}
                {/*programme download*/}

                <h2>Key Objectives</h2>
                <p>The Innovate for Water and Sanitation, the Forum will have the following five (5) key SMART
                    objectives.</p>
                <ul>
                    <li>
                        Demonstrate the role of the private sector in achieving water security by providing
                        new thinking and new ways for stakeholders to work together toward water security,
                        bringing many of them out of their comfort zones in the process.
                    </li>
                    <li>
                        Provide an avenue for discussion between different WASH stakeholders along the
                        value chains, prioritizing the needs and gaps that impede the adoption of improved
                        WASH solutions.
                    </li>
                    <li>
                        Create a trust-building environment and facilitate connections for deal-making:
                        Create visibility for local stakeholders who have a deep knowledge of the local
                        context and pressure realities in which they operate, including mature for-profit
                        solutions providers, operators and technology providers, impact investors, water
                        utilities, government agencies and regulators, development banks, corporations,
                        and incubators.
                    </li>
                    <li>
                        Develop solid fruitful relationships and consolidate local ecosystems: Provide the
                        opportunity to organizations to present and discuss their needs and current and
                        realizable projects.
                    </li>
                    <li>
                        Build the capacity and enable the scaling-up of relevant water nexus technologies
                        and business models in the local context: Leverage the interest of local organizations
                        who innovate, including disruptive technologies and social business models, to
                        contribute to SDGs, job creation, and empowerment of minorities (i.e., youth and women).
                    </li>
                </ul>
                <h2>Expected Outcomes</h2>
                <ul>
                    <li>
                        Facilitate connections for deal-making and partnerships.
                    </li>
                    <li>
                        Give visibility to organizations (Government, NGOs, SMEs, financial institutions,
                        impact funders, entrepreneurs, startups, academia, and WASH development partners)
                        presenting their needs and/or current projects (impact funds, coalitions, innovative
                        public/private models, new financial vehicles) to potential service providers
                        (social entrepreneurs, sanitation and technology experts, etc.), partners, and investors.
                    </li>
                    <li>
                        Form sustainable partnerships in adapting suitable innovations in combating threats
                        posed by climate change in the water and sanitation sector.
                    </li>
                    <li>
                        Strengthen and improve the desire and understanding of innovative business practices.
                    </li>
                    <li>
                        Improve hands-on action and implementation within the Water and Sanitation sector.
                    </li>
                    <li>
                        Promote climate-smart WASH technologies including water recycling and reuse.
                    </li>
                </ul>

                <p>
                    The days will be dynamic, with time allocated to facilitate connections between project owners,
                    potential partners and investors
                </p>

                <h3>Full programme to be shared later.</h3>
            </div>
        </>
    );
}

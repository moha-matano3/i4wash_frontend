import './Home.css';

export default function Home() {
    return (
        <div className="container">
            {/* Subheader */}
            <h4 className="subheader">
                I4WASH 2025 FORUM, MALINDI · 16 – 19 OCTOBER 2025
            </h4>

            {/* Main Header */}
            <h1 className="main-header">
                INNOVATE4WASH 2025
            </h1>

            {/* Description Paragraph */}
            <p className="description">
                Quercus Group is an international consulting company for sustainability and regional economic development based in Nairobi with subsidiaries in Copenhagen and Boston. Our expertise is collaboration and how to effectively address global and local challenges by breaking down silos between people and organisations. We do and have done so in 45+ countries worldwide.
            </p>

            {/* Explore Button */}
            <button className="explore-button">
                Explore I4WASH Malindi
            </button>
        </div>
    );
}

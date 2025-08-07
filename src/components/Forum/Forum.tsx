import React from 'react';
import './Forum.css';

interface ForumEvent {
    title: string;
    year: number;
    theme: string;
    description: string;
    highlights: string[];
    images?: string[];
    banner?: string;
}

interface ForumProps {
    event: ForumEvent;
}

const Forum: React.FC<ForumProps> = ({ event }) => {
    return (
        <div className="forum-container">
            <div className="forum-banner" style={{ backgroundImage: `url(${event.banner})` }}>
                <div className="forum-banner-overlay">
                    <h1 className="forum-title">
                        {event.title} {event.year}
                    </h1>
                    <p className="forum-theme">{event.theme}</p>
                </div>
            </div>

            <section className="forum-section">
                <h2 className="forum-section-title">Overview</h2>
                <p className="forum-description">{event.description}</p>
            </section>

            <section className="forum-section">
                <h2 className="forum-section-title">Key Highlights</h2>
                <ul className="forum-highlights">
                    {event.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                    ))}
                </ul>
            </section>

            {event.images && event.images.length > 0 && (
                <section className="forum-section">
                    <h2 className="forum-section-title">Gallery</h2>
                    <div className="forum-gallery">
                        {event.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Event image ${idx + 1}`}
                                className="forum-gallery-img"
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default Forum;

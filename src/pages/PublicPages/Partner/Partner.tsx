import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Partner.css';
import partnership from "../../../assets/images/partner.jpg";

export default function Partner() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organization: '',
        message: '',
        role: 'sponsor',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://www.i4wash.com:8000/api/method/i4wash_app.i4wash.api.sponsor_email.contact_sponsor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Email sent successfully!');
                setShowModal(false);
                navigate('/');
            } else {
                alert('Failed to send email.');
            }
        } catch (error) {
            console.error(error);
            alert('Error sending email.');
        }
    };

    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${partnership})` }}>
                <h1 className="about-title">Sponsorship & Partnership</h1>
            </div>

            <div className="packages-container">
                {/* Partners Content */}
                <div className="partners-section">
                    <p>
                        The forum fully depends on supporters from larger organizations driven by promoting and
                        developing
                        the WASH sector to the benefit of local communities – or corporates or financiers who have done
                        well
                        and want to give back or invest in the next generation of WASH adventures.
                    </p>
                    <h2>Why Partner with I4WASH?</h2>
                    <p>
                        Innovate4WASH is more than an event — it’s a high-stakes ecosystem for impact.
                        As a partner, you stand at the point where vision meets execution, where your investment
                        fuels the WASH revolution across Africa.
                    </p>
                    <ul>
                        <li><strong>Shape the Narrative:</strong> Influence the dialogue and future direction of
                            Africa’s WASH sector, elevating your organization as a sector leader.
                        </li>
                        <li><strong>Unlock Deal-Making:</strong> Access a curated environment built for forging powerful
                            partnerships, securing investments, and driving the commercialization of impactful
                            innovations.
                        </li>
                        <li><strong>Amplify Your Impact:</strong> Engage directly with decision-makers, innovators, and
                            financiers, gaining unparalleled access to the people and solutions that will help you
                            achieve your strategic goals.
                        </li>
                    </ul>
                    <p>
                        Join us in building a legacy of resilient communities and a water-secure Africa.
                        Together, we’re not just supporting change — we’re making it happen.
                    </p>
                    <h2>What Your Sponsorship Supports</h2>
                    <p>Your support allows us to organize the Innovate4WASH marketplace forum and thereby:</p>

                    <div className="sponsorship-grid">
                        <div className="sponsorship-block">
                            <h3>Sponsorship Impact</h3>
                            <ul>
                                <li>Enables innovators, enablers and financiers in East Africa’s WASH sector to come
                                    together
                                </li>
                                <li>Increases discovery of innovative solutions, finance, and potential partnerships
                                </li>
                                <li>Surfaces business opportunities, synergies, and collaborations</li>
                                <li>Supports a portfolio of impactful interventions for East Africa’s WASH sector</li>
                            </ul>
                        </div>

                        <div className="sponsorship-block">
                            <h3>Forum Outcomes</h3>
                            <ul>
                                <li>Understand government policies and programmes for sustainable water management</li>
                                <li>Showcase innovations in the Eastern African market and their value</li>
                                <li>Facilitate capital seekers and providers to connect</li>
                                <li>Provide insights into financing sources and requirements for WASH initiatives</li>
                                <li>Showcase intervention areas beyond financing</li>
                                <li>Create partnerships for sustainable water and sanitation management</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="packages-list sponsors-packages">
                    <h3>Our Sponsorship Packages</h3>
                    <div className="packages-grid">
                        <div className="package-card platinum">
                            <div className="package-header">
                                <h4>PLATINUM SUPPORTER</h4>
                            </div>
                            <ul className="package-features">
                                <li>Logo prime position</li>
                                <li>Keynote/plenary speaking</li>
                                <li>4 banners</li>
                                <li>1 Panel discussion.</li>
                                <li>Premium booth</li>
                                <li>10 passes</li>
                                <li>Full-page profile</li>
                                <li>Input into communiqué</li>
                                <li>KES: 4,000,000</li>
                            </ul>
                        </div>

                        <div className="package-card gold">
                            <div className="package-header">
                                <h4>GOLD SUPPORTER</h4>
                            </div>
                            <ul className="package-features">
                                <li>Prominent logo</li>
                                <li>Technical session speaking</li>
                                <li>3 banners</li>
                                <li>1 Panel discussion.</li>
                                <li>Standard booth</li>
                                <li>7 passes</li>
                                <li>Half-page profile</li>
                                <li>Input into communiqué</li>
                                <li>KES: 3,000,000</li>
                            </ul>
                        </div>

                        <div className="package-card silver">
                            <div className="package-header">
                                <h4>SILVER SUPPORTER</h4>
                            </div>
                            <ul className="package-features">
                                <li>Standard logo</li>
                                <li>Panelist speaking</li>
                                <li>2 banners</li>
                                <li>1 Panel discussion.</li>
                                <li>Standard booth</li>
                                <li>5 passes</li>
                                <li>Quarter-page profile</li>
                                <li>KES: 2,000,000</li>
                            </ul>
                        </div>

                        <div className="package-card bronze">
                            <div className="package-header">
                                <h4>BRONZE SUPPORTER</h4>
                            </div>
                            <ul className="package-features">
                                <li>Basic logo</li>
                                <li>1 banner</li>
                                <li>1 Panel discussion.</li>
                                <li>Standard booth</li>
                                <li>3 passes</li>
                                <li>Mention in credits</li>
                                <li>KES: 1,000,000</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Button */}
                <button className="open-modal-btn" onClick={() => setShowModal(true)}>
                    Contact Us
                </button>

                {/* Modal */}
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
                            <h3>Contact for Sponsors / Conveners</h3>
                            <form className="form-body" onSubmit={handleSubmit}>
                                <div className="form-input">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        className="form-field"
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required/>
                                </div>

                                <div className="form-input">
                                    <label className="form-label">Email</label>
                                    <input
                                        className="form-field"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required/>
                                </div>

                                <div className="form-input">
                                    <label className="form-label">Organization</label>
                                    <input
                                        className="form-field"
                                        type="text"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}/>
                                </div>

                                <div className="form-input">
                                    <label className="form-label">Role</label>
                                    <select
                                        className="form-field"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <option value="sponsor">Sponsor</option>
                                        {/*<option value="convener">Convener</option>*/}
                                    </select>
                                </div>

                                <div className="form-input">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        className="form-field"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required/>
                                </div>

                                <button type="submit" className="form-button">Send Email</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

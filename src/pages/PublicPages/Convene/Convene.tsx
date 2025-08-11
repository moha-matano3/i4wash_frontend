import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Convene.css';
import water from "../../../assets/images/kisumu.jpg";


export default function Convene() {
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
            <div className="banner" style={{ backgroundImage: `url(${water})` }}>
                <h1 className="about-title">I4WASH Conveners & Co-Designers Packages</h1>
            </div>
            <div className="packages-container">
                <div className="packages-list i4wash-packages">
                    <p>Join co-designer calls before the marketplace to define themes and agenda.</p>
                    <h3>Our Packages</h3>
                    <div className="packages-grid">
                        <div className="package-card conveners">
                            <div className="package-header">
                                <h4>Convenor</h4>
                            </div>
                            <ul className="package-features">
                                <li>Closed door meetings with co-designers.</li>
                                <li>Mapping of local stakeholders before the forum.</li>
                                <li>Post-forum report.</li>
                                <li>Marketplace access and refreshments.</li>
                                <li>High-level speaking opportunities.</li>
                                <li>Exhibition booth.</li>
                                <li>Marketing through booklet and wide communication.</li>
                                <li>Financial support in KES: 500,000.</li>
                            </ul>
                        </div>

                        <div className="package-card co-design">
                            <div className="package-header">
                                <h4>Co-design</h4>
                            </div>
                            <ul className="package-features">
                                <li>Closed door meetings with co-designers.</li>
                                <li>Mapping of local stakeholders before the forum.</li>
                                <li>Post-forum report.</li>
                                <li>Marketplace access and refreshments.</li>
                                <li>Exhibition booth.</li>
                                <li>Marketing through booklet and wide communication.</li>
                                <li>Financial support in KES: 300,000.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button className="open-modal-btn" onClick={() => setShowModal(true)}>
                    Contact Us
                </button>

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
                                        <option value="convener">Convener</option>
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

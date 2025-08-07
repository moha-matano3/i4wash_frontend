import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailForm.css';

export default function EmailForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organization: '',
        message: '',
        role: 'sponsor', // or 'convener'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Send data to backend endpoint
        try {
            const response = await fetch('http://www.i4wash.com:8000/api/method/i4wash_app.i4wash.api.sponsor_email.contact_sponsor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Email sent successfully!');
                navigate('/thank-you');
            } else {
                alert('Failed to send email.');
            }
        } catch (error) {
            console.error(error);
            alert('Error sending email.');
        }
    };

    return (
        <div className="form-container">
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
                        required
                    />
                </div>

                <div className="form-input">
                    <label className="form-label">Email</label>
                    <input
                        className="form-field"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-input">
                    <label className="form-label">Organization</label>
                    <input
                        className="form-field"
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                    />
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
                        required
                    />
                </div>

                <button type="submit" className="form-button">Send Email</button>
            </form>
        </div>
    );
}

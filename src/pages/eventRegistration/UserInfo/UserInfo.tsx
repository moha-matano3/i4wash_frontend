import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import './UserInfo.css';

export default function UserInfo() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [localData, setLocalData] = useState({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        designation: formData.designation,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLocalData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData(localData); // Push local changes to context
        navigate('/register/step2'); // Go to next step
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="form-container">
            <h3>Applicant Details</h3>

            <form onSubmit={handleSubmit} className="form-body">
                <div className="form-input">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                        className="form-field"
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={localData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        className="form-field"
                        type="email"
                        id="email"
                        name="email"
                        value={localData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        className="form-field"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={localData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="organization" className="form-label">Organization</label>
                    <input
                        className="form-field"
                        type="text"
                        id="organization"
                        name="organization"
                        value={localData.organization}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="designation" className="form-label">Designation</label>
                    <input
                        className="form-field"
                        type="text"
                        id="designation"
                        name="designation"
                        value={localData.designation}
                        onChange={handleChange}
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="form-buttons mt-4 space-x-2">
                    <button
                        type="button"
                        className="form-button secondary"
                        onClick={handleBack}
                    >
                        ← Back
                    </button>

                    <button type="submit" className="form-button">Next →</button>
                </div>
            </form>
        </div>
    );
}

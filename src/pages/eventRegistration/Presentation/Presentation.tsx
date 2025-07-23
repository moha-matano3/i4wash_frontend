import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import * as React from "react";
import './Presentation.css';

export default function Presentation() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [presentationReady, setPresentationReady] = useState(formData.presentationReady);
    const [presentationFileUrl, setPresentationFileUrl] = useState(formData.presentationFileUrl || '');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fakeUrl = `/uploads/${file.name}`;
            setPresentationFileUrl(fakeUrl);
        }
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({
            presentationReady,
            presentationFileUrl: presentationReady ? presentationFileUrl : '',
        });
        navigate('/register/step3');
    };
    const handleBack = () => {
        navigate('/register/step1');
    };

    return (
        <form onSubmit={handleNext} className="presentation-form">
            <h3>Presentation</h3>
            <div className="form">
                <label className="presentation-question">
                    <span>Do you have a presentation ready?</span>
                    <select
                        value={presentationReady ? 'yes' : 'no'}
                        onChange={(e) => setPresentationReady(e.target.value === 'yes')}
                        className="input-field"
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </label>
                {presentationReady && (
                    <div className="upload-container">
                        <span className="upload-label">Upload your presentation</span>
                        <div className="upload-box">
                            <input
                                type="file"
                                accept=".pdf,.ppt,.pptx"
                                onChange={handleFileChange}
                                className="file-input"
                            />
                        </div>
                    </div>
                )}
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
    );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import * as React from "react";
import './Presentation.css';

export default function Presentation() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [presentationReady, setPresentationReady] = useState<'Yes' | 'No'>(formData.presentationReady || 'No');
    const [presentationFile, setPresentationFile] = useState<{
        filename: string;
        base64: string;
    } | undefined>(formData.presentationFile);

    // Convert file to base64
    const convertFileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const base64 = await convertFileToBase64(file);
                setPresentationFile({
                    filename: file.name,
                    base64,
                });
            } catch (error) {
                console.error("File upload failed:", error);
            }
        }
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({
            presentationReady,
            presentationFile: presentationReady === 'Yes' ? presentationFile : undefined,
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
                        value={presentationReady}
                        onChange={(e) => setPresentationReady(e.target.value as 'Yes' | 'No')}
                        className="input-field"
                    >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </label>

                {presentationReady === 'Yes' && (
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
                        {presentationFile && (
                            <p className="mt-2 text-sm text-green-600">
                                Uploaded: {presentationFile.filename}
                            </p>
                        )}
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
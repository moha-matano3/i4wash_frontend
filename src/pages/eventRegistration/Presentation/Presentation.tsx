import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/RegistrationContext.tsx';

export default function Presentation() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [presentationReady, setPresentationReady] = useState(formData.presentationReady);
    const [presentationFileUrl, setPresentationFileUrl] = useState(formData.presentationFileUrl || '');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // For now we just fake a URL, adjust for real upload later
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

    return (
            <form onSubmit={handleNext} className="presentation-form">
                <h3>Step 2: Presentation Upload</h3>

                <label>
                    <span>Do you have a presentation ready?</span>
                    <select
                        value={presentationReady ? 'yes' : 'no'}
                        onChange={(e) => setPresentationReady(e.target.value === 'yes')}
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </label>

                {presentationReady && (
                    <label>
                        Upload your presentation:
                        <input type="file" accept=".pdf,.ppt,.pptx" onChange={handleFileChange} />
                    </label>
                )}

                <button type="submit">Next →</button>
            </form>
    );
}

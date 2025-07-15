import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/RegistrationContext';

export default function Summary() {
    const { formData } = useRegistration();
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/register/review');
    };

    return (
        <div className="form-container">
            <h3>Summary</h3>
            <div className="form-body">

                {/* Applicant Info */}
                <section className="summary-section">
                    <h4>Applicant Information</h4>
                    <p><strong>Full Name:</strong> {formData.fullName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Organization:</strong> {formData.organization}</p>
                    <p><strong>Designation:</strong> {formData.designation}</p>
                </section>

                {/* Presentation */}
                <section className="summary-section">
                    <h4>Presentation</h4>
                    <p><strong>Ready:</strong> {formData.presentationReady ? 'Yes' : 'No'}</p>
                    {formData.presentationReady && (
                        <p>
                            <strong>File:</strong> {formData.presentationFileUrl
                            ? <a href={formData.presentationFileUrl} target="_blank">View</a>
                            : 'Not uploaded'}
                        </p>
                    )}
                </section>

                {/* Booth Info */}
                <section className="summary-section">
                    <h4>Exhibition Booth</h4>
                    <p><strong>Needed:</strong> {formData.exhibitionBoothNeeded ? 'Yes' : 'No'}</p>
                    {formData.exhibitionBoothNeeded && (
                        <p><strong>Count:</strong> {formData.exhibitionBoothCount}</p>
                    )}
                </section>

                {/* Attendees */}
                <section className="summary-section">
                    <h4>Attendees</h4>
                    {formData.attendees.length > 0 ? (
                        formData.attendees.map((a, i) => (
                            <div key={i}>
                                <p><strong>{a.fullName}</strong> — {a.email}, {a.phone}</p>
                            </div>
                        ))
                    ) : (
                        <p>No attendees added</p>
                    )}
                </section>

                <button className="form-button" onClick={handleContinue}>
                    Confirm & Continue →
                </button>
            </div>
        </div>
    );
}

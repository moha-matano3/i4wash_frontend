import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import flowSVG from "../../../assets/icons/FormFlow/flow4.svg";
import FormNavBtns from "../../../components/FormNavBtns/FormNavBtns.tsx";
import backBtn from "../../../assets/icons/backBtn.svg";
import nextBtn from "../../../assets/icons/nextBtn.svg";

export default function Summary() {
    const { formData } = useRegistration();
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/register/review');
    };

    const handleBack = () => {
        navigate('/register/step4');
    };

    return (
        <div className="form-container">
            <h3 className="title">Summary</h3>
            <div className="flow">
                <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="form-body">
                <div className="form">
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
                </div>

                <div className="form-buttons">
                    <FormNavBtns
                        svgSrc={backBtn}
                        alt="Go back"
                        onClick={handleBack}
                    />
                    <FormNavBtns
                        svgSrc={nextBtn}
                        alt="Continue"
                        type="submit"
                        onClick={handleContinue}
                    />
                </div>
            </div>
        </div>
    );
}

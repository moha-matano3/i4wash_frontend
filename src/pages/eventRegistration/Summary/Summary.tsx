import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import flowSVG from "../../../assets/icons/FormFlow/flow4.svg";
import FormNavBtns from "../../../components/FormNavBtns/FormNavBtns.tsx";
import backBtn from "../../../assets/icons/backBtn.svg";
import submitBtn from "../../../assets/icons/submitBtn.svg";
import "./Summary.css"
import { useEffect, useState } from "react";
import { api } from '../../../lib/api.ts';

export default function Summary() {
    const { formData } = useRegistration();
    const navigate = useNavigate();

    // Consent modal state
    const [showConsentModal, setShowConsentModal] = useState(true);
    const [consentChecked, setConsentChecked] = useState(false);

    // Summary submit state
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    // Consent checkbox change handler
    const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConsentChecked(e.target.checked);
    };

    // Close consent modal only if consent checked
    const closeConsentModal = () => {
        if (consentChecked) {
            setShowConsentModal(false);
        }
    };

    // Submit registration
    const handleContinue = async () => {
        setLoading(true);
        setMessage('');
        setModalVisible(true);

        try {
            const res = await api.post(
                '/method/i4wash_app.i4wash.api.registration.create_event_registration',
                formData
            );

            const data = res.data; // Axios already parses JSON

            if (data.message?.status === 'success') {
                setMessage(`✅ Registration Successful! Your ID is: ${data.message.registration_id}`);
            } else {
                setMessage('❌ Something went wrong.');
            }
        } catch (err) {
            if (err instanceof Error) {
                setMessage(`❌ Submission failed: ${err.message}`);
            } else {
                setMessage('❌ Submission failed due to an unknown error.');
            }
        } finally {
            setLoading(false);
        }
    };

    // Auto close modal 3s after success message and navigate
    useEffect(() => {
        if (message.startsWith('✅')) {
            const timer = setTimeout(() => {
                setModalVisible(false);
                setMessage('');
                navigate('/');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message, navigate]);

    // Manually close modal (used for error messages)
    const handleCloseModal = () => {
        setModalVisible(false);
        setMessage('');
    };

    const handleBack = () => {
        navigate('/register/step4');
    };

    return (
        <div className="form-container">
            {showConsentModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <header className="modal-header">
                            <h2>Photography and Media Release Notice</h2>
                        </header>

                        <div className="modal-body scrollable">
                            <p>
                                By registering to attend the <strong>Innovate for WASH Forum Marketplace</strong>, scheduled for <strong>5th–8th November 2025</strong> in <strong>Malindi, Kilifi County, Kenya</strong>, you acknowledge and agree that the event may be photographed, recorded, or filmed by representatives of the <strong>Quercus Group</strong> for documentation, publicity, and promotional purposes.
                            </p>

                            <h3>Consent to Use of Image and Likeness</h3>
                            <p>
                                By participating in the event, you grant the Quercus Group the non-exclusive, royalty-free, worldwide, and perpetual right to use your image, likeness, voice, or any recorded content featuring you in any media format. This includes, but is not limited to, brochures, posters, press releases, websites, reports, publications, and official social media platforms.
                                All usage will be for legitimate business and educational purposes, such as promoting the Forum, sharing knowledge, and reporting on the outcomes of the event. No compensation, fee, or remuneration will be payable for the use of such media.
                            </p>

                            <h3>Data Protection and Privacy</h3>
                            <p>
                                In accordance with applicable data protection laws, including the <strong>General Data Protection Regulation (GDPR)</strong> where applicable, the collection and use of personal data (including images and videos) will be handled responsibly and securely. Media containing your image may be stored and processed by Quercus Group or its trusted partners solely for the purposes outlined above.
                                Should you wish to access, rectify, or request the deletion of any personal data collected during the event, including photographs or video footage, you may do so by emailing the event organizers.
                            </p>

                            <h3>Opt-Out Procedure</h3>
                            <p>
                                If you do <strong>not</strong> wish to be photographed or recorded, or prefer that your image <strong>not be used</strong> for any promotional or public-facing materials, you must notify the event organizers <strong>in writing before the start of the event</strong> by emailing <a href="mailto:khaidar@quercus-group.com">khaidar@quercus-group.com</a>. Additionally, please inform a staff member at the registration desk upon arrival so that we can make reasonable efforts to accommodate your request.
                                Please note that while we will do our best to respect opt-out requests, we cannot guarantee exclusion from group photos or wide-angle event footage where individuals are not the central focus.
                            </p>

                            <h3>Minors (Under 18 Years of Age)</h3>
                            <p>
                                If you are under the age of 18, you may not attend the event without the supervision of a parent or legal guardian, who must provide written consent for photography and media usage. Please contact the event organizers in advance if you intend to attend with minors, so that appropriate consent forms can be arranged.
                            </p>

                            <h3>Acknowledgment</h3>
                            <p>
                                By attending the event without submitting an opt-out request, you confirm that you:<br />
                                • Are <strong>over the age of 18</strong> and competent to provide this consent.<br />
                                • Have <strong>read, understood, and agreed</strong> to the terms of this media release.<br />
                                • Understand the scope and purpose of the use of your image and personal data.
                            </p>
                        </div>

                        <footer className="modal-footer">
                            <label className="agree-checkbox">
                                <input
                                    type="checkbox"
                                    checked={consentChecked}
                                    onChange={handleConsentChange}
                                />
                                <span>I have read and agree to the Photography and Media Release Notice.</span>
                            </label>
                            <button
                                onClick={closeConsentModal}
                                disabled={!consentChecked}
                                className={`agree-btn ${consentChecked ? '' : 'disabled'}`}
                            >
                                Continue
                            </button>
                        </footer>
                    </div>
                </div>
            )}

            {!showConsentModal && (
                <>
                    <h3 className="title">Summary</h3>
                    <div className="flow">
                        <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="summary-wrapper">
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
                            {formData.presentationReady ? (
                                <>
                                    <p><strong>Ready:</strong> Yes</p>
                                    <p><strong>File:</strong> {formData.presentationFile?.filename || '⚠️ Marked Yes, but no file uploaded'}</p>
                                </>
                            ) : (
                                <p><strong>Ready:</strong> No</p>
                            )}
                        </section>

                        {/* Booth Info */}
                        <section className="summary-section">
                            <h4>Exhibition Booth</h4>
                            {formData.exhibitionBoothNeeded ? (
                                <>
                                    <p><strong>Needed:</strong> Yes</p>
                                    <p><strong>Count:</strong> {formData.exhibitionBoothCount || 'Not specified'}</p>
                                </>
                            ) : (
                                <p><strong>Needed:</strong> No</p>
                            )}
                        </section>

                        {/* Attendees */}
                        <section className="summary-section">
                            <h4>Attendees</h4>
                            {formData.attendees.length > 0 ? (
                                formData.attendees.map((a, i) => (
                                    <div key={i}>
                                        <p><strong>{a.fullName}</strong> — {a.email}, {a.attendeePhone}, {a.attendeeOrganization}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No attendees added</p>
                            )}
                        </section>
                    </div>

                    {/* Feedback modal for Loading and Messages */}
                    {modalVisible && (
                        <div className="feedback-modal-overlay">
                            <div className="feedback-modal-content">
                                {loading ? (
                                    <div className="loading-animation">
                                        <div className="spinner"></div>
                                        <p>Submitting...</p>
                                    </div>
                                ) : (
                                    <>
                                        <p className={`message-text ${message.startsWith('✅') ? 'success' : 'error'}`}>
                                            {message}
                                        </p>
                                        {!message.startsWith('✅') && (
                                            <button className="close-modal-btn" onClick={handleCloseModal}>
                                                Close
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="form-buttons">
                        <FormNavBtns
                            svgSrc={backBtn}
                            alt="Go back"
                            onClick={handleBack}
                        />
                        <FormNavBtns
                            svgSrc={submitBtn}
                            alt="Continue"
                            type="submit"
                            onClick={handleContinue}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

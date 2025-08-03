import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import flowSVG from "../../../assets/icons/FormFlow/flow4.svg";
import MpesaModal from "../Payment/PaymentModals/MpesaModal.tsx";
import StripeWrapper from "../Payment/PaymentModals/Checkout/StripeWrapper.tsx";
import StripeModal from "../Payment/PaymentModals/StripeModal.tsx";
import * as React from "react";
import {useState} from "react";

export default function Summary() {
    const { formData } = useRegistration();
    const navigate = useNavigate();
    const { setFormData } = useRegistration();

    const handleContinue = () => {
        navigate('/register/review');
    };

    const applicantFee = 1000;
    const attendeeFee = 500;

    const attendees = formData.attendees || []; // ensure it's an array
    const totalPrice = applicantFee + attendees.length * attendeeFee;

    const [payment, setPayment] = useState({
        method: 'Mpesa',
        phone: '',
        amount: totalPrice,
        reference: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'Mpesa' | 'Card' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPayment((prev) => ({ ...prev, [name]: value }));
    };

    const handleOpenModal = () => {
        setModalType(payment.method as 'Mpesa' | 'Card');
        setShowModal(true);
    };

    const handlePaymentSuccess = (referenceCode?: string) => {
        setFormData({
            payment: {
                ...payment,
                reference: referenceCode || payment.reference,
                status: 'Paid',
            },
        });
        setShowModal(false);
        navigate('/register/confirmation');
    };


    return (
        <div className="form-container">
            <h3 className="title">Payment Details</h3>
            <div className="flow">
                <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="form-body">
                <div className="form">
             <div className="form-section-left">
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
                <div className="form-section-right">
                    <div className="form-container">
                        <div className="form-body">
                            <div className="form-input">
                                <label className="form-label">Payment Method</label>
                                <select
                                    name="method"
                                    className="form-field"
                                    value={payment.method}
                                    onChange={handleChange}
                                >
                                    <option value="Mpesa">Mpesa</option>
                                    <option value="Card">Card</option>
                                </select>
                            </div>

                            <div className="form-input">
                                <label className="form-label">Amount (KES)</label>

                            </div>

                            <button type="button" className="form-button" onClick={handleOpenModal}>
                                Make Payment →
                            </button>
                        </div>

                        {/* Modal Rendering */}
                        {showModal && modalType === 'Mpesa' && (
                            <MpesaModal
                                phone={payment.phone}
                                amount={payment.amount}
                                onSuccess={handlePaymentSuccess}
                                onClose={() => setShowModal(false)}
                            />
                        )}

                        {showModal && modalType === 'Card' && (
                            <StripeWrapper>
                                <StripeModal
                                    amount={payment.amount}
                                    onSuccess={handlePaymentSuccess}
                                    onClose={() => setShowModal(false)}
                                />
                            </StripeWrapper>
                        )}
                    </div>
                </div>
                </div>
                <button className="form-button" onClick={handleContinue}>
                    Confirm & Continue →
                </button>
            </div>
        </div>
    );
}

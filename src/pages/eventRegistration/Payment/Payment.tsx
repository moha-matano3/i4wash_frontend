import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Payment.css";
import { useRegistration } from '../../../store/useRegistration';
import MpesaModal from './PaymentModals/MpesaModal.tsx';
import StripeModal from './PaymentModals/StripeModal.tsx';
import StripeWrapper from './PaymentModals/Checkout/StripeWrapper.tsx';
import flowSVG from "../../../assets/icons/FormFlow/flow5.svg";
import FormNavBtns from "../../../components/FormNavBtns/FormNavBtns.tsx";
import backBtn from "../../../assets/icons/backBtn.svg";
import nextBtn from "../../../assets/icons/nextBtn.svg";
import pay from "../../../assets/icons/pay.svg";
import radioBtnSVGChecked from "../../../assets/icons/radioBtns/radioBtnChecked.svg";
import radioBtnSVG from "../../../assets/icons/radioBtns/radioBtn.svg";

export default function Payment() {
    const navigate = useNavigate();
    const { setFormData, formData } = useRegistration();

    const applicantFee = 35000;
    const boothFee = 50000;
    const attendeeFee = 35000;

    const price = () => {
        const numberOfBooths = formData.exhibitionBoothCount || 0;
        const numberOfAttendees = formData.attendees?.length || 0;
        return applicantFee + (numberOfBooths * boothFee) + (numberOfAttendees * attendeeFee);
    };

    const [payment, setPayment] = useState({
        method: 'Mpesa',
        phone: '',
        amount: price(),
        reference: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'Mpesa' | 'Card' | null>(null);

    const handleMethodChange = (method: 'Mpesa' | 'Card') => {
        setPayment((prev) => ({ ...prev, method }));
    };

    const handleOpenModal = () => {
        setModalType(payment.method as 'Mpesa' | 'Card');
        setShowModal(true);
    };

    const handleBack = () => {
        navigate('/register/step5');
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
                {showModal && modalType === 'Mpesa' && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <MpesaModal
                                phone={payment.phone}
                                amount={payment.amount}
                                onSuccess={handlePaymentSuccess}
                                onClose={() => setShowModal(false)}
                            />
                        </div>
                    </div>
                )}

                {showModal && modalType === 'Card' && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <StripeWrapper>
                                <StripeModal
                                    amount={payment.amount}
                                    onSuccess={handlePaymentSuccess}
                                    onClose={() => setShowModal(false)}
                                />
                            </StripeWrapper>
                        </div>
                    </div>
                )}
                <div className="payment-form">
                        <div className="payment-box">
                            <div className="payment" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                <label className="payment-label">Total</label>
                                {payment.amount.toLocaleString()} KES
                            </div>
                            <div className="payment" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                <label className="payment-label">Payment Method</label>
                                <div className="radio-group">
                                    <label className="custom-radio">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="Mpesa"
                                            checked={payment.method === 'Mpesa'}
                                            onChange={() => handleMethodChange('Mpesa')}
                                        />
                                        <img
                                            className="icon"
                                            src={payment.method === 'Mpesa' ? radioBtnSVGChecked : radioBtnSVG}
                                            alt="Mpesa radio"
                                        />
                                        Mpesa
                                    </label>

                                    <label className="custom-radio">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="Card"
                                            checked={payment.method === 'Card'}
                                            onChange={() => handleMethodChange('Card')}
                                        />
                                        <img
                                            className="icon"
                                            src={payment.method === 'Card' ? radioBtnSVGChecked : radioBtnSVG}
                                            alt="Card radio"
                                        />
                                        Card
                                    </label>
                                </div>
                            </div>
                            {payment.method === 'Mpesa' && (
                                <div className="payment-card" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                    Pay via Mpesa: {payment.amount.toLocaleString()} KES
                                </div>
                            )}

                            {payment.method === 'Card' && (
                                <div className="payment-card" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                    Pay via Card: {payment.amount.toLocaleString()} KES (Visa or Mastercard)
                                </div>
                            )}

                            <button type="button" className="pay-btn" onClick={handleOpenModal}>
                                <img src={pay} alt="Pay" style={{ width: '100%', height: 'auto' }} />
                            </button>
                        </div>
                </div>

                <div className="form-buttons">
                    <FormNavBtns svgSrc={backBtn} alt="Go back" onClick={handleBack} />
                    <FormNavBtns svgSrc={nextBtn} alt="Continue" type="submit" />
                </div>
            </div>
        </div>
    );
}

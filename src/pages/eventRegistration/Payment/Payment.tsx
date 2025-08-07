import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import * as React from "react";
import MpesaModal from './PaymentModals/MpesaModal.tsx';
import StripeModal from './PaymentModals/StripeModal.tsx';
import StripeWrapper from './PaymentModals/Checkout/StripeWrapper.tsx';

export default function Payment() {
    const navigate = useNavigate();
    const { setFormData } = useRegistration();

    const [payment, setPayment] = useState({
        method: 'Mpesa',
        phone: '',
        amount: 7000,
        reference: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'Mpesa' | 'Card' | null>(null);
    const [phoneError, setPhoneError] = useState('');

    const validatePhone = (phone: string) => {
        if (payment.method === 'Mpesa') {
            if (!/^2547\d{8}$/.test(phone)) {
                return 'Phone number must start with 2547 and be 12 digits long';
            }
        }
        return '';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPayment((prev) => ({ ...prev, [name]: value }));

        if (name === 'phone' && payment.method === 'Mpesa') {
            const error = validatePhone(value);
            setPhoneError(error);
        }
    };

    const handleOpenModal = () => {
        if (payment.method === 'Mpesa') {
            const error = validatePhone(payment.phone);
            setPhoneError(error);
            if (error) return;
        }

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
            <h3>Payment Details</h3>

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
                    <input
                        type="number"
                        name="amount"
                        className="form-field"
                        value={payment.amount}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Show Phone Number only for Mpesa */}
                {payment.method === 'Mpesa' && (
                    <div className="form-input">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-field"
                            value={payment.phone}
                            onChange={handleChange}
                            placeholder="e.g. 254712345678"
                            required
                        />
                        {phoneError && <p style={{ color: 'red', fontSize: '0.9rem' }}>{phoneError}</p>}
                    </div>
                )}

                <button
                    type="button"
                    className="form-button"
                    onClick={handleOpenModal}
                    disabled={payment.method === 'Mpesa' && !!phoneError}
                >
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
    );
}
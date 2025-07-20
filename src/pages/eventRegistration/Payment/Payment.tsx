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
    );
}

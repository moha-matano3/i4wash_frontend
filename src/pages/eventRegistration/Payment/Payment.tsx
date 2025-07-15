import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import * as React from "react";

export default function Payment() {
    const navigate = useNavigate();
    const {setFormData } = useRegistration();

    const [payment, setPayment] = useState({
        method: 'Mpesa',
        phone: '',
        amount: 7000, // Optional: will be dynamic
        mpesaReference: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPayment((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setFormData({
            payment: {
                ...payment,
                status: 'Paid', // Assume success for now
            },
        });

        navigate('/register/confirmation'); //show a success screen next :in dev
    };

    return (
        <div className="form-container">
            <h3>Payment Details</h3>

            <form onSubmit={handleSubmit} className="form-body">
                <div className="form-input">
                    <label className="form-label">Payment Method</label>
                    <select
                        name="method"
                        className="form-field"
                        value={payment.method}
                        onChange={handleChange}
                    >
                        <option value="Mpesa">Mpesa</option>
                        <option value="Card" disabled>Card (Coming Soon)</option>
                    </select>
                </div>

                <div className="form-input">
                    <label className="form-label">Mpesa Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        className="form-field"
                        value={payment.phone}
                        onChange={handleChange}
                        required
                    />
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

                <div className="form-input">
                    <label className="form-label">Mpesa Reference Code</label>
                    <input
                        type="text"
                        name="mpesaReference"
                        className="form-field"
                        value={payment.mpesaReference}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="form-button">Finish →</button>
            </form>
        </div>
    );
}

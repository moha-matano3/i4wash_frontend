import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface StripeModalProps {
    amount: number;
    onSuccess: (paymentIntentId: string) => void;
    onClose: () => void;
}

export default function StripeModal({ amount, onSuccess, onClose }: StripeModalProps) {
    const stripe = useStripe();
    const elements = useElements();

    const [currency, setCurrency] = useState<'KES' | 'EUR'>('KES');

    const handleConfirm = async () => {
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
            alert("Card element not found.");
            return;
        }

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                console.error(error);
                alert("Payment failed: " + error.message);
                return;
            }

            // Send to backend
            const response = await fetch('/api/stripe/charge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    payment_method_id: paymentMethod.id,
                    amount,
                    currency,
                }),
            });

            const data = await response.json();

            if (data.success) {
                onSuccess(data.payment_intent_id);
            } else {
                alert("Payment failed: " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("Unexpected error during payment.");
        }
    };

    return (
        <div className="modal">
            <h4>Stripe Card Payment</h4>

            <div>
                <label>Select Currency:</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value as 'KES' | 'EUR')}>
                    <option value="KES">KES - Kenyan Shillings</option>
                    <option value="EUR">EUR - Euro</option>
                </select>
            </div>

            <p>Pay {currency} {amount}</p>

            <div className="card-element-wrapper">
                <CardElement />
            </div>

            <button onClick={handleConfirm}>Confirm Payment</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
}
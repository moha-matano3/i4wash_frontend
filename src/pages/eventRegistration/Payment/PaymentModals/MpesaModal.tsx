import { useEffect, useState } from 'react';

interface MpesaModalProps {
    phone: string;
    amount: number;
    onSuccess: (referenceCode?: string) => void;
    onClose: () => void;
}

export default function MpesaModal({ phone, amount, onSuccess, onClose }: MpesaModalProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [stkRequested, setStkRequested] = useState(false);

    useEffect(() => {
        const initiateMpesaPayment = async () => {
            setLoading(true);
            setError('');

            try {
                const res = await fetch('http://www.i4wash.com:8000/api/method/i4wash_app.i4wash.api.payment_api.initiate_stk_push', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        phone,
                        amount,
                        account_reference: 'i4wash2025',
                        transaction_desc: 'i4WASH Event Payment',
                    }),
                });

                const result = await res.json();

                const message = result?.message;

                if (!message || message.ResponseCode !== '0') {
                    throw new Error(message?.ResponseDescription || 'Failed to initiate payment');
                }

                setStkRequested(true);

                // Pass the CheckoutRequestID as a reference to parent if needed
                onSuccess(message.CheckoutRequestID);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred during STK Push.');
                }
            } finally {
                setLoading(false);
            }
        };

        initiateMpesaPayment();
    }, [phone, amount]);

    return (
        <div className="modal">
            <h4>Mpesa Payment</h4>
            <p>Pay KES {amount} via Mpesa. You'll receive a prompt on {phone}</p>

            {loading && <p>Sending STK Push...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {stkRequested && <p>STK Push sent! Please complete payment on your phone.</p>}

            <button onClick={onClose} disabled={loading}>
                Close
            </button>
        </div>
    );
}
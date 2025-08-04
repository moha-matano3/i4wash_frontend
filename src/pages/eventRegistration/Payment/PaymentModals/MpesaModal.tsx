import { useEffect, useState } from 'react';

interface StripeModalProps {
    phone: string;
    amount: number;
    onSuccess: (paymentIntentId: string) => void;
    onClose: () => void;
}

export default function MpesaModal({ phone, amount, onSuccess, onClose }: StripeModalProps) {
    const [referenceCode, setReferenceCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const initiateMpesaPayment = async () => {
            try {
                setLoading(true);
                const res = await fetch('/api/mpesa/stk-push', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phone, amount }),
                });

                const data = await res.json();
                if (!res.ok || !data.success) {
                    throw new Error(data.message || 'STK Push failed');
                }
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

    const handleConfirm = async () => {
        try {
            setLoading(true);
            setError('');

            const res = await fetch('/api/mpesa/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ referenceCode }),
            });

            const result = await res.json();
            if (res.ok && result.success) {
                onSuccess(referenceCode);
            } else {
                setError(result.message || 'Payment verification failed');
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred during verification.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal">
            <h4>Mpesa Payment</h4>
            <p>Pay KES {amount}.00 via Mpesa to Paybill XXXX</p>

            {loading && <p>Processing...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <input
                type="text"
                placeholder="Enter Mpesa Reference Code"
                value={referenceCode}
                onChange={(e) => setReferenceCode(e.target.value)}
                disabled={loading}
            />

            <button onClick={handleConfirm} disabled={loading || !referenceCode}>
                Confirm Payment
            </button>
            <button onClick={onClose} disabled={loading}>
                Cancel
            </button>
        </div>
    );
}

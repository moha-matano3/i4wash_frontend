import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


interface StripeModalProps {
    amount: number;
    onSuccess: (paymentIntentId: string) => void;
    onClose: () => void;
}

export default function StripeModal({ amount, onSuccess, onClose }: StripeModalProps) {
    const stripe = useStripe();
    const elements = useElements();

    const handleConfirm = async () => {
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
            alert("Card element not found.");
            return;
        }

        try {
            // Step 1: Create a PaymentMethod
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                console.error(error);
                alert("Payment failed: " + error.message);
                return;
            }

            // Step 2: Send paymentMethod.id & amount to backend to create PaymentIntent
            const response = await fetch('/api/method/your_app.api.stripe.create_payment_intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    payment_method_id: paymentMethod.id,
                    amount,
                }),
            });

            const data = await response.json();

            if (data.success) {
                onSuccess(data.payment_intent_id); // Just like refCode in Mpesa
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
            <p>Pay KES {amount} using your card</p>

            <div className="card-element-wrapper">
                <CardElement />
            </div>

            <button onClick={handleConfirm}>Confirm Payment</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
}

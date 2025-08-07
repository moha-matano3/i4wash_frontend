import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import type { ReactNode } from 'react';

const stripePromise = loadStripe('pk_test_51RmAPHImS5d4DYz74fYCRSKpPF3c8Rno1OAyBSXdMa4VzX0nFeZJF2P5Ol44GdDfOONVAJqkUJht4wwzwLqWO5qY00ppwK9Fqu'); // Replace with your public key

interface StripeWrapperProps {
    children: ReactNode;
}

export default function StripeWrapper({ children }: StripeWrapperProps) {
    return (
        <Elements stripe={stripePromise}>
            {children}
        </Elements>
    );
}

import { useEffect, useState } from 'react';
import './CountdownTimer.css';

const eventDate = new Date('2025-10-16T00:00:00');

function calculateTimeLeft() {
    const difference = +eventDate - +new Date();
    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
}

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown-container">
            <div className="countdown-item">
                <span className="countdown-value">{timeLeft.days}  :</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-value">{timeLeft.hours}  :</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-value">{timeLeft.minutes}  :</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-value">{timeLeft.seconds}</span>
            </div>
        </div>
    );
}

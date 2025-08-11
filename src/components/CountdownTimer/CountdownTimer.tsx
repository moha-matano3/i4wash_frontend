import { useEffect, useState, useRef } from 'react';
import './CountdownTimer.css';

const eventDate = new Date('2025-11-05T00:00:00');

interface TimeLeft {
    months: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference <= 0) {
        return {
            months: '00',
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        };
    }

    const totalSeconds = Math.floor(difference / 1000);

    const months = Math.floor(totalSeconds / (30 * 24 * 3600));
    const days = Math.floor((totalSeconds % (30 * 24 * 3600)) / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
        months: String(months).padStart(2, '0'),
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
    };
}

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const prevTimeRef = useRef<TimeLeft>(timeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            prevTimeRef.current = timeLeft;
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const hasChanged = (unit: keyof TimeLeft) => prevTimeRef.current[unit] !== timeLeft[unit];

    return (
        <div className="countdown-container">
            {(['months', 'days', 'hours', 'minutes', 'seconds'] as (keyof TimeLeft)[]).map((unit, idx) => (
                <div key={unit} className="flip-unit" id={unit}>
                    <div className={`flip-card${hasChanged(unit) ? ' flip' : ''}`}>
                        <span className="value">{timeLeft[unit]}</span>
                    </div>
                    <div className="label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                    {idx < 4}
                </div>
            ))}
        </div>
    );
}

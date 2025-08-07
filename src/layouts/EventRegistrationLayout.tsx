import { Outlet } from 'react-router-dom';
import oceanImage from '../assets/ocean.jpg';
import { RegistrationProvider } from '../store/RegistrationContext';

export default function EventRegistrationLayout() {
    return (
        <RegistrationProvider>
        <div
            style={{
                position: 'fixed',
                inset: 0,
                backgroundImage: `url(${oceanImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
            }}
        >
            <div
                style={{
                    height: '80%',
                    width: '80%',
                    background: 'rgba(27, 68, 82, 0.6)',
                    borderRadius: '1rem',
                    padding: '2rem',
                }}
            >
                <Outlet />
            </div>
        </div>
        </RegistrationProvider>
    );
}
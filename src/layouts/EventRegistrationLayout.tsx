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
                    padding: '5vw', // responsive padding
                }}
            >
                <div
                    style={{
                        width: '100%',
                        maxWidth: '1200px', // keeps content centered on big screens
                        height: '100%',
                        maxHeight: '90vh', // fits without scrolling
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '1rem',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'auto', // allows content inside to scroll if needed
                    }}
                >
                <Outlet />
            </div>
        </div>
        </RegistrationProvider>
    );
}
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar.tsx';
import oceanImage from "../assets/ocean.jpg";

export default function PublicLandingLayout() {
    return (
        <div style={{
            height: '100dvh',
            width: '100vw',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundImage: `url(${oceanImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,
            }} />

            {/* Color overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(27, 68, 82, 0.3)',
                zIndex: 1,
            }} />

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Navbar />
                <main style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: `clamp(1rem, 2vw, 2rem) 1rem`,
                    color: '#fff',
                }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

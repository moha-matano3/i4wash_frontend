import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar.tsx';
import oceanImage from "../assets/ocean.jpg";

export default function PublicLayout() {
    return (
        <div style={{
            height: '100vh',
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
                backgroundColor: '#fff',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,
            }} />

             {/*Updated color overlay (rgba(41, 142, 166, 0.7)) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 1,
            }} />

            {/* Content including Navbar and children */}
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
                    padding: '2rem',
                    color: '#fff',
                }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

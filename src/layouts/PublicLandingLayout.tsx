import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar.tsx';
import Footer from '../components/Footer/Footer.tsx';
import oceanImage from "../assets/ocean.jpg";

export default function PublicLandingLayout() {
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
                backgroundColor: 'rgba(27, 68, 82, 0.3)', // #1B4452 at 30%
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
                    paddingTop: '120px', // adjust to navbar height
                    color: '#fff',
                }}>
                    <Outlet />
                </main>
                <Footer/>
            </div>
        </div>
    );
}

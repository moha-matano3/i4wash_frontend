import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar.tsx';

export default function PublicLayout() {
    return (
        <>
            <Navbar />
            <main style={{ padding: '2rem' }}>
                <Outlet />
            </main>
        </>
    );
}

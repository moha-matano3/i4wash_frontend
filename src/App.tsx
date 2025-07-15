import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventRegistrationLayout from './layouts/EventRegistrationLayout.tsx';

import UserInfo from './pages/eventRegistration/UserInfo/UserInfo.tsx';
import Presentation from './pages/eventRegistration/Presentation/Presentation.tsx';
import Booth from './pages/eventRegistration/Booth/Booth.tsx';
import Attendees from './pages/eventRegistration/Attendees/Attendees.tsx';
import Summary from './pages/eventRegistration/Summary/Summary.tsx';
import Payment from './pages/eventRegistration/Payment/Payment.tsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<EventRegistrationLayout />}>
                    <Route path="step1" element={<UserInfo />} />
                    <Route path="step2" element={<Presentation />} />
                    <Route path="step3" element={<Booth />} />
                    <Route path="step4" element={<Attendees />} />
                    <Route path="step5" element={<Summary />} />
                    <Route path="review" element={<Payment />} />
                </Route>

                <Route path="*" element={<div>404 - Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

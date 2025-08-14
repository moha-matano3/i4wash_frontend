import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EventRegistrationLayout from './layouts/EventRegistrationLayout.tsx';
import UserInfo from './pages/eventRegistration/UserInfo/UserInfo.tsx';
import Presentation from './pages/eventRegistration/Presentation/Presentation.tsx';
import Booth from './pages/eventRegistration/Booth/Booth.tsx';
import Attendees from './pages/eventRegistration/Attendees/Attendees.tsx';
import Summary from './pages/eventRegistration/Summary/Summary.tsx';
import Payment from './pages/eventRegistration/Payment/Payment.tsx';
import Home from './pages/PublicPages/Home/Home.tsx';
import ConceptNote from './pages/PublicPages/ConceptNote/ConceptNote.tsx';
import PublicLandingLayout from "./layouts/PublicLandingLayout.tsx";
import Convene from "./pages/PublicPages/Convene/Convene.tsx";
import PublicLayout from "./layouts/PublicLayout.tsx";
import ForumPage from './pages/PublicPages/Forums/ForumPage.tsx';
import AboutI4WASH from "./pages/PublicPages/AboutI4WASH/AboutI4WASH.tsx";
import Programme from "./pages/PublicPages/Programme/Programme.tsx";
import Partner from "./pages/PublicPages/Partner/Partner.tsx";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Pages */}
                <Route path="/" element={<PublicLandingLayout />}>
                    <Route index element={<Home />} />
                </Route>

                <Route path="/" element={<PublicLayout />}>
                    <Route path="Programme" element={<Programme />} />
                    <Route path="Explore" element={<ConceptNote />} />
                    <Route path="forum/:year" element={<ForumPage />} />
                    <Route path="AboutUs" element={<AboutI4WASH />} />
                    <Route path="Convenership" element={<Convene/>}/>
                    <Route path="Partnership" element={<Partner/>}/>
                </Route>

                {/* Registration flow pages */}
                <Route path="/register" element={<EventRegistrationLayout />}>
                    <Route path="step1" element={<UserInfo />} />
                    <Route path="step2" element={<Attendees />} />
                    <Route path="step3" element={<Presentation />} />
                    <Route path="step4" element={<Booth />} />
                    <Route path="step5" element={<Summary />} />
                    <Route path="review" element={<Payment />} />
                </Route>

                <Route path="*" element={<div>404 - Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

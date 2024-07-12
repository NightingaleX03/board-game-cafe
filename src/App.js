import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/Navbar.css'; // Ensure this path is correct

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Homepage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import EventsCalendarPage from './pages/eventsCalendarPage';
import GamesCollectionPage from './pages/gamesCollectionPage';
import MenuPage from './pages/menuPage';
import ReservationPage from './pages/reservationsPage';

const App = () => {
    return (
        <Router>
            <Navbar /> 
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Events" element={<EventsCalendarPage />} />
                <Route path="/GameCollection" element={<GamesCollectionPage />} />
                <Route path="/Menu" element={<MenuPage />} />
                <Route path="/Reservation" element={<ReservationPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

import React from 'react';
import Navbar from './components/Navbar'; // Navbar component
import { BrowserRouter as Router, useRoutes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './components/Navbar.css'; 
import Footer from './components/Footer';


// Pages
import Homepage from './pages/homePage'; // Home page
import AboutPage from './pages/aboutPage';
import EventsCalendarPage from './pages/eventsCalendarPage';
import GamesCollectionPage from './pages/gamesCollectionPage';
import MenuPage from './pages/menuPage';
import ReservationPage from './pages/reservationsPage';

const AppRoutes = () => {
    return useRoutes([
        { path: "/", element: <Homepage /> },
        { path: "/Events", element: <EventsCalendarPage /> },
        { path: "/GameCollection", element: <GamesCollectionPage /> },
        { path: "/Menu", element: <MenuPage /> },
        { path: "/Reservation", element: <ReservationPage /> },
        { path: "/about", element: <AboutPage /> },
    ]);
};

const App = () => {
    return (
        <Router>
            <Navbar />
            <AppRoutes />
            <Footer />
        </Router>
    );
};

export default App;
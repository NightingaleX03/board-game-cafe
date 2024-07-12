// pages/home.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/reservationPage.css'; // Import CSS for styling

const ReservationPage = () => {
    return (
        <div className="centered-content">
            <h1>Reservations</h1>
            <div className="spacer"></div>
            <h3>Take your first step to a world of imagination</h3>
            <p>
                We have just started using a new reservation software, Tock!
                All reservations can be made on our new site
            </p>
            <a href="https://www.exploretock.com/sipnplay/" target="_blank" rel="noopener noreferrer">
                <button className="rounded-button book-now">Book Now</button>
            </a>

            <div className="spacer"></div>

            <h3>Pricing</h3>
            <p>
                Reservations are $15 a person for 3 hours of game time. 
                Other rates apply for certain events.
            </p>
            
            <h3>Birthday Packages</h3>
            <Carousel 
                showArrows={true} 
                showIndicators={false} 
                showStatus={false} 
                infiniteLoop={true}
                className="custom-carousel"
            >
                <div>
                    <h4>Renting entire backroom:</h4>
                    <p>$350 for 3 hours of game time all to your party!</p>
                </div>
                <div>
                    <h4>Birthday basic package:</h4>
                    <p>$550 - Have the entire backroom to yourselves and get pizza and soda for the whole party! For ten people, each additional person is +$30</p>
                </div>
                <div>
                    <h4>Birthday premium package:</h4>
                    <p>$700 - Have the entire backroom to yourselves with pizza, soda, unlimited bubble tea, unlimited appetizers and each participant gets a Sip & Play goodie bag! For ten people, each additional person is +$45</p>
                </div>
                <div>
                    <h4>For any other large party inquiries, do fill out the form above!</h4>
                </div>
            </Carousel>

            <div className="spacer"></div>

            <h3>Gift Cards</h3>
            <p>
                Enjoyed your time and want to gift the joy of board games with us? Give a gift card!
            </p>
            <a href="https://squareup.com/gift/SWP5P3242C38Q/order" target="_blank" rel="noopener noreferrer">
                <button className="rounded-button buy-now">Buy Now</button>
            </a>

        </div>
    );
};

export default ReservationPage;

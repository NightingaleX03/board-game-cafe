// pages/home.js
import React from 'react';

const ReservationPage = () => {
    return (
        <div>
            <h1>Reservations</h1>
            <h3>Take your first step to a world of imagination</h3>
            <p>
                We have just started using a new reservation software, Tock!
                All reservations can be made on our new site:
            </p>
            <a href="https://www.exploretock.com/sipnplay/" target="_blank" rel="noopener noreferrer">
                <button>Book Now</button>
            </a>

            <h3>Pricing</h3>
            <p>
                Reservations are $15 a person for 3 hours of game time. 
                Other rates apply for certain events.
            </p>
            
            <h3>Birthday Packages</h3>
            <p>
                Renting entire backroom:
                $350 for 3 hours of game time all to your party!
 
                Birthday Backroom Packages:
 
                $550 Birthday basic package. Have the entire backroom to yourselves and get pizza and soda for the whole party! For ten people, each additional person is +$30
 
                $700 Birthday premium package. Have the entire backroom to yourselves with pizza, soda, unlimited bubble tea, unlimited appetizers and each participant gets a Sip & Play goodie bag! For ten people, each additional person is +$45

                For any other large party inquiries, do fill out the form above!
            </p>

            <h3>Gift Cards</h3>
            <p>
                Enjoyed your time and want to gift the joy of board games with us? Give a gift card!
                <a href="https://squareup.com/gift/SWP5P3242C38Q/order" target="_blank" rel="noopener noreferrer">
                <button>Buy Now</button>
                </a>
                
            </p>

        </div>
    );
};

export default ReservationPage;

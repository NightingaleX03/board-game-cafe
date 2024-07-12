// pages/home.js
import React from 'react';
import GameSearch from '../components/GameCollectionPage/GameSearch';
import GameTitle from '../components/GameCollectionPage/GameTitle';

const GamesCollectionPage = () => {
    return (
        <div>
            <GameTitle title="Welcome to the Endless Game Collection!" 
            paragraph="We at sip & play have a collection of endless games ranging from family friends, to couples and 2 player, to those who'd play boardgames as hobbies.
            There is something for everyone! Take a step forward into the endless world of fun and games!" />
            <GameSearch />
        </div>
    );
};

export default GamesCollectionPage;
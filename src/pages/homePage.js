// pages/home.js
import React from 'react';
import Carousel from '../components/Homepage/AnimatedNewspaper';
import HomeTitle from '../components/Homepage/HomeTitle';
import Description from '../components/Homepage/Description';

const HomePage = () => {
    return (
        <div>
            <HomeTitle />
            <Description />
            <Carousel style={{ height: '600px' }}/>
            
        </div>
    );
};

export default HomePage;

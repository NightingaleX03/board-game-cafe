import React from 'react';
import Newspaper from './NewspaperLayout';
import './AnimatedNewspaper.css';

const Carousel = () => {
    const newspapers = [
        {
            title: 'Headline 1',
            image: 'path/to/your/image1.jpg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            title: 'Headline 2',
            image: 'path/to/your/image2.jpg',
            content: 'Phasellus sit amet velit auctor turpis suscipit pulvinar...'
        },
        {
            title: 'Headline 3',
            image: 'path/to/your/image3.jpg',
            content: 'Curabitur tincidunt ligula et erat interdum, nec tempor...'
        }
    ];

    return (
        <div className="carousel">
            {newspapers.map((news, index) => (
                <Newspaper 
                    key={index} 
                    title={news.title} 
                    image={news.image} 
                    content={news.content} 
                />
            ))}
        </div>
    );
}

export default Carousel;

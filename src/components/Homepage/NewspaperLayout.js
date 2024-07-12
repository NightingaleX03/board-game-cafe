import React from 'react';
import './NewspaperLayout.css';

const NewspaperLayout = () => {
    return (
        <div className="container">
            <div className="left-column">
                <img src="path/to/your/image.jpg" alt="News" className="news-image" />
                <div className="newspaper-text">
                    <h1>Headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt...</p>
                    {/* Add more paragraphs as needed */}
                </div>
            </div>
        </div>
    );
}

export default NewspaperLayout;

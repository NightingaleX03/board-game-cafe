import React from 'react';
import './HomeTitle.css'; 

const PageLayout = () => {
    return (
        <div className="page-container">
            <div className="background-container">
                <div className="image-overlay">
                    <h2>Title on Image</h2>
                </div>
                <iframe loading="lazy" className="canva-iframe"
                    src="https://www.canva.com/design/DAGKttgJwbQ/loMXEXgpcFKSgG8wwtcRKQ/view?embed"
                    allowFullScreen={true} allow="fullscreen">
                </iframe>
            </div>
            <div className="content-container">
                <div className="left-column"></div>
                <div className="right-column">
                    <h1>Welcome to <br></br> Sip & Play!</h1>
                </div>
            </div>
        </div>
    );
}

export default PageLayout;

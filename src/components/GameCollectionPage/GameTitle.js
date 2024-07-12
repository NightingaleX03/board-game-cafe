import React from 'react';
import './GameTitle.css'; 

const TitleComponent = ({ title, paragraph }) => {
  return (
    <div className="title-component">
        <div className="overlay"></div>
        <h1 className="title">{title}</h1>
        <br></br>
        <p className="paragraph">{paragraph}</p>
    </div>
  );
}

export default TitleComponent;

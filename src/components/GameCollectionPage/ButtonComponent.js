import React, { useState } from 'react';
import './ButtonComponent.css'; 

const ButtonComponent = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ButtonComponent;

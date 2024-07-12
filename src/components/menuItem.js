import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelLoader from './ModelLoader'; // Import the ModelLoader component
import '../styles/menuItem.css';

const MenuItem = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="menu-item">
      <div className="item-name" onClick={handleOpenPopup}>
        <p>{item.name || 'Unnamed Item'}</p>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-left">
              <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[10, 10, 10]} />
                {item.name === 'Coffee' ? (
                  <ModelLoader path="/3DAssets/iced-coffee/tinker.obj" /> 
                ) : (
                  <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="orange" />
                  </mesh>
                )}
                <OrbitControls />
              </Canvas>
            </div>
            <div className="popup-right">
              <h2>{item.name || 'Unnamed Item'}</h2>
              <p>{item.description || 'No description available'}</p>
              {item.prices && (
                <div className="item-prices">
                  {item.prices.map((price, index) => (
                    <p key={index}>
                      {price.label}: {price.price}
                    </p>
                  ))}
                </div>
              )}
              {item.ingredients && <p>Ingredients: {item.ingredients}</p>}
              {item.calories && <p>Calories: {item.calories}</p>}
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Display 3D model directly on the menu page */}
      {!showPopup && item.name === 'Coffee' && (
        <div className="menu-item-3d-model">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[10, 10, 10]} />
            <ModelLoader path="/3DAssets/iced-coffee/tinker.obj" /> 
            <OrbitControls />
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default MenuItem;

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../styles/menuItem.css';

const MenuItem = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="menu-item">
      <div onClick={handleOpenPopup} className="item-thumbnail">
        <img src={item.thumbnail} alt={item.name} />
        <p>{item.name}</p>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-left">
              <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[10, 10, 10]} />
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color="orange" />
                </mesh>
                <OrbitControls />
              </Canvas>
            </div>
            <div className="popup-right">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;

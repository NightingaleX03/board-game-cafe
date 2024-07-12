import React from 'react';
import MenuItem from '../components/menuItem';
import menuItems from '../components/menuItems.json'; // Adjust the path as per your project structure

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h2>Coffee</h2>
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <MenuItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default MenuPage;

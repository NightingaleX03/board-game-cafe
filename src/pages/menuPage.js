import React from 'react';
import MenuItem from '../components/menuItem'; 

const MenuPage = () => {
  const menuItems = [
    {
      name: 'Coffee',
      description: 'Freshly brewed coffee.',
      price: '$3.00',
      thumbnail: '/path/to/coffee-thumbnail.jpg',
    },
    // Add more items here
  ];

  return (
    <div className="menu-page">
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default MenuPage;

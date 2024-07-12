import React from 'react';
import MenuItem from '../components/menuItem';

const MenuPage = () => {
  const menuItems = [
    {
      category: 'Coffee',
      name: 'Latte',
      description: '',
      prices: [
        { label: 'Hot', price: '$4.75' },
        { label: 'Cold', price: '$5.25' }
      ]
    },
    {
      category: 'Coffee',
      name: 'Cortado',
      description: '',
      prices: [
        { label: 'Hot', price: '$4.25' },
        { label: 'Cold', price: '$4.75' }
      ]
    },
    {
      category: 'Coffee',
      name: 'Drip Coffee',
      description: '',
      prices: [
        { label: 'Small (H)', price: '$3.00' },
        { label: 'Small (C))', price: '$3.50' },
        { label: 'Medium (H)', price: '$3.50' },
        { label: 'Large (H)', price: '$4.00' },
        { label: 'Large (C)', price: '$4.25' }
      ]
    },
    {
      category: 'Coffee',
      name: 'Cafe Au Lait',
      description: '',
      prices: [
        { label: 'Hot', price: '$3.25' }
      ]
    },
    {
      category: 'Coffee',
      name: 'Cappucino',
      description: '',
      prices: [
        { label: 'Hot', price: '$4.50' }
      ]
    },
    {
      category: 'Coffee',
      name: 'Mocha',
      description: '',
      prices: [
        { label: 'Hot', price: '$5.75' },
        { label: 'Cold', price: '$6.25' }
      ]
    },
    {
      category: 'Coffee',
      name: 'Red Eye',
      description: '',
      prices: [
        { label: 'Hot', price: '$4.50' },
        { label: 'Cold', price: '$4.75' }
      ]
    },
    {
      category: 'Coffee',
      name: 'Americano',
      description: '',
      prices: [
        { label: 'Hot', price: '$3.75' },
        { label: 'Cold', price: '$4.25' }
      ]
    },
    // Add more coffee items here
  ];

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

import React, { useState, useEffect } from 'react';
import gamesData from '../../games.json';
import './GameSearch.css';
import ButtonComponent from './ButtonComponent'; // Import ButtonComponent

const GameList = () => {
  const [games, setGames] = useState([]);
  const [sortedGames, setSortedGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 25;
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setGames(gamesData);
    setSortedGames([...gamesData]);
  }, []);

  const sortGames = (order) => {
    const sorted = [...games].sort((a, b) => {
      const nameA = a.GameName.toUpperCase();
      const nameB = b.GameName.toUpperCase();
      if (order === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setSortedGames(sorted);
    setSortBy(order === 'asc' ? 'A-Z' : 'Z-A');
  };

  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSortBy('');
    setSelectedCategory('');
    setCurrentPage(1);
    setSortedGames([...games]);
  };

  const filteredGames = sortedGames.filter((game) => {
    const isInSearchResults = game.GameName.toLowerCase().includes(searchTerm.toLowerCase());
    const hasSelectedCategory = selectedCategory ? game.Categories.includes(selectedCategory) : true;
    return isInSearchResults && hasSelectedCategory;
  });

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  return (
    <div className="game-list-container">
      <div className="filters-column">
        <div className="curved-box">
          <h3>Sort Options</h3>
          <ButtonComponent
            label="A-Z"
            onClick={() => sortGames('asc')}
            isActive={sortBy === 'A-Z'}
          />
          <ButtonComponent
            label="Z-A"
            onClick={() => sortGames('desc')}
            isActive={sortBy === 'Z-A'}
          />
          <h3>Categories</h3>
          <ButtonComponent
            label="Staff Picks for families"
            onClick={() => handleCategoryClick('Staff Picks for families')}
            isActive={selectedCategory === 'Staff Picks for families'}
          />
          <ButtonComponent
            label="Staff picks for couples/2 players"
            onClick={() => handleCategoryClick('Staff picks for couples/2 players')}
            isActive={selectedCategory === 'Staff picks for couples/2 players'}
          />
          <ButtonComponent
            label="Staff picks for boardgame hobbyists"
            onClick={() => handleCategoryClick('Staff picks for boardgame hobbyists')}
            isActive={selectedCategory === 'Staff picks for boardgame hobbyists'}
          />
          <ButtonComponent
            label="Reset Filters"
            onClick={resetFilters}
          />
        </div>
      </div>

      <div className="search-results-column">
        <div className="search-column">
          <h3>Search</h3>
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="game-display">
          {currentGames.map((game, index) => (
            <div key={index} className="game-card">
              <h4>{game.GameName}</h4>
            </div>
          ))}
        </div>

        <div className="page-navigation">
          {Array.from({ length: Math.ceil(filteredGames.length / gamesPerPage) }, (_, index) => (
            <button key={index} onClick={() => changePage(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameList;

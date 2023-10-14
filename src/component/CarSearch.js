import React, { useState } from 'react';
import './search.css'; // Import the styles for the SearchBar component

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search cars..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='button' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;

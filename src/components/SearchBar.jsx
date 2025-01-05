// SearchBar.js
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Passing the query to the parent component
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search galleries by title..."
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    
}
export default SearchBar;

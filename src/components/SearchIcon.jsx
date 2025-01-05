import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchIcon = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef(null); // Ref to the input field
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
            setShowSearchBar(false); // Close the search bar
            setSearchQuery(''); // Reset the input field
        }
    };

    const toggleSearchBar = () => {
        setShowSearchBar((prev) => {
            const nextState = !prev;
            if (nextState) {
                setTimeout(() => inputRef.current?.focus(), 0); // Focus the input field when showing
            }
            return nextState;
        });
    };

    return (
        <div className="search-container">
            <span onClick={toggleSearchBar}>
                <p>SEARCH</p>
                <FontAwesomeIcon 
                    icon={faSearch} 
                    className="search-icon" 
                />
            </span>
            {showSearchBar && (
                <form className="search-bar" onSubmit={handleSearch}>
                    <input
                        type="text"
                        ref={inputRef} // Attach the ref to the input
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            )}
        </div>
    );
};

export default SearchIcon;

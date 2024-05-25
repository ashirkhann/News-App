import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ selectedType, onChange, onSearchSubmit }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchChange = (event) => {
      setSearchInput(event.target.value);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        onSearchSubmit(searchInput);
        setSearchInput('')
      }
    };
    return (
        <div className='search-section'>
            <div className="dropdown-container">
                <select id="storyType" value={selectedType} onChange={onChange} className="dropdown-content">
                    <option value="topstories">Top Stories</option>
                    <option value="newstories">New Stories</option>
                    <option value="askstories">Ask Stories</option>
                    <option value="showstories">Show Stories</option>
                    <option value="jobstories">Job Stories</option>
                </select>
            </div>

            <div>
                <form className="form" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="search">
                        <input
                             className="input"
                             type="text"
                             required=""
                             placeholder="Search for news..."
                             id="search"
                             value={searchInput}
                             onChange={handleSearchChange}
                             onKeyUp={handleKeyPress}
                        />
                        <div className="fancy-bg"></div>
                        <div className="search">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                        </div>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;

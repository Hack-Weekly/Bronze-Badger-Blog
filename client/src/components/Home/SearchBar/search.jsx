import React from 'react';

const SearchBar = ({ value, handleSearch, clearSearch, formSubmit }) => (
    <div className='search'>
      <form onSubmit={formSubmit}>
        <input type='text' 
               onChange={handleSearch} 
               placeholder="Search" 
               value={value} />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Search</button>
      </form>
    </div>
  );

export default SearchBar;

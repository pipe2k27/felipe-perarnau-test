import React from 'react';
import './styles.css';

const SearchBar = ({ setSearchResults }) => {
  const movieGetter = async (searchTerm) => {
    if (searchTerm.trim() !== '') {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=270db1326586b858b0b7001ef3f0efb6&language=en-US&query=${searchTerm}&page=1&include_adult=false`
      );
      const movies = await data.json();
      console.log(movies);
      setSearchResults(movies);
    } else {
      setSearchResults(null);
    }
  };

  return (
    <div className="search-bar-div">
      <p>Movie Search:</p>
      <div className="search-bar-container">
        <input
          onChange={(event) => {
            movieGetter(event.target.value);
          }}
          className="search-bar"
        ></input>
        <i className="fas fa-search search-bar-icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;

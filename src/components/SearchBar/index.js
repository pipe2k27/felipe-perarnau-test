import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchBar = ({ setSearchResults }) => {
  // movieGetter searches for movies with the term provided
  const movieGetter = async (searchTerm) => {
    if (searchTerm.trim() !== '') {
      // On a larger project would hav used redux sagas or thunks for async calls
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=270db1326586b858b0b7001ef3f0efb6&language=en-US&query=${searchTerm}&page=1&include_adult=false`
        );
        const movies = await data.json();
        setSearchResults(movies);
      } catch (error) {
        console.log(error);
      }
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

SearchBar.propTypes = {
  setSearchResults: PropTypes.func,
};

export default SearchBar;

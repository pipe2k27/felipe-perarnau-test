import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [clicked, clicker] = useState(false);

  function handleClick(prevClicked) {
    clicker((prevClicked) => {
      return !prevClicked;
    });
  }

  return (
    <div className="header blue-bg" id="header">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + '/images/movie-bay-light.png'}
          alt="logo-word"
          className="logo-word"
        ></img>
      </Link>

      <div className={clicked ? 'navbar drop' : 'navbar colapse'}>
        <Link to="/" className="nav-element" onClick={handleClick}>
          <p onClick={handleClick}>Home</p>
          <div className="navline"></div>
        </Link>
      </div>
      <i onClick={handleClick} className="fas fa-bars"></i>
    </div>
  );
}

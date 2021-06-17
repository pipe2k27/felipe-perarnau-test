import React from 'react';
import './styles.css';

const Stars = ({ number, className }) => {
  const starsArray = [1, 2, 3, 4, 5];
  return (
    <div className={className ? className : 'stars-div'}>
      {starsArray.map((starNumber) => {
        return (
          <i
            className={`fas fa-star star ${
              starNumber <= number ? 'star-on' : 'star-off'
            }`}
          ></i>
        );
      })}
    </div>
  );
};

export default Stars;

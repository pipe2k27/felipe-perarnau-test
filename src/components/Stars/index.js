import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Stars = ({ number, className }) => {
  const starsArray = [1, 2, 3, 4, 5];
  return (
    <div className={className ? className : 'stars-div'}>
      {starsArray.map((starNumber) => {
        return (
          <i
            key={starNumber}
            className={`fas fa-star star ${
              starNumber <= number ? 'star-on' : 'star-off'
            }`}
          ></i>
        );
      })}
    </div>
  );
};

Stars.propTypes = {
  number: PropTypes.number,
  className: PropTypes.string,
};

export default Stars;

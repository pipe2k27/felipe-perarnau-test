import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// this component works as a filter for movies according to rating
const StarsFilter = ({ number, className, setter }) => {
  const starsArray = [1, 2, 3, 4, 5];
  return (
    <div className={className ? `${className} flex` : 'stars-filter-div flex'}>
      <p className="small grey margin-r">Filter by rating:</p>
      {starsArray.map((starNumber) => {
        return (
          <i
            key={starNumber}
            className={`fas fa-star stars-filter ${
              starNumber <= number ? 'star-filter-on' : 'star-filter-off'
            }`}
            onClick={() => {
              setter(starNumber);
            }}
          ></i>
        );
      })}
      <p
        className="small star-reset margin-l blue-bg"
        onClick={() => setter(0)}
      >
        Reset
      </p>
    </div>
  );
};

StarsFilter.propTypes = {
  number: PropTypes.number,
  className: PropTypes.string,
  setter: PropTypes.func,
};

export default StarsFilter;

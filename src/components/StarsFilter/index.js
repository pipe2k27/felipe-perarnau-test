import React from 'react';
import './styles.css';

const StarsFilter = ({ number, className, setter }) => {
  const starsArray = [1, 2, 3, 4, 5];
  return (
    <div className={className ? `${className} flex` : 'stars-filter-div flex'}>
      <p className="small grey margin-r">Filter by rating:</p>
      {starsArray.map((starNumber) => {
        return (
          <i
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

export default StarsFilter;

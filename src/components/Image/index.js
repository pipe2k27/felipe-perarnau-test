import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ name, alt, className, style }) => {
  return (
    <img
      src={process.env.PUBLIC_URL + `/images/${name}`}
      className={className && className}
      alt={alt && alt}
      style={style}
    />
  );
};

Image.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

export default Image;

import React from 'react';
import PropTypes from 'prop-types';
import './SlidingCard.css';

const SlidingCard = ({ title, description, image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt="Card Image" className="card-img" />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <button>See More...</button>
        </div>
      </div>
    </div>
  );
};

SlidingCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default SlidingCard;

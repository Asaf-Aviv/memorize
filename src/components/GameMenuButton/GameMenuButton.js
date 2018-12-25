import React from 'react';
import PropTypes from 'prop-types';

const GameMenuButton = ({ text, onClick, onMouseEnter }) => (
  <button
    type="button"
    className="game-menu__btn"
    onClick={onClick}
    onMouseEnter={onMouseEnter}
  >
    {text}
  </button>
);

GameMenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default GameMenuButton;

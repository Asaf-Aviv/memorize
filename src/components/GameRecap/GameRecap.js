import React from 'react';
import PropTypes from 'prop-types';

import './GameRecap.sass';

const GameRecap = ({ stats, playAgain }) => (
  <div className="game-recap">
    <h3 className="game-recap__title">You Won!</h3>
    <span className="game-recap__field">{`Score: ${stats.score}`}</span>
    <span className="game-recap__field">{`Guesses: ${stats.guesses}`}</span>
    <span className="game-recap__field">{`Total Combos: ${stats.totalCombos}`}</span>
    <button type="button" onClick={playAgain} className="game-recap__btn">Play Again</button>
  </div>
);

GameRecap.propTypes = {
  stats: PropTypes.shape({
    score: PropTypes.number.isRequired,
    guesses: PropTypes.number.isRequired,
    totalCombos: PropTypes.number.isRequired,
  }).isRequired,
  playAgain: PropTypes.func.isRequired,
};


export default GameRecap;

import React from 'react';
import PropTypes from 'prop-types';
import { FruitPropTypes } from './PropTypes/propTypes';

import Tile from './Tile';

const GameUI = ({
  grid, fruits, chooseFruit, score, scoreMultiplier,
  guesses, totalCombos, currentCombo,
}) => (
  <>
    <header className="game-header">
      <div className="scoreboard">
        <span>{`Score: ${score}`}</span>
        <span>{`Score Multiplier: ${scoreMultiplier}`}</span>
        <span>{`guesses: ${guesses}`}</span>
        <span>{`Combo: ${currentCombo}`}</span>
        <span>{`Total Combos: ${totalCombos}`}</span>
      </div>
    </header>

    <main className="grid-container">
      {grid.map(fruit => (
        <Tile
          choosable={!fruits.some(f => f.id === fruit.id) && !fruit.completed}
          completed={fruit.completed}
          key={fruit.id}
          fruit={fruit}
          chooseFruit={chooseFruit}
        />
      ))}
    </main>
  </>
);

GameUI.propTypes = {
  grid: PropTypes.arrayOf(FruitPropTypes).isRequired,
  fruits: PropTypes.arrayOf(FruitPropTypes).isRequired,
  chooseFruit: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  scoreMultiplier: PropTypes.number.isRequired,
  guesses: PropTypes.number.isRequired,
};

export default GameUI;

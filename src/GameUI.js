import React from 'react';
import PropTypes from 'prop-types';
import { FruitPropTypes } from './PropTypes/propTypes';
import Tile from './Tile';

import './GameUI.sass';

const GameUI = ({
  grid, fruits, chooseFruit, score, scoreMultiplier,
  guesses, totalCombos, currentCombo,
}) => (
  <div className="game__container">
    <header className="game__header">
      <div className="scoreboard">
        <span className="scoreboard__item">{`Score: ${score}`}</span>
        <span className="scoreboard__item">{`Score Multiplier: ${scoreMultiplier}`}</span>
        <span className="scoreboard__item">{`guesses: ${guesses}`}</span>
        <span className="scoreboard__item">{`Combo: ${currentCombo}`}</span>
        <span className="scoreboard__item">{`Total Combos: ${totalCombos}`}</span>
      </div>
    </header>

    <main className="grid-container">
      {grid.map((fruit, i) => (
        <Tile
          choosable={!fruits.some(f => f.id === fruit.id) && !fruit.completed}
          completed={fruit.completed}
          key={fruit.id}
          fruit={fruit}
          chooseFruit={chooseFruit}
          index={i}
        />
      ))}
    </main>
  </div>
);

GameUI.propTypes = {
  grid: PropTypes.arrayOf(FruitPropTypes).isRequired,
  fruits: PropTypes.arrayOf(FruitPropTypes).isRequired,
  chooseFruit: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  scoreMultiplier: PropTypes.number.isRequired,
  guesses: PropTypes.number.isRequired,
  currentCombo: PropTypes.number.isRequired,
  totalCombos: PropTypes.number.isRequired,
};

export default GameUI;

import React, { useState, useEffect, createContext } from 'react';
import './App.sass';
import Tile from './Tile';
import { createGrid } from './util/util';

export const GameContext = createContext({});

const App = () => {
  const [isPlaying, setGameState] = useState(false);
  const [fruits, setFruits] = useState([]);
  const [grid, setGrid] = useState([]);

  const playGame = () => {
    setGrid(createGrid());
    setGameState(true);
  };

  const isMatch = chosenFruits => (
    chosenFruits[0].name === chosenFruits[1].name
  );

  const checkGameOver = () => {
    if (grid.every(({ completed }) => completed)) {
      setGameState(false);
    }
  };

  const updateGrid = fruitName => setGrid(grid.map(fruit => (
    fruit.name === fruitName
      ? { ...fruit, completed: true }
      : fruit
  )));

  const chooseFruit = (fruit) => {
    if (fruits.length === 2) return;
    setFruits([...fruits, fruit]);
  };

  useEffect(() => {
    if (fruits.length !== 2) return;

    if (!isMatch(fruits)) {
      setTimeout(() => setFruits([]), 500);
      return;
    }

    updateGrid(fruits[0].name);
    setFruits([]);
  }, [fruits]);

  useEffect(() => {
    if (isPlaying) {
      checkGameOver();
    }
  }, [grid]);

  return (
    <>
      <div className="container">
        {isPlaying
          ? (
            <GameContext.Provider value={{ fruits, chooseFruit }}>
              <div className="grid-container">
                {grid.map(fruit => (
                  <Tile
                    choosable={!fruits.some(f => f.id === fruit.id)}
                    completed={fruit.completed}
                    key={fruit.id}
                    fruit={fruit}
                  />
                ))}
              </div>
            </GameContext.Provider>
          )
          : <button type="button" onClick={playGame}>Play</button>
        }
      </div>
  </>
  );
};

export default App;

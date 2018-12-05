import React, { useState, useEffect, useRef } from 'react';
import GameMenu from './GameMenu';
import GameUI from './GameUI';
import GameRecap from './GameRecap';
import { createGrid } from './util/util';
import MatchSound from './assets/sounds/match.wav';

const GameWrapper = () => {
  const [isPlaying, setGameState] = useState(false);
  const [grid, setGrid] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [score, setScore] = useState(0);
  const [scoreMultiplier, setScoreMultiplier] = useState(1);
  const [showWinningScreen, setGameOver] = useState(false);
  const [guesses, incGuesses] = useState(0);
  const [isComboable, setIsComboable] = useState(false);
  const [currentCombo, setCurrentCombo] = useState(0);
  const [totalCombos, incTotalCombos] = useState(0);

  const matchSound = useRef();

  const playMatchSound = () => {
    matchSound.current.play();
  };

  const playGame = () => {
    setGameOver(false);
    setGrid(createGrid());
    setGameState(true);
  };

  const restartGame = () => {
    setGameState(false);
    setScore(0);
    playGame();
  };

  const isMatch = chosenFruits => (
    chosenFruits[0].name === chosenFruits[1].name
  );

  const gameOver = () => {
    setGameState(false);
    setGameOver(true);
  };

  const checkGameOver = () => {
    if (grid.every(({ completed }) => completed)) {
      gameOver();
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

    incGuesses(guesses + 1);

    if (!isMatch(fruits)) {
      setIsComboable(false);
      setCurrentCombo(0);
      if (scoreMultiplier > 1) {
        setScoreMultiplier(scoreMultiplier - 0.25);
      }
      setTimeout(() => setFruits([]), 500);
      return;
    }

    if (isComboable) {
      setCurrentCombo(currentCombo + 1);
      incTotalCombos(totalCombos + 1);
    } else {
      setIsComboable(true);
    }

    playMatchSound();
    updateGrid(fruits[0].name);
    setScore(score + 1000 * scoreMultiplier);
    setScoreMultiplier(scoreMultiplier + 1);
    setFruits([]);
  }, [fruits]);

  useEffect(() => {
    if (isPlaying) {
      checkGameOver();
    }
  }, [grid]);

  return (
    <div className="game-wrapper">
      <GameMenu isPlaying={isPlaying} playGame={playGame} restartGame={restartGame} />
      {isPlaying && (
        <GameUI
          grid={grid}
          score={score}
          fruits={fruits}
          chooseFruit={chooseFruit}
          scoreMultiplier={scoreMultiplier}
          guesses={guesses}
          currentCombo={currentCombo}
          totalCombos={totalCombos}
        />
      )}
      {showWinningScreen && <GameRecap /> }
      <audio ref={matchSound} src={MatchSound} />
    </div>
  );
};

export default GameWrapper;

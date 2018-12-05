import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import GameMenuButton from './GameMenuButton';
import MenuSound from './assets/sounds/menu.wav';
import BackSound from './assets/sounds/back.wav';

import './GameMenu.sass';

const Menu = ({ isPlaying, playGame, restartGame }) => {
  const menuSound = useRef();

  const playMenuSound = () => {
    menuSound.current.play();
  };

  return (
    <div className="game-menu">
      <audio ref={menuSound} id="menu-sound" src={MenuSound} />
      <audio id="back-sound" src={BackSound} />
      <GameMenuButton
        text={isPlaying ? 'Restart Game' : 'Play'}
        onClick={isPlaying ? restartGame : playGame}
        onMouseEnter={playMenuSound}
      />
      <GameMenuButton
        text="Options"
        onClick={playGame}
        onMouseEnter={playMenuSound}
      />
      <GameMenuButton
        text="Quit"
        onClick={playGame}
        onMouseEnter={playMenuSound}
      />
    </div>
  );
};

Menu.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  playGame: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
};

export default Menu;

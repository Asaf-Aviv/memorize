import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import GameMenuButton from './GameMenuButton';
import MenuSound from './assets/sounds/menu.wav';
import BackSound from './assets/sounds/back.wav';

import './GameMenu.sass';

const Menu = ({ isPlaying, playGame, quitGame }) => {
  const [showMenu, toggleMenu] = useState(false);
  const menuSound = useRef();

  const playMenuSound = () => {
    menuSound.current.play();
  };

  const toggleMenuHandler = () => {
    toggleMenu(!showMenu);
  };

  const handleMenuClick = (e) => {
    if (e.target.classList.contains('game-menu__btn')) {
      toggleMenu(!showMenu);
    }
  };

  return (
    <>
      <div className="game-menu__toggler" onClick={toggleMenuHandler}>
        <img className="game-menu__icon" alt="menu icon" src={require('./assets/menu/menu.svg')} />
      </div>
      <div
        className={`game-menu
        ${showMenu ? 'game-menu--open' : ''}
      `}
        onClick={handleMenuClick}
      >
        <audio ref={menuSound} id="menu-sound" src={MenuSound} />
        <audio id="back-sound" src={BackSound} />
        <div className="game-menu__container">
          {isPlaying && (
            <GameMenuButton
              text="Resume"
              onClick={toggleMenuHandler}
              onMouseEnter={playMenuSound}
            />
          )}
          <GameMenuButton
            text={isPlaying ? 'Restart Game' : 'Play'}
            onClick={playGame}
            onMouseEnter={playMenuSound}
          />
          <GameMenuButton
            text="Options"
            onClick={playGame}
            onMouseEnter={playMenuSound}
          />
          <GameMenuButton
            text="Quit"
            onClick={quitGame}
            onMouseEnter={playMenuSound}
          />
        </div>
      </div>
    </>
  );
};

Menu.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  playGame: PropTypes.func.isRequired,
  quitGame: PropTypes.func.isRequired,
};

export default Menu;

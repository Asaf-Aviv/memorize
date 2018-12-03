import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from './App';


const Tile = ({ fruit, choosable, completed }) => {
  const { chooseFruit } = useContext(GameContext);
  let classes = 'tile';
  if (completed) classes += ' completed';
  if (!choosable) classes += ' choosen';

  return (
    <div
      id={fruit.id}
      className={classes}
      data-fruit={fruit.name}
      onClick={choosable && !completed ? () => chooseFruit(fruit) : null}
    >
      <figure className="fruit__figure">
        <img
          className="fruit__img"
          alt={fruit.name}
          src={require(`./assets/fruits/${fruit.name}.svg`)}
        />
      </figure>
    </div>
  );
};

Tile.propTypes = {
  choosable: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  fruit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tile;

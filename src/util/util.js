import uuid from 'uuid/v1';

const fruits = [
  'apple', 'apple',
  'banana', 'banana',
  'cherries', 'cherries',
  'grapes', 'grapes',
  'lemon', 'lemon',
  'pear', 'pear',
  'pineapple', 'pineapple',
  'raspberry', 'raspberry',
  'tomato', 'tomato',
  'watermelon', 'watermelon',
];

let fruitsCopy = null;

const pickRandomFruit = () => {
  const randomItemIndex = parseInt(Math.random() * fruitsCopy.length, 10);
  const fruit = fruitsCopy.splice(randomItemIndex, 1)[0];
  return fruit;
};

const resetFruitsGrid = () => {
  fruitsCopy = [...fruits];
};

export const createGrid = () => {
  resetFruitsGrid();

  return [...Array(20)].map(() => ({
    name: pickRandomFruit(),
    id: uuid(),
    completed: false,
  }));
};

export const z = '';

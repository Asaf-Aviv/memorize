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

const pickRandomFruit = () => {
  const randomItemIndex = parseInt(Math.random() * fruits.length, 10);
  const fruit = fruits.splice(randomItemIndex, 1)[0];
  return fruit;
};

export const createGrid = () => [...Array(20)].map(() => ({
  name: pickRandomFruit(),
  id: uuid(),
  completed: false,
}));

export const z = '';

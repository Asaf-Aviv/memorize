import PropTypes from 'prop-types';

export const FruitPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});

export const z = '';

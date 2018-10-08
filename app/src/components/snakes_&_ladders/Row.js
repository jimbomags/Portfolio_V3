import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ squares }) => (
  <div className="board-row">
    {squares}
  </div>
);

Row.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Row;

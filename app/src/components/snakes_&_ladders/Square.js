import React from 'react';
import PropTypes from 'prop-types';

const Square = ({
  number,
  p1Score,
  p2Score,
  ladders,
  snakes,
  ladderKeys,
  snakesKeys
}) => {
  const p1Id = p1Score === number ? 'p1-Circle' : '';
  const p2Id = p2Score === number ? 'p2-Circle' : '';
  const ladder = ladderKeys.includes(number.toString()) ? `(+${ladders[number.toString()]})` : null;
  const snake = snakesKeys.includes(number.toString()) ? `(-${snakes[number.toString()]})` : null;

  return (
    <div className="square" id={number} key={number}>
      <div id={p2Id} />
      <p>{number}<b>{ladder}{snake}</b></p>
      <div id={p1Id} />
    </div>
  );
};

Square.propTypes = {
  number: PropTypes.number.isRequired,
  p1Score: PropTypes.number.isRequired,
  p2Score: PropTypes.number.isRequired,
};

export default Square;

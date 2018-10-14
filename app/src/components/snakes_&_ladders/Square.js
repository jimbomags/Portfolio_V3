import React from 'react';
import PropTypes from 'prop-types';
import { ladderKeys, snakesKeys } from './snakesAndLaddersPositions';

const Square = ({ number, p1Score, p2Score }) => {
  const p1Id = p1Score === number ? 'p1-Circle' : '';
  const p2Id = p2Score === number ? 'p2-Circle' : '';
  const p1Text = p1Score === number ? '1' : '';
  const p2Text = p2Score === number ? '2' : '';
  const ladder = ladderKeys.includes(number.toString()) ? 'ladder' : null;
  const snake = snakesKeys.includes(number.toString()) ? 'snake' : null;
  const backgroundColor = number % 2 === 0 ? 'blue-background' : null;

  if (p1Id || p2Id) {
    number = null;
  }

  return (
    <div className={`square ${snake} ${ladder} ${backgroundColor}`} id={number} key={number}>
      <div id={p1Id}><span>{p1Text}</span></div>
      <div>{number}</div>
      <div id={p2Id}><span>{p2Text}</span></div>
    </div>
  );
};

Square.propTypes = {
  number: PropTypes.number.isRequired,
  p1Score: PropTypes.number.isRequired,
  p2Score: PropTypes.number.isRequired,
};

export default Square;

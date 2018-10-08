import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Square from './Square';

const Board = ({
  p1Score,
  p2Score,
  ladders,
  snakes,
  ladderKeys,
  snakesKeys,
}) => {
  const grid = [];
  let number = 100;
  if (window.screen.width > 800) {
    for (let i = 0; i < 10; i += 1) {
      grid.push([]);
      for (let k = 0; k < 10; k += 1) {
        grid[i].push(<Square
          number={number}
          key={k}
          p1Score={p1Score}
          p2Score={p2Score}
          ladders={ladders}
          snakes={snakes}
          ladderKeys={ladderKeys}
          snakesKeys={snakesKeys}
        />);
        number -= 1;
      }
    }
  } else {
    for (let i = 0; i < 25; i += 1) {
      grid.push([]);
      for (let k = 0; k < 4; k += 1) {
        grid[i].push(<Square number={number} key={k} p1Score={p1Score} p2Score={p2Score} />);
        number -= 1;
      }
    }
  }
  return grid.map((arr, index) => <Row squares={arr} key={index} />);
};

Board.propTypes = {
  p1Score: PropTypes.number.isRequired,
  p2Score: PropTypes.number.isRequired,
};

export default Board;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Row from './Row';
import Square from './Square';

const Board = (props) => {
  const { p1Score, p2Score } = props.sandl;
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
  return (
    <div id="board">
      {grid.map((arr, index) => <Row squares={arr} key={index} />)}
    </div>
  );
};

Board.propTypes = {
  sandl: PropTypes.shape({
    p1Turn: PropTypes.bool,
    p1Score: PropTypes.number,
    p2Score: PropTypes.number,
    rollDiceInfo: PropTypes.string,
    turnInfo: PropTypes.string,
    playerHasWon: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  sandl: state.snakesAndLadders,
});

export default connect(mapStateToProps, null)(Board);

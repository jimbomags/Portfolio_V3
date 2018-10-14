import React from 'react';
import Players from './Players';
import Board from './Board';
import WinnerMessage from './WinnerMessage';

const SnakesAndLadders = () => (
  <div id="sandl-container">
    <Board />
    <Players />
    <WinnerMessage />
  </div>
);

export default SnakesAndLadders;

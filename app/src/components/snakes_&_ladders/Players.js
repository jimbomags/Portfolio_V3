import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../reusable';

const Players = ({
  rollDice,
  diceInfo,
  turnInfo,
  nextPlayerTurn,
}) => (
  <div id="players">
    <div id="p1" className="player-display">
      <p>Player 1:</p>
      <div />
    </div>
    <div id="p2" className="player-display">
      <p>Player 2:</p>
      <div />
    </div>
    <div id="score-info">
      <p id="roll-dice-info">{diceInfo}</p>
      <p id="landed-on-s-or-l">{turnInfo}</p>
      <p id="next-player-turn">{nextPlayerTurn}</p>
    </div>
    <Button className="btn-green button push_button" handleClick={rollDice} label="Roll Dice" />
  </div>
);

Players.propTypes = {
  rollDice: PropTypes.func.isRequired,
  diceInfo: PropTypes.string.isRequired,
  turnInfo: PropTypes.string.isRequired,
  nextPlayerTurn: PropTypes.string.isRequired,
};

export default Players;

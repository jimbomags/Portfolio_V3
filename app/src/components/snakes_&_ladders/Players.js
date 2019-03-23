import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../reusable';
import { rollDice } from '../../redux/action_creators/snakesAndLadders';

const Players = (props) => {
  const { rollDiceInfo, turnInfo, playerHasWon } = props.sandl;
  const diceNum = Math.floor((Math.random() * 12) + 1);
  const disabled = playerHasWon ? 'disabled' : '';
  return (
    <div id="players">
      <div id="score-info">
        <p id="roll-dice-info">{rollDiceInfo}</p>
        <p id="landed-on-s-or-l">{turnInfo}</p>
      </div>
      <Button className="btn btn-success" handleClick={() => props.rollDice(diceNum)} label="Roll Dice" disabled={disabled} />
    </div>
  );
};

Players.propTypes = {
  sandl: PropTypes.shape({
    p1Turn: PropTypes.bool,
    p1Score: PropTypes.number,
    p2Score: PropTypes.number,
    rollDiceInfo: PropTypes.string,
    turnInfo: PropTypes.string,
    playerHasWon: PropTypes.bool,
  }).isRequired,
  rollDice: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sandl: state.snakesAndLadders,
});
const mapDispatchToProps = dispatch => ({
  rollDice: (diceNum) => {
    dispatch(rollDice(diceNum));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);

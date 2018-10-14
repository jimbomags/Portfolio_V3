import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '../reusable';
import { restartGame } from '../../redux/action_creators/snakesAndLadders';

const WinnerMessage = (props) => {
  const { p1Turn, playerHasWon } = props.sandl;
  const player = p1Turn ? 'Player 1' : 'Player 2';
  let winnerMessageDisplay = 'none';
  if (playerHasWon) {
    winnerMessageDisplay = 'flex';
  }
  const { restartGame } = props;
  return (
    <div id="winner-message" style={{ display: winnerMessageDisplay }}>
      <div>
        <h2>{`${player} you landed on 100. You've won!`}</h2>
        <Button label="Play Again" handleClick={restartGame} className="btn-green button push_button" />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  sandl: state.snakesAndLadders,
});
const mapDispatchToProps = dispatch => ({
  restartGame: () => {
    dispatch(restartGame());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(WinnerMessage);

WinnerMessage.propTypes = {
  sandl: PropTypes.shape({
    p1Turn: PropTypes.bool,
    p1Score: PropTypes.number,
    p2Score: PropTypes.number,
    rollDiceInfo: PropTypes.string,
    turnInfo: PropTypes.string,
    playerHasWon: PropTypes.bool,
  }).isRequired,
  restartGame: PropTypes.func.isRequired,
};

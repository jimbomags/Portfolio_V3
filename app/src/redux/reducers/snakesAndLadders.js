import { ladders, snakes, ladderKeys, snakesKeys } from '../../components/snakes_&_ladders/snakesAndLaddersPositions';

const initialState = {
  p1Turn: true,
  p1Score: 1,
  p2Score: 1,
  rollDiceInfo: '',
  turnInfo: 'Player 1, you\'re up first',
  playerHasWon: false,
};

const snakesAndLadders = (state = initialState, action) => {
  const { p1Turn, p1Score, p2Score } = state;
  const { diceNum } = action;
  const player = p1Turn ? 'Player 1' : 'Player 2';
  const playerScore = p1Turn ? 'p1Score' : 'p2Score';
  const newBoardPosition = p1Turn ? p1Score + diceNum : p2Score + diceNum;
  const newState = {
    ...state,
    p1Turn: !p1Turn,
    rollDiceInfo: `${player} you've rolled ${diceNum}`,
    turnInfo: '',
  };

  if (action.type === 'DICE_ROLLED') {
    if ((state[playerScore] + diceNum) > 100) {
      return {
        ...newState,
        turnInfo: `Sorry ${player}, you rolled a number that would move you above 100, therefore you stay in the same position`,
      };
    }
    if (state[playerScore] + diceNum === 100) {
      return {
        ...newState,
        p1Turn: !newState.p1Turn,
        playerHasWon: true,
        [playerScore]: state[playerScore] + diceNum,
      };
    }
    if (ladderKeys.includes(newBoardPosition.toString())) {
      return {
        ...newState,
        [playerScore]: newBoardPosition + ladders[newBoardPosition],
        turnInfo: `Congratulations ${player}, you landed on a ladder and moved up an extra ${ladders[newBoardPosition]} places`,
      };
    }
    if (snakesKeys.includes(newBoardPosition.toString())) {
      return {
        ...newState,
        [playerScore]: newBoardPosition - snakes[newBoardPosition],
        turnInfo: `Oh no ${player}, you landed on a snake and moved down ${snakes[newBoardPosition]} places`,
      };
    }
    return {
      ...newState,
      [playerScore]: newBoardPosition,
    };
  }
  if (action.type === 'RESTART_GAME') {
    return initialState;
  }
  return state;
};

export default snakesAndLadders;

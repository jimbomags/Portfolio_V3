const initialState = {
  p1Turn: true,
  p1Score: 1,
  p2Score: 1,
  rollDiceInfo: '',
  turnInfo: '',
  nextPlayerTurn: 'Player 1, you\'re up first',
};

const snakesAndLadders = (state = initialState, newStateObj) => ({
  newStateObj,
  ...state,
});

export default snakesAndLadders;

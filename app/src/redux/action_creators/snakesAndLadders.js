const DICE_ROLLED = 'DICE_ROLLED';

const snakesAndLadders = stateObj => ({
  type: DICE_ROLLED,
  stateObj,
});

export default snakesAndLadders;

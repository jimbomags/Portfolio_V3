const DICE_ROLLED = 'DICE_ROLLED';
const RESTART_GAME = 'RESTART_GAME';

export const rollDice = diceNum => ({
  type: DICE_ROLLED,
  diceNum,
});

export const restartGame = () => ({
  type: RESTART_GAME,
});

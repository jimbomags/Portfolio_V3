import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Players from './Players';
import Board from './Board';

const ladders = {
  14: 8,
  38: 28,
  51: 11,
  76: 10,
  92: 5,
};
const snakes = {
  21: 10,
  44: 19,
  63: 8,
  88: 24,
  99: 10,
};
const ladderKeys = Object.keys(ladders);
const snakesKeys = Object.keys(snakes);

class SnakesAndLadders extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      p1Turn: true,
      p1Score: 1,
      p2Score: 1,
      rollDiceInfo: '',
      turnInfo: '',
      nextPlayerTurn: 'Player 1, you\'re up first',
    };
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    const rndNum = Math.floor((Math.random() * 12) + 1);
    const p1SandlCheck = (this.state.p1Score + rndNum).toString();
    const p2SandlCheck = (this.state.p2Score + rndNum).toString();

    const playerInfoStateObj = (player, condition) => {
      if (condition === 'gt100') {
        return {
          turnInfo: `Sorry ${player}, you rolled a number that would move you above 100, therefore you stay in the same position`,
        };
      }
      if (condition === 'playerHasWon') {
        return {
          p1Turn: true,
          p1Score: 1,
          p2Score: 1,
          rollDiceInfo: '',
          turnInfo: '',
          nextPlayerTurn: 'Player 1, you\'re up first',
        };
      }
      if (condition === 'ladder') {
        if (player === 'Player 1') {
          return {
            p1Score: (this.state.p1Score + rndNum) + ladders[p1SandlCheck],
            turnInfo: `Player 1! You landed on a ladder and moved up ${ladders[p1SandlCheck]} places`,
          };
        } return {
          p2Score: (this.state.p2Score + rndNum) + ladders[p2SandlCheck],
          turnInfo: `Player 2! You landed on a ladder and moved up ${ladders[p2SandlCheck]} places`,
        };
      }
      if (condition === 'snake') {
        if (player === 'Player 1') {
          return {
            p1Score: (this.state.p1Score + rndNum) - snakes[p1SandlCheck],
            turnInfo: `Oh No Player 1! You landed on a snake and moved down ${snakes[p1SandlCheck]} places`,
          };
        } return {
          p2Score: (this.state.p2Score + rndNum) - snakes[p2SandlCheck],
          turnInfo: `Oh No Player 2! You landed on a snake and moved down ${snakes[p2SandlCheck]} places`,
        };
      }
    };

    if (this.state.p1Turn) {
      this.setState({
        p1Turn: false,
        rollDiceInfo: `Player 1, you rolled ${rndNum}`,
        turnInfo: '',
        nextPlayerTurn: 'Player 2, it\'s your turn next...',
      });

      if ((this.state.p1Score + rndNum) > 100) {
        this.setState(playerInfoStateObj('Player 1', 'gt100'));

      } else if ((this.state.p1Score + rndNum) === 100) {
        alert(`Congratulations Player 1 you rolled ${rndNum} and landed on 100. You've Won!!!`)

        this.setState(playerInfoStateObj(null, 'playerHasWon'));

      } else if (ladderKeys.includes(p1SandlCheck)) {
        this.setState(playerInfoStateObj('Player 1', 'ladder'));

      } else if (snakesKeys.includes(p1SandlCheck)) {
        this.setState(playerInfoStateObj('Player 1', 'snake'));
      } else {
        this.setState({
          p1Score: this.state.p1Score + rndNum,
        });
      }
    } else {

      this.setState({
        p1Turn: true,
        rollDiceInfo: `Player 2, you rolled ${rndNum}`,
        turnInfo: '',
        nextPlayerTurn: 'Player 1, it\'s your turn next...',
      });

      if ((this.state.p2Score + rndNum) > 100) {
        this.setState(playerInfoStateObj('Player 2', 'gt100'));

      } else if ((this.state.p2Score + rndNum) === 100) {
        alert(`Congratulations Player 2 you rolled ${rndNum} and landed on 100. You've Won!!!`);

        this.setState(playerInfoStateObj(null, 'playerHasWon'));
      } else if (ladderKeys.includes(p2SandlCheck)) {
        this.setState(playerInfoStateObj('Player 2', 'ladder'));
      } else if (snakesKeys.includes(p2SandlCheck)) {
        this.setState(playerInfoStateObj('Player 2', 'snake'));
      } else {
        this.setState({
          p2Score: this.state.p2Score + rndNum,
        });
      }
    }
  }

  render() {
    return (
      <div id="sandl-container">
        <Players
          rollDice={this.rollDice}
          diceInfo={this.state.rollDiceInfo}
          turnInfo={this.state.turnInfo}
          nextPlayerTurn={this.state.nextPlayerTurn}
        />
        <div id="board">
          <Board
            p1Score={this.state.p1Score}
            p2Score={this.state.p2Score}
            ladders={ladders}
            snakes={snakes}
            ladderKeys={ladderKeys}
            snakesKeys={snakesKeys}
          />
        </div>
      </div>
    );
  }
}

export default SnakesAndLadders;

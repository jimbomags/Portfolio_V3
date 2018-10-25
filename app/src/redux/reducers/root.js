import { combineReducers } from 'redux';
import navBar from './navBar';
import snakesAndLadders from './snakesAndLadders';
import weather from './weather';
import bookmark from './bookmark';
import randomQuote from './randomQuote';

const root = combineReducers({
  navBar,
  snakesAndLadders,
  weather,
  bookmark,
  randomQuote
});

export default root;

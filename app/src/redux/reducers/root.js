import { combineReducers } from 'redux';
import navBar from './navBar';
import snakesAndLadders from './snakesAndLadders';
import weather from './weather';
import bookmark from './bookmark';

const root = combineReducers({
  navBar,
  snakesAndLadders,
  weather,
  bookmark,
});

export default root;

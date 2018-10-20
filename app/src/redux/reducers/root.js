import { combineReducers } from 'redux';
import navBar from './navBar';
import snakesAndLadders from './snakesAndLadders';
import weather from './weather';

const root = combineReducers({
  navBar,
  snakesAndLadders,
  weather,
});

export default root;

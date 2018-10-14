import { combineReducers } from 'redux';
import navBar from './navBar';
import snakesAndLadders from './snakesAndLadders';

const root = combineReducers({
  navBar,
  snakesAndLadders,
});

export default root;

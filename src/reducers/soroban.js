import { combineReducers } from 'redux';
import rods from './rods';
import beads from './beads';
import actionTypes from '../actions/actionTypes';

const total = (state = 0, action) => {
  return state;
  // TODO: calculate by summing rod values
}

export default combineReducers({
  total,
  rods,
  beads
});

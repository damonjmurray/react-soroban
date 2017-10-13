import { combineReducers } from 'redux';

const DEFAULT_RODS = [...Array(13).keys()].map((i) => ({ placeValue: Math.pow(10, i), value: 0 }));

const totalValue = (state = 0, action) => {
  if (action.type !== 'UPDATE TOTAL') { return state; }
  // TODO: calculate from rods
  return action.value;
}

const rods = (state = [], action) => {
  // TODO:
  return DEFAULT_RODS;
}

export default combineReducers({
  totalValue,
  rods
});

import { combineReducers } from 'redux';

const DEFAULT_RODS = [...Array(13).keys()].map((i) => (
  { rodIndex: i, placeValue: Math.pow(10, i), total: 0 }
));

const rods = (state = DEFAULT_RODS, action) => {
  return state;
  // TODO: update state per action
  //if (action.type !== actionTypes.ROD_UPDATED) { return state; }
  //return state.map(rod => (rod.placeValue == action.rod.placeValue) ? action.rod : rod);
}

export default rods;

// selectors
export const getCurrentRod = (state, rodIndex) => {
  return state.soroban.rods[rodIndex];
}

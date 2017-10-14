import { combineReducers } from 'redux';

const DEFAULT_RODS = [...Array(13).keys()].map((i) => {
  return {
    placeValue: Math.pow(10, i),
    value: 0,
    beads: [
      { value: 5, active: false },
      { value: 1, active: false },
      { value: 2, active: false },
      { value: 3, active: false },
      { value: 4, active: false }
    ]
  }
});

const rods = (state = DEFAULT_RODS, action) => {
  if (action.type !== 'UPDATE ROD') { return state; }
  return state.map(rod => (rod.placeValue == action.rod.placeValue) ? action.rod : rod);
}

export default combineReducers({
  rods
});


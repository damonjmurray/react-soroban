import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';

const BEAD_SET = [
  { beadIndex: 0, value: 5, active: false },
  { beadIndex: 1, value: 1, active: false },
  { beadIndex: 2, value: 2, active: false },
  { beadIndex: 3, value: 3, active: false },
  { beadIndex: 4, value: 4, active: false }
];

const DEFAULT_BEADS = [...Array(13).keys()].map((rodIndex) =>
  BEAD_SET.map((bead) => Object.assign({}, bead, { rodIndex }))
).reduce((a, b) => a.concat(b));

const toggleBead = (state, bead) => {
  const beadIndex = state.indexOf(bead);
  return state.slice(0, beadIndex)
    .concat([Object.assign({}, bead, { active: !bead.active })])
    .concat(state.slice(beadIndex+1, state.length))
}

// reducer
export default (state = DEFAULT_BEADS, action) => {
  switch (action.type) {
    case actionTypes.BEAD_TOGGLED:
      return toggleBead(state, action.bead);
    default:
      return state;
  }
}

// selectors
export const getCurrentBead = (state, rodIndex, beadIndex) => {
  return state.find((bead) => bead.rodIndex == rodIndex && bead.beadIndex == beadIndex);
}

export const getCurrentBeads = (state, rodIndex) => {
  return state.filter((bead) => bead.rodIndex == rodIndex);
}

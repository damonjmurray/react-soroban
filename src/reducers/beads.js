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

const activateBead = (beads, { rodIndex, beadIndex }) => {
  const bead = getCurrentBead(beads, rodIndex, beadIndex);
  const idx = beads.indexOf(bead);
  return beads.slice(0, idx)
    .concat([Object.assign({}, bead, { active: true })])
    .concat(beads.slice(idx+1, beads.length+1));
}

const deactivateBead = (beads, { rodIndex, beadIndex }) => {
  const bead = getCurrentBead(beads, rodIndex, beadIndex);
  const idx = beads.indexOf(bead);
  return beads.slice(0, idx)
    .concat([Object.assign({}, bead, { active: false })])
    .concat(beads.slice(idx+1, beads.length+1));
}

const beads = (state = DEFAULT_BEADS, action) => {
  // TODO: update state per action
  switch (action.type) {
    case actionTypes.BEAD_ACTIVATED:
      return activateBead(state, action.bead);
    case actionTypes.BEAD_DEACTIVATED:
      return deactivateBead(state, action.bead);
    default:
      return state;
  }
  //if (action.type !== 'UPDATE BEAD') { return state; }
  //return state.map(bead => (bead.value == action.bead.value) ? action.bead : bead);
  return state;
}

export default beads;

// selectors
export const getCurrentBead = (beadState, rodIndex, beadIndex) => {
  return beadState.find((bead) => bead.rodIndex == rodIndex && bead.beadIndex == beadIndex);
}

export const getCurrentBeads = (state, rodIndex) => {
  return state.soroban.beads.filter((bead) => bead.rodIndex == rodIndex);
}

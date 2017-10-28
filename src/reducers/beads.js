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

const isHeavenBead = (bead) => bead.value === 5;

/**
 * `getBeadWithLesserRodBeads()` returns an array including the bead together
 * with any other beads of lesser value in the same rod. Note that the heaven
 * bead should always move independently of the other beads.
 */
const getBeadWithLesserRodBeads = (state, bead) => {
  if (isHeavenBead(bead)) { return [bead] };
  return getCurrentBeads(state, bead.rodIndex).filter((b) => b.value <= bead.value);
}

/**
 * `getBeadWithGreaterRodBeads()` returns an array including the bead together
 * with any other beads of greater value that are currently active in the same
 * rod. Again, the heaven bead always moves independently of the other beads.
 */
const getBeadWithHigherRodBeads = (state, bead) => {
  if (isHeavenBead(bead)) { return [bead] };
  return getCurrentBeads(state, bead.rodIndex)
    .filter((b) => b.active === true && b.value >= bead.value && !isHeavenBead(b));
}

/**
 * `cascadeActivate()` ensures that whenever a bead is activated, any beads of
 * lesser values are also moved (i.e. activated) together with it. An exception
 * to this is the heaven bead (i.e. where value = 5), which should always move
 * independently of the other beads in the rod.
 */
const cascadeActivate = (state, bead) => {
  const targetBeads = getBeadWithLesserRodBeads(state, bead);
  const startIndex = state.indexOf(targetBeads[0]);
  const endIndex = state.indexOf(targetBeads[targetBeads.length - 1]);

  return state.slice(0, startIndex)
    .concat(targetBeads.map((b) => Object.assign({}, b, { active: true })))
    .concat(state.slice(endIndex + 1, state.length))
}

/**
 * `cascadeDeactivate()` ensures that whenever a bead is deactivated, any beads
 * of greater value in the rod (not including the heaven bead, which should
 * move independently) are also deactivated together with it. For example, a
 * downstroke on a 2-bead will also move the 3 and 4-beads if they are active.
 */
const cascadeDeactivate = (state, bead) => {
  const targetIndexes = getBeadWithHigherRodBeads(state, bead).map((b) => b.beadIndex);

  return state.map((b) => {
    if (b.rodIndex === bead.rodIndex && targetIndexes.indexOf(b.beadIndex) != -1) {
      return Object.assign({}, b, { active: false });
    } else {
      return b;
    }
  });
}

// reducer
export default (state = DEFAULT_BEADS, action) => {
  switch (action.type) {
    case actionTypes.BEAD_TOGGLED:
      return action.bead.active ? cascadeDeactivate(state, action.bead) : cascadeActivate(state, action.bead);
    default:
      return state;
  }
}

// selectors
export const getCurrentBead = (state, rodIndex, beadIndex) => {
  return state.find((bead) => bead.rodIndex === rodIndex && bead.beadIndex === beadIndex);
}

export const getCurrentBeads = (state, rodIndex) => {
  return state.filter((bead) => bead.rodIndex === rodIndex);
}

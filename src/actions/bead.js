import actionTypes from './actionTypes';

const beadToggled = (bead) => (
  { type: actionTypes.BEAD_TOGGLED, bead }
)

export { beadToggled };

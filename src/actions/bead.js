import actionTypes from './actionTypes';

const beadToggled = (bead) => {
  return { type: actionTypes.BEAD_TOGGLED, bead };
}

export default { beadToggled };

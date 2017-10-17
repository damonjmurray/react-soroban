import actionTypes from './actionTypes';

const beadActivated = (bead) => {
  return { type: actionTypes.BEAD_ACTIVATED, bead };
}

const beadDeactivated = (bead) => {
  return { type: actionTypes.BEAD_DEACTIVATED, bead };
}

export default {
  beadActivated,
  beadDeactivated
};

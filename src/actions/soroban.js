import actionTypes from './actionTypes';

const rodUpdated = (rod) => {
  return { type: actionTypes.ROD_UPDATED, rod };
}

const reset = () => {
  return { type: actionTypes.RESET };
}

export {
  rodUpdated,
  reset
};

const actionTypes = {
  ROD_UPDATED: 'ROD_UPDATED',
  RESET: 'RESET'
}

const rodUpdated = (rod) => {
  return { type: actionTypes.ROD_UPDATED, rod };
}

const reset = () => {
  return { type: actionTypes.RESET };
}

export {
  actionTypes,
  rodUpdated,
  reset
};

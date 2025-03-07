export const INCREMENT = 'INCREMENT';
export const RESET = 'RESET';
export const SET_COUNTER_RANGE = 'SET_COUNTER_RANGE';

export const incrementCount = () => ({
  type: INCREMENT,
});

export const resetCount = () => ({
  type: RESET,
});

export const setCounterRange = (range) => ({
  type: SET_COUNTER_RANGE,
  payload: range,
});

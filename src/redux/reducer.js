// import { INCREMENT, RESET, SET_COUNTER_RANGE } from './actions';
import { INCREMENT,RESET,SET_COUNTER_RANGE } from "./action";
const initialState = {
  count: 0,
  counterRange: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state.count < state.counterRange
        ? { ...state, count: state.count + 1 }
        : state;
    case RESET:
      return { ...state, count: 0 };
    case SET_COUNTER_RANGE:
      return { ...state, counterRange: action.payload };
    default:
      return state;
  }
};

export default reducer;

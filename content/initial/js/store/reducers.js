import * as Actions from "./actions";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case Actions.INCREMENT:
      return { ...state, num: stat.num++ };
    case Actions.DECREMENT:
      return { ...state, num: stat.num-- };
    default:
      return state;
  }
};

export default reducer;

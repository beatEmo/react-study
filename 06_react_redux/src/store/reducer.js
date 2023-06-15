import * as actionTypes from "./constants";

const initState = {
  counter: 10
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      console.log(state, action);
      return { ...state, counter: state.counter + action.num };
    case actionTypes.SUB_NUMBER:
      return { ...state, counter: state.counter + action.num };
    default:
      return state;
  }
}

export default reducer;

import * as actionTypes from "./constants";

const initState = {
  counter: 10,
  banners: [],
  recommends: []
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      console.log(state, action);
      return { ...state, counter: state.counter + action.num };
    case actionTypes.SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case actionTypes.CHNAGE_BANNERS:
      return { ...state, banners: action.banners };
    case actionTypes.CHNAGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default reducer;

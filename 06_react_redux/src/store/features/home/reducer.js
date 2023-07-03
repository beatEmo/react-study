import * as actionTypes from "./constants";

const initState = {
  banners: [],
  recommends: []
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHNAGE_BANNERS:
      return { ...state, banners: action.banners };
    case actionTypes.CHNAGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default reducer;

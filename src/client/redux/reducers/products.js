import * as actionTypes from "../actionTypes";

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

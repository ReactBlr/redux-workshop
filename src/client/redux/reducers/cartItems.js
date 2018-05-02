import * as actionTypes from "../actionTypes";

export default function cartItemsReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_CART_ITEMS_SUCCESS:
      return [...state, ...action.payload];

    case actionTypes.ADD_ITEMS_TO_CART_SUCCESS:
      return [...state, action.payload];

    default:
      return state;
  }
}

import * as actionTypes from "../actionTypes";

const initialState = {
  byId: {},
  ids: [],
  isLoading: false,
  isError: false,
  errorMsg: ""
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CART_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };

    case actionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload
      };

    default:
      return state;
  }
}

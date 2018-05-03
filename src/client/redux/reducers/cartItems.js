import * as actionTypes from "../actionTypes";

const initialState = {
  byId: {},
  ids: [],
  isLoading: false,
  isError: false,
  errorMsg: ""
};

export default function cartItemsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ITEMS_TO_CART_REQUEST:
    case actionTypes.GET_CART_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };

    case actionTypes.ADD_ITEMS_TO_CART_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload
        },
        ids: [...state.ids, action.payload.id],
        isLoading: false
      };

    default:
      return state;
  }
}

import * as actionTypes from "../actionTypes";
import { handle } from "redux-pack";

const initialState = {
  byId: {},
  ids: [],
  isLoading: false,
  isError: false,
  errorMsg: ""
};

export default function cartItemsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CART_ITEMS:
      return handle(state, action, {
        start: s => ({ ...s, isLoading: true }),
        success: s => ({
          ...s,
          ...action.payload,
          isLoading: false
        }),
        failure: s => ({
          ...s,
          isLoading: false,
          isError: true,
          errorMsg: action.payload
        })
      });

    case actionTypes.ADD_ITEMS_TO_CART:
      return handle(state, action, {
        start: s => ({ ...s, isLoading: true }),
        success: s => ({
          ...s,
          byId: {
            ...state.byId,
            [action.payload.id]: action.payload
          },
          ids: [...state.ids, action.payload.id],
          isLoading: false
        }),
        failure: s => ({
          ...s,
          isLoading: false,
          isError: true,
          errorMsg: action.payload
        })
      });

    default:
      return state;
  }
}

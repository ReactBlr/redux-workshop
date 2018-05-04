import * as actionTypes from "../actionTypes";
import merge from "lodash/merge";

const initialState = {
  byId: {},
  ids: [],
  isLoading: false,
  isError: false,
  errorMsg: ""
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        byId: {},
        ids: [],
        isLoading: true
      };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        byId: merge({}, state.byId, action.payload.byId),
        ids: [...state.ids, action.payload.ids],
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

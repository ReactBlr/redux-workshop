import * as actionTypes from "../actionTypes";
import { handle } from "redux-pack";
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
    case actionTypes.GET_PRODUCTS:
      return handle(state, action, {
        start: s => ({
          ...s,
          byId: {},
          ids: [],
          isLoading: true
        }),
        success: s => ({
          ...s,
          byId: merge({}, s.byId, action.payload && action.payload.byId),
          ids: [...s.ids, ...(action.payload ? action.payload.ids : [])],
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

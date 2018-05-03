import * as actionTypes from "../actionTypes";
import { handle } from "redux-pack";

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
          isLoading: true
        }),
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

    default:
      return state;
  }
}

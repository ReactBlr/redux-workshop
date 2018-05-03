import * as actionTypes from "../actionTypes";

export const getProducts = productId => {
  return dispatch => {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    const apiUrl = productId ? `/api/products/${productId}` : "/api/products";
    console.log(apiUrl);
    return fetch(apiUrl).then(async response => {
      const responseData = await response.json();
      if (response.ok) {
        dispatch({
          type: actionTypes.GET_PRODUCTS_SUCCESS,
          payload: responseData
        });
      } else {
        dispatch({
          type: actionTypes.GET_PRODUCTS_FAILURE,
          payload: "Cannot Fetch Products"
        });
      }
    });
  };
};

export const getCartItems = () => {
  return dispatch => {
    dispatch({ type: actionTypes.GET_CART_ITEMS_REQUEST });
    return fetch("/api/cart-items").then(async response => {
      const responseData = await response.json();
      if (response.ok) {
        dispatch({
          type: actionTypes.GET_CART_ITEMS_SUCCESS,
          payload: responseData
        });
      } else {
        dispatch({
          type: actionTypes.GET_CART_ITEMS_FAILURE,
          payload: "Cannot Fetch Products"
        });
      }
    });
  };
};

export const addItemsToCart = product => {
  const data = {
    productId: product.id
  };
  return dispatch => {
    dispatch({ type: actionTypes.ADD_ITEMS_TO_CART_REQUEST });
    return fetch("/api/cart-items", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async response => {
      const responseData = await response.json();
      if (response.ok) {
        dispatch({
          type: actionTypes.ADD_ITEMS_TO_CART_SUCCESS,
          payload: responseData
        });
      } else {
        dispatch({
          type: actionTypes.ADD_ITEMS_TO_CART_FAILURE,
          payload: "Cannot add Products"
        });
      }
    });
  };
};

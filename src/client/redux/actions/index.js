import * as actionTypes from "../actionTypes";
import { transformProductsApi } from "../transformers/transformProductsApi";
import { transformGetCartItemsApi } from "../transformers/transformGetCartItemsApi";

export const getProducts = productId => {
  return dispatch => {
    const apiUrl = productId ? `/api/products/${productId}` : "/api/products";
    return dispatch({
      type: actionTypes.GET_PRODUCTS,
      promise: fetch(apiUrl).then(async response => {
        const responseData = await response.json();
        if (response.ok) {
          return transformProductsApi(responseData);
        } else {
          Promise.reject("Something went wrong");
        }
      })
    });
  };
};

export const getCartItems = () => {
  return dispatch => {
    return dispatch({
      type: actionTypes.GET_CART_ITEMS,
      promise: fetch("/api/cart-items").then(async response => {
        const responseData = await response.json();
        if (response.ok) {
          return transformGetCartItemsApi(responseData);
        } else {
          Promise.reject("Something went wrong");
        }
      })
    });
  };
};

export const addItemsToCart = product => {
  const data = {
    productId: product.id
  };
  return dispatch => {
    return dispatch({
      type: actionTypes.ADD_ITEMS_TO_CART,
      promise: fetch("/api/cart-items", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(async response => {
        const responseData = await response.json();
        if (response.ok) {
          return responseData;
        } else {
          return Promise.reject("Something went wrong");
        }
      })
    });
  };
};

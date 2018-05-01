export function fetchProducts() {
  return function(dispatch) {
    return fetch("/api/products").then(res =>
      res.json().then(products => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: products
        });
      })
    );
  };
}

export function fetchCartItems() {
  return function(dispatch) {
    return fetch("/api/cart-items").then(res =>
      res.json().then(cartItems => {
        dispatch({
          type: "SET_CART_ITEMS",
          payload: cartItems
        });
      })
    );
  };
}

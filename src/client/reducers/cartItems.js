export default function cartItemsReducer(state = [], action) {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return action.payload;
    default:
      return state;
  }
}

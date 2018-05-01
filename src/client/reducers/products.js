export default function productsReducer(state = [], action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
}

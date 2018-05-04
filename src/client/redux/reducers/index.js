import { combineReducers } from "redux";
import products from "./products";
import cartItems from "./cartItems";

export default combineReducers({
  products,
  cartItems
});

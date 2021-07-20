import { combineReducers } from "redux";
import itemData from "./itemReducer";
import cartData from "./cartReducer";
import productData from "./productReducer";

const rootReducer = combineReducers({
  itemData,
  cartData,
  productData
});

export default rootReducer;
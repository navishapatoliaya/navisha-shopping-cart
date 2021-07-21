import * as types from "../lib/constants";
import initialState from "./intialState";

const cartReducer = (state = initialState.cartData, action) => {
  switch (action.type) {
    // Get Add Cart
    case types.ADD_TO_CART_ITEM_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.ADD_TO_CART_ITEM_SUCCEEDED:
      return {
        ...state,
        carts: action.payload.carts,
        cartCount: action.payload.count,
        isLoading: false
      };
    case types.ADD_TO_CART_ITEM_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Get Remove to Cart
    case types.REMOVE_TO_CART_ITEM_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.REMOVE_TO_CART_ITEM_SUCCEEDED:
      return {
        ...state,
        carts: action.payload.data,
        cartCount: action.payload.count,
        isLoading: false
      };
    case types.REMOVE_TO_CART_ITEM_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default cartReducer;
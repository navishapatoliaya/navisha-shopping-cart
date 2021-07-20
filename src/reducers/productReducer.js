import * as types from "../lib/constants";
import initialState from "./initialState";

const productReducer = (state = initialState.produdctData, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_TYPE_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_PRODUCT_TYPE_SUCCEEDED:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };
    case types.GET_PRODUCT_TYPE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
import * as types from "../lib/constants";
import { productType } from "../mock";

// Get Items
const getProductTypeStarted = () => ({
  type: types.GET_PRODUCT_TYPE_STARTED
});

const getProductTypeSucceeded = data => ({
  type: types.GET_PRODUCT_TYPE_SUCCEEDED,
  payload: data
});

const getProductTypeFailed = error => ({
  type: types.GET_PRODUCT_TYPE_FAILED,
  payload: error,
  error: true
});

export const getProductType = () => {
  return dispatch => {
    // Used for Start Fetching Data
    dispatch(getProductTypeStarted());

    // Used when get Success Response
    dispatch(getProductTypeSucceeded(productType));

    // Used when get error
    dispatch(getProductTypeFailed("error.response"));
  };
};

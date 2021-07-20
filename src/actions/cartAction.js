import * as types from "../lib/constants";

// AddToCart
const addToCartStarted = () => ({
  type: types.ADD_TO_CART_ITEM_STARTED
});

const addToCartSucceeded = data => ({
  type: types.ADD_TO_CART_ITEM_SUCCEEDED,
  payload: data
});

const addToCartFailed = error => ({
  type: types.ADD_TO_CART_ITEM_FAILED,
  payload: error,
  error: true
});

export const addToCart = payload => {
  return dispatch => {
    // Used for Start Fetching Data
    dispatch(addToCartStarted());

    // Used when get Success Response
    dispatch(addToCartSucceeded(payload));

    // Used when get error
    dispatch(addToCartFailed("error.response"));
  };
};

// RemoveToCart
const removeToCartStarted = () => ({
  type: types.ADD_TO_CART_ITEM_STARTED
});

const removeToCartSucceeded = data => ({
  type: types.ADD_TO_CART_ITEM_SUCCEEDED,
  payload: data
});

const removeToCartFailed = error => ({
  type: types.ADD_TO_CART_ITEM_FAILED,
  payload: error,
  error: true
});

export const removeToCart = paylod => {
  return dispatch => {
    // Used for Start Fetching Data
    dispatch(removeToCartStarted());

    // Used when get Success Response
    dispatch(removeToCartSucceeded(paylod));

    // Used when get error
    dispatch(removeToCartFailed("error.response"));
  };
};
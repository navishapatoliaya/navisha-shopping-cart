import * as types from "../lib/constants";
import { products } from "../mock";

// Get Items
const getItemsStarted = () => ({
  type: types.GET_ITEMS_STARTED
});

const getItemsSucceeded = data => ({
  type: types.GET_ITEMS_SUCCEEDED,
  payload: data
});

const getItemsFailed = error => ({
  type: types.GET_ITEMS_FAILED,
  payload: error,
  error: true
});

export const getItems = payload => {
  const productsData = payload ? payload : products;
  return dispatch => {
    // Used for Start Fetching Data
    dispatch(getItemsStarted());

    // Used when get Success Response
    dispatch(getItemsSucceeded(productsData));

    // Used when get error
    dispatch(getItemsFailed("error.response"));
  };
};

// Get Item Detail
const getItemDetailStarted = () => ({
  type: types.GET_ITEM_DETAIL_STARTED
});

const getItemDetailSucceeded = data => ({
  type: types.GET_ITEM_DETAIL_SUCCEEDED,
  payload: data
});

const getItemDetailFailed = error => ({
  type: types.GET_ITEM_DETAIL_FAILED,
  payload: error,
  error: true
});

export const getItemDetail = id => {
  return dispatch => {
    // Used for Start Fetching Data
    dispatch(getItemDetailStarted());

    const productDetails =
      products[products.findIndex(p => p.id === parseInt(id))];
    // Used when get Success Response)
    dispatch(getItemDetailSucceeded(productDetails));

    // Used when get error
    dispatch(getItemDetailFailed("error.response"));
  };
};

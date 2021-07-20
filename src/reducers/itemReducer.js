import * as types from "../lib/constants";
import initialState from "./initialState";

const itemReducer = (state = initialState.itemData, action) => {
  switch (action.type) {
    case types.GET_ITEMS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ITEMS_SUCCEEDED:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case types.GET_ITEMS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Get Item Details
    case types.GET_ITEM_DETAIL_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ITEM_DETAIL_SUCCEEDED:
      return {
        ...state,
        item: action.payload,
        isLoading: false
      };
    case types.GET_ITEM_DETAIL_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default itemReducer;
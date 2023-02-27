import {
  ADD_TO_CART,
  CART_PRODUCT_DECREMENT,
  CART_PRODUCT_INCREMENT,
  DELETE_TO_CART,
  FIRST_ADD_TO_CART,
} from "./actionType";

export const firstAddToCart = (productData) => {
  return {
    type: FIRST_ADD_TO_CART,
    payload: productData,
  };
};

export const addToCart = (productData) => {
  return {
    type: ADD_TO_CART,
    payload: productData,
  };
};

export const deleteToCart = (productId) => {
  return {
    type: DELETE_TO_CART,
    payload: productId,
  };
};

export const cartProductIncrement = (productId, value) => {
  return {
    type: CART_PRODUCT_INCREMENT,
    payload: {
      productId,
      value,
    },
  };
};

export const cartProductDecrement = (productId, value) => {
  return {
    type: CART_PRODUCT_DECREMENT,
    payload: {
      productId,
      value,
    },
  };
};

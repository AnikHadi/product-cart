import {
  ADD_CART_TO_INCREASE_QUANTITY,
  ADD_CART_TO_REDUCE_QUANTITY,
  ADD_PRODUCT,
  REMOVE_BTN_QUANTITY_MAINTAIN,
} from "./actionType";

export const addProduct = (productData) => {
  return {
    type: ADD_PRODUCT,
    payload: productData,
  };
};

export const addCartToReduceQuantity = (productId, quantity) => {
  return {
    type: ADD_CART_TO_REDUCE_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};

export const addCartToIncreaseQuantity = (productId) => {
  return {
    type: ADD_CART_TO_INCREASE_QUANTITY,
    payload: productId,
  };
};

export const removeBtnQuantityMaintain = (productIdRemoveBtn, quantity) => {
  return {
    type: REMOVE_BTN_QUANTITY_MAINTAIN,
    payload: {
      productIdRemoveBtn,
      quantity,
    },
  };
};

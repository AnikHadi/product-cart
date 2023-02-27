import {
  ADD_CART_TO_INCREASE_QUANTITY,
  ADD_CART_TO_REDUCE_QUANTITY,
  ADD_PRODUCT,
  REMOVE_BTN_QUANTITY_MAINTAIN,
} from "./actionType";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: Date.now(),
          productName: action.payload.productName,
          category: action.payload.category,
          imgUrl: action.payload.imgUrl,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];
    case ADD_CART_TO_REDUCE_QUANTITY:
      const { productId } = action.payload;
      return state.map((obj) =>
        obj.id === productId ? { ...obj, quantity: obj.quantity - 1 } : obj
      );

    case ADD_CART_TO_INCREASE_QUANTITY:
      const { payload } = action;
      return state.map((obj) =>
        obj.id === payload ? { ...obj, quantity: obj.quantity + 1 } : obj
      );

    case REMOVE_BTN_QUANTITY_MAINTAIN:
      const { productIdRemoveBtn, quantity } = action.payload;
      return state.map((obj) =>
        obj.id === productIdRemoveBtn
          ? { ...obj, quantity: obj.quantity + quantity }
          : obj
      );

    default:
      return state;
  }
};

export default productReducer;

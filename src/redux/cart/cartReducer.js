import {
  ADD_TO_CART,
  CART_PRODUCT_DECREMENT,
  CART_PRODUCT_INCREMENT,
  DELETE_TO_CART,
  FIRST_ADD_TO_CART,
} from "./actionType";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_ADD_TO_CART:
      return [
        ...state,
        {
          id: action.payload.id,
          productName: action.payload.productName,
          category: action.payload.category,
          imgUrl: action.payload.imgUrl,
          productPrice: action.payload.price,
          quantity: 1,
          totalProductPrice: action.payload.price,
        },
      ];
    case ADD_TO_CART:
      const { id } = action.payload;
      return state.map((obj) =>
        obj.id === id
          ? {
              ...obj,
              quantity: obj.quantity + 1,
              totalProductPrice: Number(
                (obj.productPrice + obj.productPrice * obj.quantity).toFixed(2)
              ),
            }
          : obj
      );

    case DELETE_TO_CART:
      return state.filter((cart) => cart.id !== action.payload);
    case CART_PRODUCT_INCREMENT:
      return state.map((cart) => {
        if (cart.id !== action.payload.productId) {
          return cart;
        } else {
          return {
            ...cart,
            quantity: cart.quantity + 1,
            totalProductPrice: Number(
              (cart.productPrice + cart.productPrice * cart.quantity).toFixed(2)
            ),
          };
        }
      });
    case CART_PRODUCT_DECREMENT:
      return state.map((cart) => {
        if (cart.quantity > 0) {
          if (cart.id !== action.payload.productId) {
            return cart;
          } else {
            return {
              ...cart,
              quantity: cart.quantity - 1,
              totalProductPrice: Number(
                Math.abs(
                  cart.productPrice - cart.productPrice * cart.quantity
                ).toFixed(2)
              ),
            };
          }
        } else {
          return {
            ...cart,
            quantity: 0,
            totalProductPrice: 0,
          };
        }
      });

    default:
      return state;
  }
};

export default cartReducer;

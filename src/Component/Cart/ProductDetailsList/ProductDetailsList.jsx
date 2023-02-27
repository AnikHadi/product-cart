import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartProductDecrement,
  cartProductIncrement,
  deleteToCart,
} from "../../../redux/cart/action";
import {
  addCartToIncreaseQuantity,
  addCartToReduceQuantity,
  removeBtnQuantityMaintain,
} from "../../../redux/product/action";

const ProductDetailsList = ({ cart }) => {
  const {
    id,
    productName,
    imgUrl,
    category,
    productPrice,
    quantity,
    totalProductPrice,
  } = cart;
  const { products, carts } = useSelector((state) => state);
  const ownProductQuantity = products.filter((pd) => pd.id === id)[0].quantity;
  const ownCartQuantity = carts.filter((cart) => cart.id === id)[0].quantity;
  const dispatch = useDispatch();
  //   https://i.dummyjson.com/data/products/40/thumbnail.jpg
  const incrementHandler = (id, price) => {
    if (ownProductQuantity > 0) {
      dispatch(cartProductIncrement(id, price));
      dispatch(addCartToReduceQuantity(id));
    } else {
      alert("Stock out this product!");
    }
  };
  const decrementHandler = (id, price) => {
    if (ownCartQuantity > 0) {
      dispatch(cartProductDecrement(id, price));
      dispatch(addCartToIncreaseQuantity(id));
    }
    if (ownCartQuantity === 1) {
      dispatch(deleteToCart(id));
    }
  };
  const deleteBtnHandler = (id) => {
    dispatch(deleteToCart(id));
    dispatch(removeBtnQuantityMaintain(id, ownCartQuantity));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={imgUrl} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{productName}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{productPrice}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => incrementHandler(id, productPrice)}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => decrementHandler(id, productPrice)}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{totalProductPrice}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => deleteBtnHandler(id)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsList;

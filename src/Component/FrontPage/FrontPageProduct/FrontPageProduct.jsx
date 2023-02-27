import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, firstAddToCart } from "../../../redux/cart/action";
import { addCartToReduceQuantity } from "../../../redux/product/action";

const FrontPageProduct = ({ product }) => {
  const carts = useSelector((state) => state.carts);
  const products = useSelector((state) => state.products);
  const { id, productName, imgUrl, category, price, quantity } = product;
  const ownProductQuantity = products.filter((pd) => pd.id === id)[0].quantity;
  const ownCartQuantity = carts.filter((pd) => pd.id === id)[0]?.quantity;

  const dispatch = useDispatch();

  const addCartHandler = () => {
    const newCart = { id, productName, imgUrl, category, price };
    if (ownCartQuantity === undefined) {
      const perProductQuantity =
        carts.filter((obj) => obj.id === id)[0]?.quantity + 1;
      dispatch(firstAddToCart(newCart));
      dispatch(addCartToReduceQuantity(id, perProductQuantity));
    } else if (ownCartQuantity > 0) {
      const perProductQuantity =
        carts.filter((obj) => obj.id === id)[0]?.quantity + 1;
      dispatch(addToCart(newCart));
      dispatch(addCartToReduceQuantity(id, perProductQuantity));
    }
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imgUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          onClick={addCartHandler}
          className={`lws-btnAddToCart ${
            ownProductQuantity === 0 && "disabled"
          }`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FrontPageProduct;

// "disabled"

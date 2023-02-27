import React from "react";
import { useSelector } from "react-redux";
import CartPriceCalculate from "../CartPriceCalculate/CartPriceCalculate";
import ProductDetailsList from "../ProductDetailsList/ProductDetailsList";

const ProductsDetails = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {carts.map((cart) => (
              <ProductDetailsList cart={cart} key={cart.id} />
            ))}
          </div>

          {/*  cart price  */}
          <CartPriceCalculate />
        </div>
      </div>
    </main>
  );
};

export default ProductsDetails;

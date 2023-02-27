import React from "react";
import { useSelector } from "react-redux";
import FrontPageInputForm from "../FrontPageInputForm/FrontPageInputForm";
import FrontPageProduct from "../FrontPageProduct/FrontPageProduct";

const FrontPageShop = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <main className="py-16 container">
        <div className="productWrapper">
          {/* <!-- products container --> */}
          <div className="productContainer" id="lws-productContainer">
            {products.length === 0 && (
              <h2 className="no-product-found">No product found</h2>
            )}
            {products.map((pd) => (
              <FrontPageProduct product={pd} key={pd.id} />
            ))}
          </div>

          <FrontPageInputForm />
        </div>
      </main>
    </div>
  );
};

export default FrontPageShop;

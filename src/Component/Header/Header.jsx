import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const carts = useSelector((state) => state.carts);
  const totalCartProduct = carts.reduce(
    (total, cart) => total + cart.quantity,
    0
  );
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <Link to="/">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </Link>

        <div className="flex gap-4">
          <Link to="/home" className="navHome" id="lws-home">
            {" "}
            Home{" "}
          </Link>
          <Link
            to="/details"
            // href="cart.html"
            className="navCart "
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalCartProduct}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

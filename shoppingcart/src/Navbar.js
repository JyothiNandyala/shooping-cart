import React from "react";
import { useCart } from "react-use-cart";
const Navbar = () => {
  const { totalUniqueItems } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info ">
      <div className="container">
        <a className="navbar-brand text-danger" href="#">
          Shopping
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a
              className="nav-link active h5 text-danger"
              aria-current="page"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active h5 text-danger"
              aria-current="page"
              href="/products"
            >
              Products
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active h5 text-danger"
              aria-current="page"
              href="/cart"
            >
              Cart({totalUniqueItems})
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

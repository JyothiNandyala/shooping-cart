import React from "react";
import { useCart } from "react-use-cart";
const Navbar = () => {
  const { totalUniqueItems } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <a className="navbar-brand" href="#">
          Shopping
        </a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      ></div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active h5" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active h5"
              aria-current="page"
              href="/products"
            >
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active h5" aria-current="page" href="/cart">
              Cart({totalUniqueItems})
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import Home from "./Home";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </CartProvider>
      </Router>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// Actions

import { fetchProducts } from "./actions/products";
const App = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState({});
  // fetch products created on ecommerce api
  // const fetchProducts = async () => {
  //   //  we get response instead of data but we later destructure it into data
  //   const { data } = await commerce.products.list();
  //   setProducts(data);
  // };
  // fetch cart from ecommerce api
  // const fetchCart = async () => {
  //   const cart = await commerce.cart.retrieve();
  //   setCart(cart);
  // };

  
  // // destructred response into cart
  // const handleUpdateCart = async (productId, quantity) => {
  //   const { cart } = await commerce.cart.update(productId, { quantity });
  //   setCart(cart);
  // };

  // const handleRemoveCart = async (productId) => {
  //   const { cart } = await commerce.cart.remove(productId);
  //   setCart(cart);
  // };

  // const handleEmptyCart = async () => {
  //   const response = await commerce.cart.empty();
  //   setCart(response);
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navbar />
        {/* totalItems={cart.total_items} */}
        <Switch>
          <Route exact path="/">
            <Products products={products} />
            {/* onAddToCart={handleAddToCart} */}
          </Route>
          <Route exact path="/cart">
            <Cart />
            {/* cart={cart}
            handleUpdateCart={handleUpdateCart}
            handleEmptyCart={handleEmptyCart}
            handleRemoveCart={handleRemoveCart} */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

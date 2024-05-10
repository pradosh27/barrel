import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Header from "./pages/Header";
import Cart from "./components/cart";

function App() {
  const [show, setShow] = useState([]);
  const [cart, setCart] = useState([]);

  const handleClick = (data) => {
    if (cart.indexOf(data) !== -1) return;
    setCart([...cart, data]);
  };

  const handleChange = (data, a) => {
    const ind = cart.indexOf(data);
    const arr = cart;
    arr[ind].amount += a;

    if (arr[ind].amount === 0) arr[ind].amount += 1;
    setCart([...arr]);
  };

  useEffect(() => {
    console.log("Cart changed");
  }, [cart]);
  const addCart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      alert("This Product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("product is added to cart");
    }
  };

  return (
    <Router>
      <Header setShow={setShow} size={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            show ? (
              <Home handleClick={handleClick} addCart = {addCart}/>
            ) : (
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )
          }
          
        />
      </Routes>
    </Router>
  );
}

export default App;

/* global fetchAPI */

import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { useReducer } from "react";

import ConfirmedBooking from "./ConfirmedBooking";
import { submitAPI, fetchAPI } from "./api";
import About from "./About";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import Cart from "./Cart";

export function initializeTimes() {
  const today = new Date();

  return fetchAPI(today);
}


export function updateTimes(state, action) {
  const selectedDate = new Date(action);

  return fetchAPI(selectedDate);
}



function Main({ cart, setCart }) {
 const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
function submitForm(formData) {
  if (submitAPI(formData)) {
    navigate("/confirmed");
  }
}

const addToCart = (food) => {
  const existingItem = cart.find(item => item.name === food.name);

  if (existingItem) {
    setCart(
      cart.map(item =>
        item.name === food.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      {
        ...food,
        quantity: 1,
      },
    ]);
  }
};


  return (
    <main>
      <Routes>

        <Route 
          path="/" 
          element={<Homepage />} 
        />

        <Route
          path="/reservation"
          element={
           <BookingPage
  availableTimes={availableTimes}
  dispatch={dispatch}
  submitForm={submitForm}
/>
            
          }
        />
<Route
  path="/confirmed"
  element={<ConfirmedBooking />}
/>



<Route path="/about" element={<About />} />

<Route path="/Menu" element={<Menu />} />
<Route
  path="/order"
  element={
    <OrderOnline addToCart={addToCart} />
  }
/>
<Route path="/login" element={<Login />} />
<Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      setCart={setCart}
    />
  }
/>
      </Routes>




    </main>
  );
}

export default Main;
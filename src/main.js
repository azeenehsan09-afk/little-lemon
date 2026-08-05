/* global fetchAPI */

import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { useReducer } from "react";
import { fetchAPI } from "./api";
import ConfirmedBooking from "./ConfirmedBooking";
import { submitAPI } from "./api";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

export function initializeTimes() {
  const today = new Date();

  return fetchAPI(today);
}


export function updateTimes(state, action) {
  const selectedDate = new Date(action);

  return fetchAPI(selectedDate);
}



function Main() {
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
<Route path="/order" element={<OrderOnline />} />
<Route path="/login" element={<Login />} />
      </Routes>




    </main>
  );
}

export default Main;

import { useState } from "react";


function BookingForm({ availableTimes, dispatch, submitForm }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
const isFormValid =
  date !== "" &&
  time !== "" &&
  guests >= 1 &&
  guests <= 10 &&
  occasion !== "";

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion
    };

   submitForm(formData);
  }


  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="res-date">Choose Date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch(e.target.value);
        }}
        required
      />

      <label htmlFor="res-time">Choose Time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>


      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
       onChange={(e) => setGuests(Number(e.target.value))}
         required
      />


      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
         required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>


      <button
  type="submit"
  disabled={!isFormValid}
>
  Make Your Reservation
</button>
       

    </form>
  );
}

export default BookingForm;
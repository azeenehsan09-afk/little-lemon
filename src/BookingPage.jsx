import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm })  {
  return (
    <main className="booking-page">
      <h1 className="booking-heading">Reserve a Table</h1>
      <p className="booking-subheading">
    Book your table in just a few simple steps.
  </p>
    <BookingForm
  availableTimes={availableTimes}
  dispatch={dispatch}
    submitForm={submitForm}
/>
    </main>
  );
}

export default BookingPage;
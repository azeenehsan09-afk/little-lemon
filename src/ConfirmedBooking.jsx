function ConfirmedBooking() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-card">
        <div className="checkmark">✓</div>

        <h1>Booking Confirmed!</h1>

        <p>
          Thank you for choosing Little Lemon.
          Your table has been successfully reserved.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="home-btn"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}

export default ConfirmedBooking;
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./main";

const availableTimes = ["17:00", "18:00", "19:00"];

const dispatch = jest.fn();
const submitForm = jest.fn();

describe("BookingForm", () => {
  test("Renders Choose Date label", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  });

  test("Date input is required", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    expect(screen.getByLabelText(/choose date/i)).toBeRequired();
  });

  test("Time select is required", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    expect(screen.getByLabelText(/choose time/i)).toBeRequired();
  });

  test("Guests input has min and max values", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();
  });

  test("Occasion select is required", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    expect(screen.getByLabelText(/occasion/i)).toBeRequired();
  });

  test("Submit button is disabled initially", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    expect(
      screen.getByRole("button", {
        name: /make your reservation/i,
      })
    ).toBeDisabled();
  });

  test("Submit button becomes enabled when form is valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-08-05" },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });

    expect(
      screen.getByRole("button", {
        name: /make your reservation/i,
      })
    ).not.toBeDisabled();
  });

  test("Calls submitForm when form is submitted", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-08-05" },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /make your reservation/i,
      })
    );

    expect(submitForm).toHaveBeenCalledTimes(1);
  });
});

describe("Booking API", () => {
  test("initializeTimes returns a non-empty array", () => {
    const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  test("updateTimes returns available times for the selected date", () => {
    const state = [];
    const action = "2026-08-05";

    const result = updateTimes(state, action);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});
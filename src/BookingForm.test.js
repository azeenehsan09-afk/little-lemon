import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes } from "./main";
import { updateTimes } from "./main";

test("Renders Choose date label", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

  const labelElement = screen.getByLabelText("Choose Date");

  expect(labelElement).toBeInTheDocument();
});


test("initializeTimes returns the correct available times", () => {
  const initializeTimes = () => {
  const today = new Date();

  return fetchAPI(today);
};
  expect(initializeTimes()).toEqual(expectedTimes);
});




test("updateTimes returns the same state", () => {
  const state = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  expect(updateTimes(state, { type: "UPDATE_TIMES" })).toEqual(state);
});
import { screen, render } from "@testing-library/react";
// files
import App from "./App";
import Modal from "./components/Modal";

test("welcome screen is shown when the app first loads", () => {
  render(<App />);

  // action
  const titleElement = screen.queryByText(/welcome to eika shopping/i);

  // assert
  expect(titleElement).toBeInTheDocument();
});

test("the app should load on 'shopping screen' if more than 1 list item has been added to the list array", () => {});

test("Modal should open when isModal state is set to TRUE", () => {
  // arrange
  // action
  // assert
});

import { screen, render } from "@testing-library/react";
// files
import Modal from "./Modal";

test("Modal should open when isModal state is set to TRUE", () => {
  // arrange
  const mockFalseModalState = [true, () => {}];
  const listState = [[], () => {}];
  render(<Modal modalState={mockFalseModalState} listState={listState} />);
  // action
  const titleElement = screen.getByText(/add new item/i);
  // assert
  expect(titleElement).toBeInTheDocument();
});

test("Modal should close when isModal state is set to FALSE", () => {
  // arrange
  const mockFalseModalState = [false, () => {}];
  const listState = [[], () => {}];
  render(<Modal modalState={mockFalseModalState} listState={listState} />);
  // action
  const titleElement = screen.queryByText(/add new item/i);
  // assert
  expect(titleElement).not.toBeInTheDocument();
});

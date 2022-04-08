import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingScreen from "./ShoppingScreen";

test("show list items on screen if lists array is TRUE", () => {
  // arrange
  const listState = [
    [{ id: 0, name: "Sofa", price: 800, isCompleted: false }],
    () => {},
  ];
  const modalState = [[], () => {}];
  render(<ShoppingScreen listState={listState} modalState={modalState} />);

  // action
  const renderedItems = screen.queryByText("Sofa");

  // assert
  expect(renderedItems).toBeInTheDocument();
});

test("show no items message if items list is empty", () => {
  // arrange
  const listState = [[], () => {}];
  const modalState = [[], () => {}];
  render(<ShoppingScreen listState={listState} modalState={modalState} />);

  // action
  const noItemFoundMessage = screen.getByText(/no shopping items found/i);

  // assert
  expect(noItemFoundMessage).toBeInTheDocument();
});

test("click on show completed items toggles element to view pending items", () => {
  // arrange
  const listState = [[], () => {}];
  const modalState = [[], () => {}];
  render(<ShoppingScreen modalState={modalState} listState={listState} />);

  // action
  const showCompletedItems = screen.getByText(/show completed items/i);
  fireEvent.click(showCompletedItems);
  const showPendingItems = screen.getByText(/show pending items/i);

  // assert
  expect(showPendingItems).toBeInTheDocument();
});

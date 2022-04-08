import { screen, render } from "@testing-library/react";
// files
import App from "./App";

test("welcome screen is shown when the app first loads", () => {
  render(<App />);
  // action
  const titleElement = screen.queryByText(/welcome to eika shopping/i);
  // assert
  expect(titleElement).toBeInTheDocument();
});

test("the app should load on 'shopping screen' if more than 1 list item has been added to the list array", () => {
  // Arrange
  const mockItem = {
    id: 0,
    name: "Sofa",
    price: 300,
    isCompleted: false,
  };

  const mockList = [mockItem];
  const mockData = JSON.stringify(mockList);

  Storage.prototype.getItem = jest.fn(() => mockData);
  render(<App />);

  // Assert
  const titleElement = screen.queryByText(/this is your shopping list/i);

  // Act
  expect(titleElement).toBeInTheDocument();
});

test("Modal should open when isModal state is set to TRUE", () => {
  // arrange
  // action
  // assert
});

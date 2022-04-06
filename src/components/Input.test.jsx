// npm
import { render, screen } from "@testing-library/react";
// files
import Input from "./Input";

test("accepts correct settings and state props", () => {
  // arrange
  const settings = {
    label: "Input",
    placeholder: "Name",
    type: "text",
  };
  const state = ["Chair", () => {}];

  render(<Input settings={settings} state={state} />);
  // act
  const labelElement = screen.getByText(/input/i);

  // assert
  expect(labelElement).toBeInTheDocument();
});

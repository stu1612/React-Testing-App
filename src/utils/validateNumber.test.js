// files
import validateNumber from "./validateNumber";

test("should pass if positive number value is passed", () => {
  // arrange
  const testValidNumber = "300";
  const result = 300;
  const error = "";

  // action
  const validation = validateNumber(testValidNumber);

  // assert
  expect(validation.data).toBe(result);
  expect(validation.error).toBe(error);
});

test("should fail if no number value is passed", () => {
  // arrange
  const testEmptyValue = "0";
  const result = "";
  const error = "Input value must be greater than 0";

  // action
  const validation = validateNumber(testEmptyValue);

  // assert
  expect(validation.data).toBe(result);
  expect(validation.error).toBe(error);
});

test("should fail if negative number value is passed", () => {
  // arrange
  const testNegativeNumberValue = "-5";
  const result = "";
  const error = "Input value must be greater than 0";

  // action
  const validation = validateNumber(testNegativeNumberValue);

  // assert
  expect(validation.data).toBe(result);
  expect(validation.error).toBe(error);
});

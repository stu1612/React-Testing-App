// files
import validateString from "./validateString";

test("should pass is string value is greater than 2 characters", () => {
  // arrange
  const testValidString = "Chair";
  const result = "Chair";
  const error = "";

  // action
  const validation = validateString(testValidString);

  // assert
  expect(validation.data).toBe(result);
  expect(validation.error).toBe(error);
});

test("should fail if string is not more than 2 characters", () => {
  // arrange
  const testStringLengthOf2 = "Ch";
  const result = "";
  const error = "Input value requires more than 2 characters";

  // action
  const validation = validateString(testStringLengthOf2);

  // assert
  expect(validation.data).toBe(result);
  expect(validation.error).toBe(error);
});

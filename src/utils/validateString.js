export default function validateName(string) {
  const trimmedString = string.trim();
  const validatedString = trimmedString.length > 2;
  const data = validatedString ? trimmedString : "";
  const error = validatedString
    ? ""
    : "Input value requires more than 2 characters";

  return { data: data, error: error };
}

import { convertToRomanNumerals } from "roman-numerals.js";

describe("convertToRomanNumerals", () => {
  test("returns the number converted to Roman Numerals", () => {
    expect(convertToRomanNumerals()).toBe("V");
  });
});

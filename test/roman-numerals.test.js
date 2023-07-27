import { convertToRomanNumerals } from "../roman-numerals.js";

describe("convertToRomanNumerals", () => {
  test("returns the constant roman numbers converted to Roman Numerals", () => {
    expect(convertToRomanNumerals(1)).toBe("I");
    expect(convertToRomanNumerals(5)).toBe("V");
    expect(convertToRomanNumerals(10)).toBe("X");
    expect(convertToRomanNumerals(50)).toBe("L");
    expect(convertToRomanNumerals(100)).toBe("C");
    expect(convertToRomanNumerals(500)).toBe("D");
    expect(convertToRomanNumerals(1000)).toBe("M");
  });

  test("returns undefined for number 0 and more than 3000", () => {
    expect(convertToRomanNumerals(0)).toBe(undefined);
    expect(convertToRomanNumerals(3001)).toBe(undefined);
    expect(convertToRomanNumerals(4000)).toBe(undefined);
  });
});

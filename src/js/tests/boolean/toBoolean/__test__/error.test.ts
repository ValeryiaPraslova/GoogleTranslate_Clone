import { toBoolean } from "../toBoolean";

describe("toBoolean error case testing", () => {
  test(`toBoolean(null) should throw TypeError`, () => {
    expect(() => toBoolean(null)).toThrow(TypeError);
  });

  test(`toBoolean(undefined) should throw TypeError`, () => {
    expect(() => toBoolean(undefined)).toThrow(TypeError);
  });
});

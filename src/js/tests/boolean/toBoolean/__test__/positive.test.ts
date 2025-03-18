import { toBoolean } from "../toBoolean";

describe("toBoolean positive case testing", () => {
  test(`toBoolean(true) should return true`, () => {
    expect(toBoolean(true)).toEqual(true);
  });

  test(`toBoolean(false) should return false`, () => {
    expect(toBoolean(false)).toEqual(false);
  });

  test(`toBoolean(1) should return true`, () => {
    expect(toBoolean(1)).toEqual(true);
  });

  test(`toBoolean(0) should return false`, () => {
    expect(toBoolean(0)).toEqual(false);
  });

  test(`toBoolean("hello") should return true`, () => {
    expect(toBoolean("hello")).toEqual(true);
  });

  test(`toBoolean("") should return false`, () => {
    expect(toBoolean("")).toEqual(false);
  });
});

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { summarize } from "../summarize";

describe("summarize error case testing", () => {
  test(`summarize('a', 2) should throws TypeError`, () => {
    // @ts-ignore
    expect(() => summarize("a", 2)).toThrow(TypeError);
  });

  test(`summarize(0, 'b') should throws TypeError`, () => {
    // @ts-ignore
    expect(() => summarize(0, null)).toThrow(TypeError);
  });

  test(`summarize(NaN, 1) should throw TypeError`, () => {
    expect(() => summarize(NaN, 1)).toThrow(TypeError);
  });

  test(`summarize(2, NaN) should throw TypeError`, () => {
    expect(() => summarize(2, NaN)).toThrow(TypeError);
  });

  test(`summarize(Infinity, 1) should throws RangeError`, () => {
    expect(() => summarize(Infinity, 1)).toThrow(RangeError);
  });

  test(`summarize(0, -Infinity) should throws RangeError`, () => {
    expect(() => summarize(0, -Infinity)).toThrow(RangeError);
  });
});

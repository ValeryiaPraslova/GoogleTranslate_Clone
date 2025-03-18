/* eslint-disable @typescript-eslint/ban-ts-comment */
import { concatenate } from "../concatenate";

describe("concatenate error case testing", () => {
  test(`concatenate(1, "test") should throw TypeError`, () => {
    // @ts-ignore
    expect(() => concatenate(1, "test")).toThrow(TypeError);
  });

  test(`concatenate("test", null) should throw TypeError`, () => {
    // @ts-ignore
    expect(() => concatenate("test", null)).toThrow(TypeError);
  });

  test(`concatenate(undefined, "abc") should throw TypeError`, () => {
    // @ts-ignore
    expect(() => concatenate(undefined, "abc")).toThrow(TypeError);
  });
});

import { concatenate } from "../concatenate";

describe("concatenate positive case testing", () => {
  test('concatenate("a", "b") should returns "ab"', () => {
    expect(concatenate("a", "b")).toEqual("ab");
  });

  test(`concatenate("Hello ", "world!") should return "Hello world!"`, () => {
    expect(concatenate("Hello ", "world!")).toEqual("Hello world!");
  });

  test(`concatenate("", "test") should return "test"`, () => {
    expect(concatenate("", "test")).toEqual("test");
  });

  test(`concatenate(" ", "space") should return " space"`, () => {
    expect(concatenate(" ", "space")).toEqual(" space");
  });
});

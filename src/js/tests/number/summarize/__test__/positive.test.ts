import { summarize } from "../summarize";

describe("summarize positive case testing", () => {
  test(`summarize(1, 2) should be equal to 3`, () => {
    expect(summarize(1, 2)).toEqual(3);
  });

  test(`summarize(-8, 5) should be equal to -3`, () => {
    expect(summarize(-8, 5)).toEqual(-3);
  });
});

import { summarize } from "../summarize";

describe("summarize corner case testing", () => {
  test(`summarize(0, -0) should return 0`, () => {
    expect(summarize(0, -0)).toEqual(0);
  });

  test(`summarize(-0.1, 0.4) should be equal to 0.3`, () => {
    expect(summarize(-0.1, 0.4)).toEqual(0.3);
  });

  test(`summarize(100.90, -20.30) should be equal to 80.6`, () => {
    expect(summarize(100.9, -20.3)).toEqual(80.6);
  });

  test(`summarize(-5.02, 2.05) should be equal to -2.97`, () => {
    expect(summarize(-5.02, 2.05)).toEqual(-2.97);
  });
});

const summarize = (a: number, b: number): number =>
  Number((a + b).toPrecision(10));

describe("summarize", () => {
  test("0.1 + 0.2 should be equal to 0.3", () => {
    const result = summarize(0.1, 0.2);

    expect(result).toEqual(0.3);
  });

  test("100.6 + -20.4 should be equal to 80.2", () => {
    const result = summarize(100.6, -20.4);

    expect(result).toEqual(80.2);
  });
});

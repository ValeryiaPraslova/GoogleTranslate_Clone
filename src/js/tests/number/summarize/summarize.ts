export const summarize = (a: number, b: number): number => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw TypeError(
      `Unexpected argument types: a === "${typeof a}" b === "${typeof b}"`
    );
  }

  if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
    throw RangeError(`a and b should be finite: ${{ a, b }}`);
  }

  return Number((a + b).toPrecision(12));
};

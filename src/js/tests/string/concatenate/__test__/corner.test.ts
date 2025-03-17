import { concatenate } from "../concatenate";

describe("concatenate corner case testing", () => {
    test(`concatenate("", "") should return ""`, () => {
      expect(concatenate("", "")).toEqual("");
    });

    test(`concatenate("a", "") should return "a"`, () => {
      expect(concatenate("a", "")).toEqual("a");
    });

    test(`concatenate("longString", "1234567890") should return "longString1234567890"`, () => {
      expect(concatenate("longString", "1234567890")).toEqual(
        "longString1234567890"
      );
    });
});

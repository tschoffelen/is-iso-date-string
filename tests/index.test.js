const isIsoDateString = require("../src");

describe("isIsoDateString", () => {
  it("fails on non dates and non strings", () => {
    expect(isIsoDateString(1)).toBe(false);
    expect(isIsoDateString({})).toBe(false);
    expect(isIsoDateString([])).toBe(false);
    expect(isIsoDateString("1")).toBe(false);
    expect(isIsoDateString(new Date())).toBe(false);
  });

  it("detects various valid date strings", () => {
    expect(isIsoDateString("2021-01-01")).toBe(true);
    expect(isIsoDateString("2021-01-01T00:00:00")).toBe(true);
    expect(isIsoDateString("2021-01-01T00:00:00.000Z")).toBe(true);
    expect(isIsoDateString("2021-01-01T00:00:00.000+00:00")).toBe(true);
  });

  it("fails on things that look valid, but are not", () => {
    expect(isIsoDateString("2021-01-01T00:00:00.000Z ")).toBe(false);
    expect(isIsoDateString("2021-01-01T00:00:00.000+00:00 ")).toBe(false);
    expect(isIsoDateString("03-09-2024 07:39:14")).toBe(false);
  });
});

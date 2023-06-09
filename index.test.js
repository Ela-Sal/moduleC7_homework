const { reversed } = require("./index.js");

describe("test reverse", () => {
  it("reverse string", () => {
    const result = reversed("string");
    expect(result).toBe("gnirts");
  })
  })

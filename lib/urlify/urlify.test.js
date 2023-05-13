const urlify = require("./");

describe("urlifing strings", () => {
  it("should not change a thing on a valid string", () => {
    const input = "this-is-a-valid-string-02-34";
    const output = urlify(input);
    expect(input).toEqual(output);
  });

  it("should remove any starting/ending hyphen", () => {
    const expectedOutput = "ends-with-hypehn";
    const input = `--${expectedOutput}---`;
    const output = urlify(input);

    expect(output).toEqual(expectedOutput);
  });

  it("should trim the string", () => {
    const expectedOutput = "ends-with";
    const input = ` ${expectedOutput}  `;
    const output = urlify(input);

    expect(output).toEqual(expectedOutput);
  });

  it("should replace capital letters with lower case", () => {
    const input = `ThisIsMyInput`;
    const output = urlify(input);

    expect(output).toEqual(input.toLowerCase());
  });

  it("should re[;ace] any non a-z0-9 characters with hyphen", () => {
    const input = "abc#$deg*&%f";
    const output = urlify(input);

    expect(output).toEqual("abc--deg---f");
  });

  it("should truncate to 63 characters", () => {
    const input =
      "abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789";
    const output = urlify(input);
    expect(output.length).toEqual(63);
  });
});

const { it, expect } = require("@jest/globals");
const { Character } = require("./functions/characters");

describe("Character", function () {
  test("the charactertest has a name property", function () {
    const charactertest = new Character("Djara");
    const expectedOutput = "Djara";
    const actualOutput = charactertest.name;
    expect(actualOutput).toEqual(expectedOutput);
  });
});

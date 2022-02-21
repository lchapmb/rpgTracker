import CharacterModel from "../models/CharacterModel";

describe("CharacterModel", function () {
  test("testing to see if character gets name correctly", () => {
    const character = new CharacterModel("Theo", 100, 10);
    expect(character.name).toBe("Theo");
  });

  test("testing to see if character gets health correctly", () => {
    const character = new CharacterModel("Theo", 100, 10);
    expect(character.health).toBe(100);
  });

  test("testing to see if character gets armor correctly", () => {
    const character = new CharacterModel("Theo", 100, 10);
    expect(character.health).toBe(100);
  });

  test("testing to see if character gets id correctly", () => {
    const character = new CharacterModel("Theo", 100, 10);
    expect(typeof character.id).toBe("number");
    expect(character.id).toBeLessThan(100);
    expect(character.id).toBeGreaterThan(0);
  });
});

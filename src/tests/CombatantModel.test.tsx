import Character from "../models/CharacterModel";
import Combatant from "../models/CombatantModel";

describe("CombatantModel", function () {
  const character = new Character("Balo", 77, 15);
  test("testing the Combatant has initiative", () => {
    const combatant = new Combatant(10, character);
    expect(combatant.initiative).toBe(10);
  });
  test("testing the Combatant contains a Character", () => {
    const combatant = new Combatant(10, character);
    expect(combatant).toHaveProperty("character");
  });
  test("testing the Character in the Combatant is the expected character", () => {
    const combatant = new Combatant(10, character);
    expect(combatant.character).toBe(character);
  });
});

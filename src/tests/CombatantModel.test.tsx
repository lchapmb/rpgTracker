import Combatant from "../models/CombatantModel";

describe("CombatantModel", function () {
  test("testing the Combatant has initiative", () => {
    const combatant = new Combatant(10);
    expect(combatant.initiative).toBe(10);
  });
});

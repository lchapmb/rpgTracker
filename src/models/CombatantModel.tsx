import CombatantInterface from "../interface/CombatantInterface";

export default class Combatant implements CombatantInterface {
  initiative: number;

  constructor(initiative: number) {
    this.initiative = initiative;
  }
}

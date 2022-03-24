import CombatantInterface from "../interface/CombatantInterface";
import Character from "./CharacterModel";

export default class Combatant implements CombatantInterface {
  initiative: number;
  character: Character;

  constructor(initiative: number, character: Character) {
    this.initiative = initiative;
    this.character = character;
  }
}

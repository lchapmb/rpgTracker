import CombatantInterface from "../interface/CombatantInterface";
import Character from "./CharacterModel";

export default class Combatant implements CombatantInterface {
  initiative: number;
  character: Character;
  id: number;
  name: string;
  health: number;
  armour: number;

  constructor(initiative: number, character: Character) {
    this.initiative = initiative;
    this.character = character;
    this.id = character.id;
    this.name = character.name;
    this.health = character.health;
    this.armour = character.armour;
  }
}

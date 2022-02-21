import CreatureInterface from "../interface/CreatureInterface";

export default class Character implements CreatureInterface {
  id: number;
  name: string;
  health: number;
  armour: number;

  constructor(name: string, health: number, armour: number) {
    this.id = Math.floor(Math.random() * 99);
    this.name = name;
    this.health = health;
    this.armour = armour;
  }
}

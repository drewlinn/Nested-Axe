export class Character {
  constructor (public name: string, public gender: string, public charisma: number = 1, public dexterity: number = 1, public intelligence: number = 1, public strength: number = 1, public inventory: string[] = [], public gold: number = 0) { }
}

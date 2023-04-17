import { MilitaryUnit } from './military-unit'

export class Necromancer extends MilitaryUnit {
  corpses: number

  constructor(price: number, speed: number, corpses: number) {
    super(price, speed)
    this.corpses = corpses
  }

  calculateCost(): number {
    return this.price + this.corpses
  }
}

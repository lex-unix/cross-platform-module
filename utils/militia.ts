import { MilitaryUnit } from './military-unit'

export class Militia extends MilitaryUnit {
  constructor(price: number, speed: number) {
    super(price, speed)
  }

  calculateCost(): number {
    return this.price
  }
}

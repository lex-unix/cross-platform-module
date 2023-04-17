import { MilitaryUnit } from './military-unit'

export class Orc extends MilitaryUnit {
  vargFood: number

  constructor(price: number, speed: number, vargFood: number) {
    super(price, speed)
    this.vargFood = vargFood
  }

  calculateCost(): number {
    return this.price + this.vargFood
  }
}

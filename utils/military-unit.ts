export abstract class MilitaryUnit {
  price: number
  speed: number

  constructor(price: number, speed: number) {
    this.price = price
    this.speed = speed
  }

  abstract calculateCost(): number
}

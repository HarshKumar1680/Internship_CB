class Car {
  constructor(name, price, isElectric) {
    this.name = name;
    this.price = price;
    this.isElectric = isElectric;
  }

  startCar() {
    console.log(`Starting the car ${this.name}`);
  }
}

const c1 = new Car('BMW', 1000, true);

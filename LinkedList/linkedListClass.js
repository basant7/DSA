class Car {
  constructor(brand) {
    this.carName = brand;
  }

  // if we create a static method then we can call that function from the class directly
  // eg Car.hello()
  static hello() {
    return "hello world";
  }

  static newCar(x) {
    return x.carName;
  }
}

let myCar = new Car("Mustang");
console.log(myCar);
console.log(myCar.carName);
console.log(typeof myCar);
console.log(Car.hello());
console.log(Car.newCar(myCar));

class Cars {
    marca: string;
    constructor(marca: string) {
        this.marca = marca;
    }
    drive() {
      console.log(`Driving a ${this.marca}`);
    }
  }

let myCar = new Cars("Toyota");
console.log(myCar.marca);
myCar.drive();

  
  
  
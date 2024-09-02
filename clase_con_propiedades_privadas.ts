class Carro {
    private marca: string;
    constructor(marca: string) {
        this.marca = marca;
    }
    drive() {
      console.log(`Driving a ${this.marca}`);
    }
    getMarca(){
        return this.marca;
    }
  }

let myCarro = new Carro("Toyota");
console.log(myCarro.marca);
console.log(myCarro.getMarca());
myCarro.drive();

  
  
  
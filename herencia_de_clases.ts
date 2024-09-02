class Carros {
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

class ElectricCar extends Carros {
    batteryLife: number;
    constructor(batteryLife: number, marca: string){
        super(marca);
        this.batteryLife = batteryLife;
    }
    charge(){
        console.log("El coche se esta cargando");
    }
}

let myCarros = new Carros("Toyota");
console.log(myCarros.marca);
console.log(myCarros.getMarca());
myCarro.drive();

  
  
  
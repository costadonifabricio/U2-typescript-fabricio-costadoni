interface Shape {
    area(): number;
}

class Circle implements Shape {
    radio: number;
    constructor(radio: number) {
        this.radio = radio;
    }
    area(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

let circle = new Circle(5);
console.log(circle.area());


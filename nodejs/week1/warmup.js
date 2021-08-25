
console.log("inside warmup file");

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    getDiameter(){
        return 2 * this.radius;
    }
    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
    getArea(){
        return Math.PI * this.radius * this .radius;
    }
}

const circle1 = new Circle(10);
console.log(`For Circle 1: Diameter is = ${circle1.getDiameter().toFixed(2)}, Circumference is = ${circle1.getCircumference().toFixed(2)}, and Area is = ${circle1.getArea().toFixed(3)}`);

const circle2 = new Circle(5);
console.log(`For Circle 2: Diameter is = ${circle2.getDiameter().toFixed(2)}, Circumference is = ${circle2.getCircumference().toFixed(2)}, and Area is = ${circle2.getArea().toFixed(3)}`);

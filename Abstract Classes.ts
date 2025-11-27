// Abstract Class
// Create an abstract class Shape with:
// · property color: string
// · abstract method getArea(): number
// Create two subclasses that implement getArea.
// · Circle with property
// o radius: number
// · Rectangle with properties:
// o sideA: number
// o sideB: number

abstract class Shape {
   private color: string;

   constructor(color: string) {
      this.color = color;
   }

   abstract getArea(): number;
}

class Circle extends Shape {
   private radius: number;

   constructor(color: string, radius: number) {
      super(color);
      this.radius = radius;
   }

   getArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
   }
}

class Rectangle extends Shape {
   private sideA: number;
   private sideB: number;

   constructor(color: string, sideA: number, sideB: number) {
      super(color);
      this.sideA = sideA;
      this.sideB = sideB;
   }

   getArea() {
      return this.sideA * this.sideB;
   }
}

const circle = new Circle('red', 5);
console.log(circle.getArea());

const rectangle = new Rectangle('blue', 4, 6);
console.log(rectangle.getArea());

// 4. Abstraction
// Define an interface Animal with a method makeSound(): string
// Create a class Dog that implements this interface.
// The makeSound method should return "Woof".

interface Animal {
   makeSound(): string;
}

class Dog implements Animal {
   makeSound(): string {
      return 'Woof';
   }
}

const dog = new Dog();
console.log(dog.makeSound());
